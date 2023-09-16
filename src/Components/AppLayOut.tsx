"use client";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { usePathname } from "next/navigation";
export default function AppLayOut({ children }: { children: any }) {
  const path = usePathname();
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  useEffect(() => {
    setSideBar(false);
  }, [path]);
  return (
    <>
      <div className="md:hidden top-0 right-0 absolute w-full flex justify-between items-center xs:px-6 px-10 p-3 bg-zinc-900">
        <h2 className="text-2xl ADLaM-font text-white">
          WAI YAN LIN
        </h2>
        <button onClick={handleSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              className="text-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex">
        <SideBar sideBar={sideBar} />
        <div className=" bg-zinc-900 w-full h-screen overflow-y-scroll">
          <div className="xs:px-6 px-10 md:mt-10 text-white">{children}</div>
        </div>
      </div>
    </>
  );
}
