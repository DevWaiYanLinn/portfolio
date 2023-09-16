import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">My Blog.</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
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
        <div className=" border border-white border-opacity-20 pb-10">
          <Image
            src={"/blogs/python.svg"}
            alt="food-order"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div className="font-serif md:ADLaM-font bg-zinc-900 text-white p-5 mx-8 -mt-10 z-10 relative text-center">
            <p>Magic Food Mini Order System</p>
            <p className="mt-3 text-xs">Python</p>
          </div>
        </div>
        <div className=" border border-white border-opacity-20 pb-10">
          <Image
            src={"/blogs/node-js.svg"}
            alt="node-js"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div className="font-serif md:ADLaM-font bg-zinc-900 text-white p-5 mx-8 -mt-10 z-10 relative text-center">
            <p>Fastify MVC</p>
            <p className="mt-3 text-xs">Node.JS</p>
          </div>
        </div>
        <div className=" border border-white border-opacity-20 pb-10">
          <Image
            src={"/blogs/javascript.svg"}
            alt="javascript"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div className="font-serif md:ADLaM-font bg-zinc-900 text-white p-5 mx-8 -mt-10 z-10 relative text-center">
            <p>Lazy Loading Image</p>
            <p className="mt-3 text-xs">Javascript</p>
          </div>
        </div>
        <div className=" border border-white border-opacity-20 pb-10">
          <Image
            src={"/blogs/javascript.svg"}
            alt="javascript"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div className="font-serif md:ADLaM-font bg-zinc-900 text-white p-5 mx-8 -mt-10 z-10 relative text-center">
            <p>Myanmar's Townships</p>
            <p className="mt-3 text-xs">HTML, CSS, Javascript</p>
          </div>
        </div>
      </div>
    </>
  );
}
