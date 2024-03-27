"use client";

import { useState } from "react";
import Link from "next/link";
import { Albert_Sans } from "next/font/google";
const albert = Albert_Sans({
  subsets: ["latin"],
});
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-prose mx-auto">
      <h1
        className={`${albert.className} text-4xl lg:text-5xl font-extrabold lg:tracking-tight xl:tracking-tighter text-center`}
      >
        Defining Routes
      </h1>
      <div className="flex flex-row gap-4 mt-8">
        <Link
          href="/defining-routes"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Home
        </Link>
        <Link
          href="/defining-routes/about"
          className="text-zinc-600 hover:text-zinc-900"
        >
          About
        </Link>
        <Link
          href="/defining-routes/settings"
          className="text-zinc-600 hover:text-zinc-900"
          >
            Settings
          </Link>
          <Link
            href="/defining-routes/404"
            className="text-zinc-600 hover:text-zinc-900"
          >
            404
          </Link>
        </div>
        <div className="flex flex-row items-center border py-4 px-2 mt-4 justify-between">
          <h1>Dashboard Layout Count: {count}</h1>
          <button
            className="bg-gradient-to-br from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
        {children}
      </div>
    );
  }
  