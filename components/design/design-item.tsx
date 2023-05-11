import { Select } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
  tag: Select[];
  id: string;
  cover: string;
  start: string;
  end: string;
  githubUrl: string;
};

const DesignItem = ({
  title,
  slug,
  description,
  tag,
  id,
  cover,
  githubUrl,
}: Props) => {
  return (
    <div className="project-card">
      <Link href={`design/${id}`} target="_blank">
        <Image
          className="h-64 w-full rounded-t-xl"
          alt="cover image"
          src={cover}
          width={200}
          height={100}
          style={{ objectFit: "cover" }}
          quality={100}
        />

        <div className="sx:w-full grid grid-cols-1 gap-8 p-5 md:grid-cols-4">
          <div className="col-span-4 mt-6">
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
            <h3 className="mt-5 text-xl">{description}</h3>
            <div className="mt-5 flex items-start">
              {tag.map((item) => (
                <h1
                  className="mr-2 whitespace-pre rounded-md bg-sky-200 px-2 py-1 dark:bg-sky-700"
                  key={item.id}
                >
                  {item.name}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default DesignItem;
