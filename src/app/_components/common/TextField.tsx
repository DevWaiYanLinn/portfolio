'use client'
import { ChangeEvent } from "react";
export default function TextField({
  type = "text",
  placeholder = "",
  style = {},
  onChange = (event: ChangeEvent<HTMLInputElement>) => {},
}: {
  type?: string;
  placeholder?: string;
  style?:{},
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      style={style}
      placeholder={placeholder}
      onChange={onChange}
      className=" focus:outline-none text-sm w-full border-opacity-10 pb-3 border-b border-white bg-transparent"
    />
  );
}
