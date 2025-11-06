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
    const listChildrenAll = async (blockId: string) => {
      const out: any[] = [];
      let cursor: string | undefined = undefined;
      do {
        const res = await notion.blocks.children.list({
          block_id: blockId,
          start_cursor: cursor,
        });
        out.push(...res.results);
        cursor = res.has_more ? res.next_cursor ?? undefined : undefined;
      } while (cursor);
      return out;
    };

    const blocks: any[] = await listChildrenAll(page.id);

    // Attach first-level children for blocks that have children (e.g., toggles, list items)
    for (const b of blocks) {
      if ((b as any).has_children) {
        try {
          (b as any).children = await listChildrenAll((b as any).id);
          // Optional: attach second-level for toggle children
          if (Array.isArray((b as any).children)) {
            for (const c of (b as any).children) {
              if ((c as any).has_children) {
                (c as any).children = await listChildrenAll((c as any).id);
              }
            }
          }
        } catch (e) {
          console.warn('fetch child blocks failed', e);
        }
      }
    }

    return { page, blocks };
  } catch (error) {
    console.warn('getBlogPostBySlug error', error);
    return null;
  }
}
