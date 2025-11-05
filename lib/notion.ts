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
