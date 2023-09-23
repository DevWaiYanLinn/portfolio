"use client";
import { MouseEvent } from "react";
export default function Button({
  type = "button",
  onClick = (event: MouseEvent<HTMLButtonElement>) => {},
  children,
}: {
  type?: "button" | "submit";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border px-6  py-[0.7rem] text-sm border-opacity-10 border-white"
    >
      {children}
    </button>
  );
}
