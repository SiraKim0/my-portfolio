import Link from "next/link";
import DarkModeToggleButton from "./dark-mode";

export default function Footer() {
  return (
    <>
      <header className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <Link href="/" legacyBehavior>
            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="90"
                strokeMiterlimit="10"
                className="h-10 w-10 rounded-full bg-red-500 p-2 text-white"
                viewBox="0 0 1417.32 1417.32"
              >
                <g>
                  <circle cx="300" cy="644" r="280"></circle>
                  <circle cx="1100" cy="644" r="280"></circle>
                </g>
                <path
                  d="M698.51,1341.3l-337.59-326.06c-0.57-0.55-0.18-1.51,0.61-1.51h675.19c0.79,0,1.18,0.96,0.61,1.51
	L699.74,1341.3C699.39,1341.63,698.85,1341.63,698.51,1341.3z"
                />
              </svg>
              <span className="ml-3 text-xl">SIRA&#39;s Blog</span>
            </a>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <Link href="/" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>
            <Link href="/aboutme" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">소개</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">블로그</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">CONTACT</a>
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
