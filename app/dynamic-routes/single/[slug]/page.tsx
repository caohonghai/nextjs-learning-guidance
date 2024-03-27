import Link from "next/link";

export default function DynamicRoutesSlug({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <p>params: {JSON.stringify(params)}</p>
      <p>
        Tip: Can only match routes with{" "}
        <span className="text-blue-500">
          /dynamic-routes/single/xxx
        </span>
      </p>
      <div className="flex gap-4">
        <Link
          href={`/dynamic-routes/single/${Math.random()}`}
          className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
        >
          Random Navigate
        </Link>
        <Link
          href={`/dynamic-routes/`}
          className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
