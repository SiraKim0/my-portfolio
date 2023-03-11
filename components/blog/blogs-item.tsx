import Image from "next/image";
import { Select } from "@/types";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tag: Select[];
  id: string;
  cover: string;
};

export default function BlogItem({
  title,
  slug,
  date,
  description,
  tag,
  id,
  cover,
}: Props) {
  return (
    <Link href={`blog/${id}`}>
      <div className="blogs-card">
        <div className="sx:w-full grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-3 mt-6">
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
            <h3 className="mt-4 text-xl">{description}</h3>
            <div className="mt-2 flex items-start">
              {tag.map((item) => (
                <h1
                  className="w-30 mr-2 rounded-md bg-sky-200 px-2 py-1 dark:bg-sky-700"
                  key={item.id}
                >
                  {item.name}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
