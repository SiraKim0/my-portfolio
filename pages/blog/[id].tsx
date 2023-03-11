import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import notionService from "../api";
import { DATABASE_ID } from "@/config";
import { NotionPostDataType } from "@/types";
import { AxiosResponse } from "axios";
import dynamic from "next/dynamic";

// const BlogPostDetail = dynamic(
//   () => import("../../components/blog/blogs-detail")
// );

const BlogPost = ({ post }) => {
  const { id } = useRouter().query;
  console.log("post", post);

  return (
    <>
      <Layout>
        <h1>
          {post.properties.title.title.map((item) => {
            return <>{item.text.content}</>;
          })}
        </h1>
      </Layout>
    </>
  );
};

export default BlogPost;

export const getStaticPaths = async () => {
  const res = await notionService.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>
  >(`/databases/${DATABASE_ID}/query`);
  const paths = res.data.results.map((result) => ({
    params: {
      id: result.id,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  //1
  // const notion = new Client({ auth: process.env.NOTION_TOKEN });
  // const blockID = params?.id?.toString() || "";
  // const post = await notion.blocks.children.list({
  //   block_id: blockID,
  // });
  // return {
  //   props: {
  //     post,
  //   },
  // };

  //2
  const pageId = params?.id?.toString() || "";
  const res = await notionService.get<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>
  >(`/pages/${pageId}`);
  const data = res.data;
  return {
    props: {
      post: data,
    },
  };
};
