import Link from "next/link";

export default function RouteHandlers() {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <p>
        Note: While only one middleware.ts file is
        supported per project, you can still
        organize your middleware logic modularly.
        Break out middleware functionalities into
        separate .ts or .js files and import them
        into your main middleware.ts file.
      </p>
      <p>
        Different middleware files can be defined
        and ultimately import into a unified
        middleware.ts file.
      </p>

      <Link
        href={`/middle-ware/redirect`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo1
      </Link>
      <p>Demo1: Redirect Home</p>
      <Link
        href={`/middle-ware/headers`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo2
      </Link>
      <p>Demo2: Headers Handle</p>
    </div>
  );
}
