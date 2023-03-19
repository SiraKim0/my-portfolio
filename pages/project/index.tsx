import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import ProjectItem from "@/components/project/projects-item";
import Layout from "@/components/layout";
import { NotionPostDataType } from "@/types";
import notionService from "../api";
import { PROJECT_DATABASE_ID } from "@/config";
import { AxiosResponse } from "axios";
import { getNotionProjectPost } from "../api/notionApi";

type projectProps = {
  projects: NotionPostDataType;
};

const Project: NextPage<projectProps> = ({ projects }) => {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>시라의 프로젝트</title>
        <meta name="description" content="나만의 포트폴리오 만들기" />
      </Head>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl">프로젝트</h1>
        <span className="mt-8 mb-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
        <h1>
          <p className="mb-8 leading-relaxed">
            내용을 클릭하면 프로젝트 깃허브 레파지토리를 확인할 수 있습니다.
          </p>
        </h1>
      </div>
      <div className="m-4 grid grid-cols-1 gap-8 p-12 md:grid-cols-2">
        {projects &&
          projects.results.map((aProject) => (
            <ProjectItem
              key={aProject.properties.slug.rich_text[0].plain_text}
              title={aProject.properties.title.title[0].plain_text}
              slug={aProject.properties.slug.rich_text[0].plain_text}
              description={
                aProject.properties.description.rich_text[0].plain_text
              }
              tag={aProject.properties.tags.multi_select}
              id={aProject.id}
              start={aProject.properties.date.date.start}
              end={aProject.properties.date.date.end}
              cover={aProject.cover.external.url}
              githubUrl={aProject.properties.github.url}
            />
          ))}
      </div>
    </Layout>
  );
};
export default Project;

export const getStaticProps: GetStaticProps = async () => {
  const res = await getNotionProjectPost({
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

  const projects = res.data;

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
};
