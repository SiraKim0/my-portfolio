import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";

const PostsDetail = ({ data }: any) => {
  console.log(data);
  if (!data) return <>Loading</>;
  return (
    <div>
      <NotionRenderer
        recordMap={data}
        fullPage={true}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
        }}
      />
    </div>
  );
};
export default PostsDetail;
