import React from "react";
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from "../config";
import BlogItem from "../components/blog/blogs-item";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

// type blogProps = {
//   blogs: string;
// };

const Blog = ({ blogs }) => {
  console.log(blogs);
  return (
    <Layout>
      <div className="mb-10 flex min-h-screen flex-col items-center justify-center px-5 py-10">
        <h1>
          <span className="pl-4 text-blue-500">
            총 블로그 글: {blogs.results.length}
          </span>
        </h1>
        <div className="w-full">
          {blogs.results.map((item) => (
            <Link key={item.id} href={`blog/${item.id}`}>
              <BlogItem data={item} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const blogs = await res.json();

  return {
    props: { blogs },
  };
};

export default Blog;
