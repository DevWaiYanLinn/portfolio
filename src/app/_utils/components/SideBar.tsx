"use client";
import NavList from "./NavList";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function SideBar({
  sideBar,
  setSideBar,
}: {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const path = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (sideBar) setSideBar(false);
  }, [path]);
  return (
    <>
      <div
        className={`${
          sideBar ? "xs:ml-0" : "xs:-ml-[200px]"
        } h-screen bg-white dark:bg-zinc-900 ${mounted ? 'transition-[0.5s]' : 'transition-[0s]'}  z-[200] xs:fixed xs:top-0 md:sticky md:ml-0 w-[200px]  border-r border-opacity-10 border-[#F5DEB3] shadow-md`}
      >
        <div className="flex-col flex justify-between h-full">
          <div>
            <div className="relative">
              <img src="/p.jpeg" alt="Profile" />
            </div>
            <NavList />
          </div>
        </div>
      </div>
    </>
  );
}
