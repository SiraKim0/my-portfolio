import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import notionService from "../api";
import { DATABASE_ID } from "@/config";
import { NotionPostDataType } from "@/types";
import { AxiosResponse } from "axios";
import dynamic from "next/dynamic";
import notionApi from "../api/notionApi";

const BlogPostDetail = dynamic(
  () => import("../../components/blog/blogs-detail")
);

type blogPostProps = {
  recordMap: NotionPostDataType;
};

const BlogPost: NextPage<blogPostProps> = ({ recordMap }) => {
  const { id } = useRouter().query;
  console.log(recordMap);

  return (
    <Layout>
      <BlogPostDetail data={recordMap} />
    </Layout>
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
  // const posts = await notion.blocks.children.list({
  //   block_id: blockID,
  // });
  // return {
  //   props: {
  //     posts,
  //   },
  // };

  //2
  const pageId = params?.id?.toString() || "";
  const recordMap = await notionApi.getPage(pageId);
  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};
