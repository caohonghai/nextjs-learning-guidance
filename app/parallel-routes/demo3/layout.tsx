import Link from "next/link";

export default function Demo3Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-row gap-4 mt-8">
        <Link
          href="/parallel-routes/demo3"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Home
        </Link>
        <Link
          href="/parallel-routes/demo3/page-views"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Page Views
        </Link>
        <Link
          href="/parallel-routes/demo3/visitors"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Visitors
        </Link>
      </div>
      <div className="flex gap-8 mt-8">
        {team}
        {analytics}
      </div>
      {children}
    </div>
  );
}
