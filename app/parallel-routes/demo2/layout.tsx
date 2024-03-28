import Link from "next/link";

export default function Demo2Layout({
  analytics,
  team,
}: {
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="max-w-prose mx-auto flex flex-col gap-4">
      <h1>Demo02 - Layout</h1>
      {analytics}
      {team}
      <Link
        href={`/parallel-routes/`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Home
      </Link>
    </div>
  );
}
