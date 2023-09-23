"use client";
import { ChangeEvent } from "react";
export default function TextArea({
  rows,
  placeholder = "",
  onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {},
}: {
  rows: number;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full focus:outline-none bg-transparent border-b border-opacity-10 border-white"
    ></textarea>
  );
}
