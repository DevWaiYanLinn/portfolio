"use client";
import { useEffect, useRef } from "react";
import NavList from "./NavList";

export default function SideBar({ sideBar }: { sideBar: boolean }) {
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (sideBar) {
      sideBarRef.current?.classList.add("show-sidebar");
    } else {
      sideBarRef.current?.classList.remove("show-sidebar");
    }
  }, [sideBar]);
  return (
    <>
      <div
        ref={sideBarRef}
        className="h-screen z-50 xs:absolute xs:-ml-[200px] xs:top-0 md:sticky md:ml-0 w-[200px] bg-zinc-900 border-r border-opacity-10 border-[#F5DEB3]"
      >
        <div className="flex-col flex justify-between h-full">
          <div>
            <div className="relative">
              <img src="/p.jpeg" alt="Profile" />
              {/* <div className="absolute bottom-0 py-1 left-0 w-full text-lg text-center g-bg text-white ADLaM-font">
                WAI YAN LIN
              </div> */}
            </div>
            <NavList/>
          </div>
        </div>
      </div>
    </>
  );
}
