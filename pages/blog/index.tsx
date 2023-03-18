import React from "react";
import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/layout";
import BlogItem from "@/components/blog/blogs-item";
import { NotionPostDataType } from "@/types";
import notionService from "../api";
import { BLOG_DATABASE_ID } from "@/config";
import { AxiosResponse } from "axios";

type blogProps = {
  blogs: NotionPostDataType;
};

const Blog: NextPage<blogProps> = ({ blogs }) => {
  console.log("blogs:", blogs);
  return (
    <Layout>
      {blogs && (
        <div className="mb-10 flex min-h-screen flex-col items-center justify-center px-5 py-10">
          <h1>
            <span className="pl-4 text-blue-500">
              총 블로그 글: {blogs?.results.length}
            </span>
          </h1>
          <div className="w-full">
            {blogs?.results.map((aBlogs) => (
              <BlogItem
                key={aBlogs.properties.slug.rich_text[0].plain_text}
                title={aBlogs.properties.title.title[0].plain_text}
                slug={aBlogs.properties.slug.rich_text[0].plain_text}
                date={aBlogs.properties.date.date.start}
                description={
                  aBlogs.properties.description.rich_text[0].plain_text
                }
                tag={aBlogs.properties.tags.multi_select}
                id={aBlogs.id}
                cover={aBlogs.cover.external.url}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const res = await notionService.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>
  >(`/databases/${BLOG_DATABASE_ID}/query`);

  const blogs = res.data;

  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
};
