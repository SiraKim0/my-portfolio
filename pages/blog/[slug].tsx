import Layout from "../../components/layout";
import { useRouter } from "next/router";

const BlogPost = () => {
  const { slug } = useRouter().query;
  return (
    <>
      <Layout>
        <div>Post: {slug} </div>
      </Layout>
    </>
  );
};

export default BlogPost;
