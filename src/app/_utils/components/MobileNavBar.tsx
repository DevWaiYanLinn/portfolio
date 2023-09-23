import SwitchTheme from "./common/SwitchTheme";
import { MouseEvent } from "react";
export default function MobileNavBar({ onClick = (event: MouseEvent<HTMLButtonElement>) => {},}:{onClick : (event: MouseEvent<HTMLButtonElement>) => void,}) {
  return (
    <div className="shadow-md border-b dark:bg-zinc-900 border-white border-opacity-5 md:hidden z-[100] top-0 right-0 sticky w-full flex justify-between items-center xs:px-6 px-10 p-3 ">
      <h2 className="text-2xl font-serif dark:text-white">WAI YAN LIN</h2>
      <div className="flex justify-center items-center">
        <SwitchTheme />
        <button onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              className="dark:text-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
