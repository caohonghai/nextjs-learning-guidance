import Link from "next/link";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-prose mx-auto flex flex-col gap-4">
      <div className="flex flex-row gap-4 mt-8">
        <Link
          href="/route-groups/demo1/blog"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Blog
        </Link>
        <Link
          href="/route-groups/demo1/about"
          className="text-zinc-600 hover:text-zinc-900"
        >
          About
        </Link>
        <Link
          href="/route-groups/demo1/account"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Account
        </Link>
      </div>
      <h1>Demo1 Layout.tsx</h1>
      {children}
      <Link
        href={`/route-groups/`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Home
      </Link>
    </div>
  );
}
