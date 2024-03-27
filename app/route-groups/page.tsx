import Link from "next/link";

export default function DynamicRoutes() {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <p>
        In the app directory, nested folders are
        normally mapped to URL paths. However, you
        can mark a folder as a Route Group to
        prevent the folder from being included in
        the route&apos;s URL path.
      </p>

      <p>
        This allows you to organize your route
        segments and project files into logical
        groups without affecting the URL path
        structure.
      </p>
      <Link
        href={`/route-groups/demo1/account`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo1
      </Link>
      <p>
        Demo1: Group routes logically without
        affecting the URL paths.
      </p>
      <Link
        href={`/route-groups/demo2/account`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo2
      </Link>
      <p>
        Demo2: Even in the same level, different
        layouts can be created.
      </p>
      <p>
        The naming of route groups has no special
        meaning. They do not affect the URL path.
      </p>
      <p>
        Be careful not to resolve to the same URL
        path. For example, because route groups do
        not affect the URL path, both{" "}
        <span>(marketing)/about/page.tsx</span>{" "}
        and <span>(shop)/about/page.tsx</span>{" "}
        will resolve to /about, which will cause
        an error.{" "}
      </p>
    </div>
  );
}
