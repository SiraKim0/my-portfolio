import Image from "next/image";

export default function BlogItem({ data }) {
  const title = data.properties.제목.title[0].plain_text;
  const description = data.properties.설명.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;

  return (
    <div className="blogs-card">
      <div className="sx:w-full grid grid-cols-1 gap-8 md:grid-cols-4">
        <Image
          className="h-64 w-full rounded-t-xl"
          alt="cover"
          src={imgSrc}
          width="100"
          height="100"
          layout="reponsive"
          objectFit="none"
          quality={100}
        />
        <div className="col-span-3 mt-6">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          <h3 className="mt-4 text-xl">{description}</h3>
          <div className="mt-2 flex items-start">
            {tags.map((item) => (
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
  );
}
