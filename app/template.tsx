"use client";

import { Icon } from "@iconify/react";
import { Albert_Sans } from "next/font/google";
import Link from "next/link";

const albert = Albert_Sans({
  subsets: ["latin"],
});

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full max-w-full h-96 absolute -top-1/4 border rounded-full bg-gradient-to-r from-[#5d58e6] to-[#dc5ae6] blur-4xl -z-20 opacity-25"></div>
      <div className="p-4 max-w-[1120px] mx-auto">
        <div className="flex gap-4 justify-end mt-4">
          <Link
            href="https://github.com/caohonghai/nextjs-learning-guidance"
            target="_blank"
          >
            <Icon
              icon="mingcute:github-line"
              className="w-[24px] h-auto text-zinc-600 hover:text-black"
            />
          </Link>
          <Link href="/">
            <Icon
              icon="mingcute:home-3-line"
              className="w-[24px] h-auto text-zinc-600 hover:text-black"
            />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
