import Link from "next/link";
import React from "react";

interface Props {
  url: any;
  text: string;
  dark?: boolean;
  className?: string;
}

export default function Button({
  url,
  text,
  dark = false,
  className = "",
}: Props): React.JSX.Element {
  return (
    <span>
      <Link href={url} className={`${className} button group flex justify-center items-center py-1 px-4 rounded-3xl transition-all ${
        dark
          ? "bg-grayDark text-grayLight hover:bg-gray-900"
          : "bg-grayLight text-grayDark hover:bg-white"
        }`}>
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 transition group-hover:translate-x-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </Link>
    </span>
  );
}
