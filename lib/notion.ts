import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getBlogPosts = async () => {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getMusicList = async () => {
  const databaseId = process.env.NOTION_MUSIC_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

