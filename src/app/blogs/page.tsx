import Typography from "../_utils/components/common/Typography";
import Card from "./_components/Card";

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center">
        <Typography element="h1">My Blog.</Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 xs:w-8 ws:h-8"
        >
          <path
            className="text-white"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      <hr className="border-dashed mt-3" />
      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-10">
        <Card
          title="Food Mini Order System"
          language="Python"
          src="/blogs/python.svg"
        ></Card>
        <Card
          title="Fastify Mvc"
          language="Node.JS"
          src="/blogs/node-js.svg"
        ></Card>
        <Card
          title="Lazyloading Image"
          language="Javascript"
          src="/blogs/javascript.svg"
        ></Card>
        <Card
          title="Myanmar's Townships"
          language="HTML, CSS, Javascript"
          src="/blogs/javascript.svg"
        ></Card>
      </div>
    </>
  );
}
