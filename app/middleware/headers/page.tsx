import Link from "next/link";

export default function App() {
  return (
    <div className="max-w-prose mx-auto flex flex-col gap-4">
      Middleware Headers Pages!
      <Link
        href={`/middleware/`}
        className="mt-4 bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Home
      </Link>
    </div>
  );
}
