import Image from "next/image";
export default function Card({
  src,
  title,
  language,
}: {
  src: string;
  title: string;
  language: string;
}) {
  return (
    <div className="border dark:border-white dark:border-opacity-10 border-black border-opacity-10  pb-10">
      <Image
        loading="lazy"
        src={src}
        alt={language}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <div className="font-serif md:ADLaM-font bg-white dark:bg-zinc-900 dark:border-none border border-black border-opacity-20  p-5 mx-8 -mt-10 z-10 relative text-center">
        <p>{title}</p>
        <p className="mt-3 text-xs">{language}</p>
      </div>
    </div>
  );
}
