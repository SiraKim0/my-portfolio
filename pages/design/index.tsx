import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import DesignItem from "@/components/design/design-item";
import Layout from "@/components/layout";
import { NotionPostDataType } from "@/types";
import { getNotionDesignPost } from "../api/notionApi";

type designProps = {
  design: NotionPostDataType;
};

const Design: NextPage<designProps> = ({ design }) => {
  // console.log(design);
  return (
    <Layout>
      <Head>
        <title>시라의 프로젝트</title>
        <meta name="description" content="나만의 포트폴리오 만들기" />
      </Head>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl">UI/UX 웹 디자인</h1>
        <span className="mt-8 mb-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
        <h1>
          <p className="mb-8 leading-relaxed">
            프로젝트를 클릭하면 내용을 확인할 수 있는 노션 페이지로 이동할 수
            있습니다.
          </p>
        </h1>
      </div>
      <div className="m-4 grid grid-cols-1 gap-8 p-12 md:grid-cols-2">
        {design &&
          design.results.map((aProject) => (
            <DesignItem
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
              cover={aProject.cover.file?.url || aProject.cover.external.url}
              githubUrl={aProject.properties.github.url}
            />
          ))}
      </div>
    </Layout>
  );
};
export default Design;

export const getStaticProps: GetStaticProps = async () => {
  const res = await getNotionDesignPost({
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

  const design = res.data;

  return {
    props: {
      design,
    },
    revalidate: 60,
  };
};
