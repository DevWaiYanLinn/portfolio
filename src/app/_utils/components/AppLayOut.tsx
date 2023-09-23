"use client";
import { useState, useCallback } from "react";
import SideBar from "./SideBar";
import ThemeContextProvider from "../context/ThemeContextProvider";
import MobileNavBar from "./MobileNavBar";
export default function AppLayOut({ children }: { children: any }) {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const handleSideBar = useCallback(() => {
    setSideBar(!sideBar);
  }, [sideBar]);
  return (
    <ThemeContextProvider>
      <div className="dark:bg-zinc-900 dark:text-white">
        <MobileNavBar onClick={handleSideBar}/>
        <div className="flex">
          <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
          <div className=" w-full h-screen overflow-y-scroll">
            <div className="xs:px-6 md:px-10">
              <div className="xs:mt-5 md:mt-0">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}
