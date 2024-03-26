"use client";

import { Icon } from "@iconify/react";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 max-w-[1120px] mx-auto">
      {/* Header */}
      <div className="flex justify-end">
        <a
          href="https://github.com/caohonghai/nextjs-learning-guidance"
          target="_blank"
        >
          <Icon
            icon="mingcute:github-line"
            className="w-[24px] h-auto text-zinc-600 hover:text-black"
          />
        </a>
      </div>
      {children}
    </div>
  );
}
