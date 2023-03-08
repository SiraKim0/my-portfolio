import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
        <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자 김시라입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          저에 대하여 궁금하시다면 아래 링크를 확인해주세요
        </p>
        <div className="flex justify-center">
          <Link href="/blogs" legacyBehavior>
            <a className="btn-blog">github</a>
          </Link>
          <Link href="/blogs" legacyBehavior>
            <a className="btn-blog">resume</a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <Animation />
      </div>
    </>
  );
}
