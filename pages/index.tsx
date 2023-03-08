import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/home/hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="나만의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="body-font flex min-h-screen flex-col items-center justify-center text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
