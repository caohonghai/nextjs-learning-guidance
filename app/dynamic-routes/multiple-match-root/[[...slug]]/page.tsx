import Link from "next/link";
function generateRandomRouteWithParams() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let route = "/";

  const numParams =
    Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < 10; i++) {
    route += letters.charAt(
      Math.floor(Math.random() * letters.length)
    );
  }

  for (let j = 0; j < numParams; j++) {
    route += `/${letters.charAt(
      Math.floor(Math.random() * letters.length)
    )}`;
  }

  return route;
}
export default function DynamicRoutesSlug({
  params,
}: {
  params: { slug: string[] };
}) {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <p>params: {JSON.stringify(params)}</p>
      <div className="flex gap-4">
        <Link
          href={`/dynamic-routes/multiple-match-root/${generateRandomRouteWithParams()}`}
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
