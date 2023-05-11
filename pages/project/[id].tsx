import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import notionService from "../api";
import { PROJECT_DATABASE_ID } from "@/config";
import { NotionPostDataType } from "@/types";
import { AxiosResponse } from "axios";
import dynamic from "next/dynamic";
import notionApi from "../api/notionApi";

const ProjectPostDetail = dynamic(
  () => import("../../components/posts-detail")
);

type projectPostProps = {
  recordMap: NotionPostDataType;
};

const ProjectPost: NextPage<projectPostProps> = ({ recordMap }) => {
  const { id } = useRouter().query;
  console.log(recordMap);

  return (
    <Layout>
      <ProjectPostDetail data={recordMap} />
    </Layout>
  );
};

export default ProjectPost;

export const getStaticPaths = async () => {
  const res = await notionService.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>
  >(`/databases/${PROJECT_DATABASE_ID}/query`);
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
  const pageId = params?.id?.toString() || "";
  const recordMap = await notionApi.getPage(pageId);
  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};
