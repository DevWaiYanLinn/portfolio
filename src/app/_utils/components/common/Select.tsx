import { ChangeEvent } from "react";

export default function Select({
  onChange = (event: ChangeEvent<HTMLSelectElement>) => {},
  children,
}: {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      className="appearance-none text-sm focus:outline-none bg-transparent w-full border-b pb-3 border-white border-opacity-10"
      onChange={onChange}
    >
      {children}
    </select>
  );
}
