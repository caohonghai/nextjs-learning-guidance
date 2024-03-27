"use client";
import { Icon } from "@iconify/react";
import { Albert_Sans } from "next/font/google";
const albert = Albert_Sans({
  subsets: ["latin"],
});

import { courses } from "./courses";

export default function Home() {
  return (
    <div>
      <h1
        className={`${albert.className} mt-12 text-4xl lg:text-5xl font-extrabold lg:tracking-tight xl:tracking-tighter text-center`}
      >
        <span className="px-2 bg-gradient-to-r from-[#5d58e6] to-[#dc5ae6] dark:opacity-100 bg-clip-text text-transparent">
          Next.js Learning Guidance
        </span>
      </h1>
      <p className="text-center mt-8 text-zinc-600">
        According to the official{" "}
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          className="bg-black hover:bg-gradient-to-r from-[#5d58e6] to-[#dc5ae6] bg-clip-text text-transparent"
        >
          NextJS
        </a>{" "}
        documentation, the practice demo files
        help in learning NextJS.
      </p>

      <div className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 bg-[#f6f6f6] p-4 rounded-lg"
          >
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <Icon
                  icon={course.icon}
                  className="w-[24px] h-auto text-[#5d58e6] hover:text-[#dc5ae6] "
                />
              </div>
              <a className="text-lg " href="#">
                {course.name}
              </a>
            </div>
            <p className="text-sm">
              {course.description}
            </p>
            <div className="flex-1 flex items-end">
              <a
                className="flex items-center gap-2 hover:gap-3 transform duration-200 ease-in-out cursor-pointer"
                href="#"
              >
                <span className="font-bold bg-gradient-to-r from-[#5d58e6] to-[#dc5ae6] bg-clip-text text-transparent">
                  View Demo!
                </span>
                <Icon
                  icon="mdi:arrow-right"
                  className="h-auto text-[#dc5ae6] "
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
