import { Client } from '@notionhq/client';

const apiKey = process.env.NOTION_API_KEY;
const notion = new Client({ auth: apiKey });

async function queryOrEmpty(databaseId?: string) {
  if (!apiKey || !databaseId) {
    console.warn('Notion env missing: NOTION_API_KEY or database ID');
    return [];
  }
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    return response.results;
  } catch (error) {
    console.warn('@notionhq/client warn: request fail', error);
    return [];
  }
}

export const getBlogPosts = async () => {
  return queryOrEmpty(process.env.NOTION_BLOG_DATABASE_ID);
};

export const getMusicList = async () => {
  return queryOrEmpty(process.env.NOTION_MUSIC_DATABASE_ID);
};

// Fetch single blog post by slug (Notion property `id`) and its blocks
export async function getBlogPostBySlug(slug: string) {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  if (!apiKey || !databaseId) {
    console.warn('Notion env missing for getBlogPostBySlug');
    return null;
  }
  try {
    const pageQuery = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'id',
        rich_text: { equals: slug },
      },
    });

    const page = pageQuery.results?.[0] as any;
    if (!page) return null;

    // Load blocks (with pagination)
    const blocks: any[] = [];
    let cursor: string | undefined = undefined;
    do {
      const res = await notion.blocks.children.list({
        block_id: page.id,
        start_cursor: cursor,
      });
      blocks.push(...res.results);
      cursor = res.has_more ? res.next_cursor ?? undefined : undefined;
    } while (cursor);

    return { page, blocks };
  } catch (error) {
    console.warn('getBlogPostBySlug error', error);
    return null;
  }
}
