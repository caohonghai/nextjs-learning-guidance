import Link from "next/link";

export default function ParallelRoutes() {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <Link
        href={`/parallel-routes/demo1`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo1
      </Link>
      <p>
        Demo1: Conditional rendering, The
        `children` in the layout are actually an
        implicit slot, so `app/page.tsx` is
        equivalent to `app/@children/page.tsx`.
      </p>
      <Link
        href={`/parallel-routes/demo2`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo2
      </Link>
      <p>
        Demo2: Each route defines independent
        error `handling(error.tsx)` and
        `loading(loading.tsx)` pages.
      </p>
      <Link
        href={`/parallel-routes/demo3`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo3
      </Link>
      <p>
        Parallel routing is the same as routing
        groups, and will not affect the URL. The
        URL corresponding to
        `@analytics/page-views/page.tsx` is
        `/page-views`
      </p>
    </div>
  );
}
