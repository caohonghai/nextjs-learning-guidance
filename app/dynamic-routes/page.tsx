import Link from "next/link";

export default function DynamicRoutes() {
  return (
    <div className="mt-12">
      <div className="flex gap-4">
        <Link
          href="/dynamic-routes/single/test"
          className="text-zinc-600 hover:text-zinc-900"
        >
          <span>[folderName]</span>
        </Link>
        <Link
          href="/dynamic-routes/multiple/test"
          className="text-zinc-600 hover:text-zinc-900"
        >
          <span>[...folderName]</span>
        </Link>
        <Link
          href="/dynamic-routes/multiple-match-root/"
          className="text-zinc-600 hover:text-zinc-900"
        >
          <span>[[...folderName]]</span>
        </Link>
      </div>
      <div className="mt-4">
        Click on the three different links above
        to access the corresponding route matching
        rules.
      </div>
    </div>
  );
}
