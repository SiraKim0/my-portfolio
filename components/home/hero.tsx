import Animation from "./animation";
import Link from "next/link";
import { Url } from "@/route/url";

export default function Hero() {
  return (
    <>
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
        <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          신입 웹 퍼블리셔 김시라입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          저의 홈페이지에서 간단한 소개 글과 프로젝트 및 블로그 글을 확인할 수
          있습니다. <br /> 저에 대하여 궁금하시다면 아래 버튼을 클릭하여
          프로젝트와 이력서를 확인해주세요! <br />
          <span className="text-slate-600">
            *노션 페이지로 이동 시 약 3~4초 로딩 시간이 소요됩니다*
          </span>
        </p>
        <div className="flex justify-center">
          <Link href="/project" legacyBehavior>
            <a className="btn-blog">프로젝트 보러가기</a>
          </Link>
          <Link href={Url.RESUME} legacyBehavior>
            <a className="btn-blog" target="_blank">
              이력서
            </a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <Animation />
      </div>
    </>
  );
}
