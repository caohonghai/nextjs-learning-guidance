"use client";

import { useState } from "react";
import Link from "next/link";

export default function Layout({
  dashboard,
  login,
}: {
  dashboard: React.ReactNode;
  login: React.ReactNode;
}) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="max-w-prose mx-auto flex flex-col gap-4">
      <h1>Demo01 - Layout</h1>

      {isLogin ? dashboard : login}
      <button
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
        onClick={() =>
          setIsLogin((prev) => !prev)
        }
      >
        Toggle Login
      </button>
      <Link
        href={`/parallel-routes/`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Home
      </Link>
    </div>
  );
}
