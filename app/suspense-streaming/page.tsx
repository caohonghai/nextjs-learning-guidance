import Link from "next/link";

export default function RouteHandlers() {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <Link
        href={`/suspense-streaming/demo1`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo1
      </Link>
      <p>Demo1: Suspense</p>
      <Link
        href={`/suspense-streaming/demo2`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo2
      </Link>
      <p>Demo2: Suspense controls the rendering order </p>
    </div>
  );
}
