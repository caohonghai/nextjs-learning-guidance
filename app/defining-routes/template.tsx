"use client";

import { useState } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-row items-center border py-4 px-2 mt-4 justify-between">
        <h1>Home Template Count: {count}</h1>
        <button
          className="bg-gradient-to-br from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <div className="mt-4">{children}</div>
    </>
  );
}
