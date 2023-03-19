import React from "react";
import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/layout";
import Head from "next/head";
import BlogItem from "@/components/blog/blogs-item";
import { NotionPostDataType } from "@/types";
import { getNotionBlogPost } from "../api/notionApi";

type blogProps = {
  blogs: NotionPostDataType;
};

const Blog: NextPage<blogProps> = ({ blogs }) => {
  // console.log("blogs:", blogs);
  return (
    <Layout>
      <Head>
        <title>시라의 블로그</title>
        <meta name="description" content="나만의 포트폴리오 만들기" />
      </Head>
      {blogs && (
        <div className="mb-10 flex min-h-screen flex-col items-center justify-center px-5 py-10">
          <h1 className="text-3xl">블로그</h1>
          <span className="mt-8 mb-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
          <h1>
            <p className="mb-8 leading-relaxed">
              작성 완료된 블로그 글을 확인할 수 있습니다
            </p>
          </h1>
          <div className="w-4/6">
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
                cover={aBlogs.cover.external?.url}
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
  const res = await getNotionBlogPost({
    filter: {
      property: "status",
      status: {
        equals: "Upload",
      },
    },
    sorts: [
      {
        property: "date",
        direction: "descending",
      },
    ],
  });

  const blogs = res.data;

  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
};
