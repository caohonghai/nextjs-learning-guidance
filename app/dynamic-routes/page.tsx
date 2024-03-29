import Link from "next/link";

export default function DynamicRoutes() {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <Link
        href="/dynamic-routes/single/test"
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        <span>[folderName]</span>
      </Link>
      <Link
        href="/dynamic-routes/multiple/test"
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        <span>[...folderName]</span>
      </Link>
      <Link
        href="/dynamic-routes/multiple-match-root/"
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        <span>[[...folderName]]</span>
      </Link>
      <div className="mt-4">
        Click on the three different links above
        to access the corresponding route matching
        rules.
      </div>
    </div>
  );
}
