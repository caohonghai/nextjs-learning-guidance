import Link from "next/link";

export default function RenderMode() {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <Link
        href={`/render-mode/csr`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo1: CSR
      </Link>
      <Link
        href={`/render-mode/ssr`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo2: SSR
      </Link>
    </div>
  );
}
