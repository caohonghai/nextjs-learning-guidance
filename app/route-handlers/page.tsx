import Link from "next/link";

export default function RouteHandlers() {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <Link
        href={`/route-handlers/api`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo1
      </Link>
      <p>Demo1: GET Request</p>
      <Link
        href={`/route-handlers/api/search?query=hello`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo2
      </Link>
      <p>Demo2: GET URL parameters</p>
      <Link
        href={`/route-handlers/api/cookie`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo3
      </Link>
      <p>Demo3: GET Cookies</p>
      <Link
        href={`/route-handlers/api/headers`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo4
      </Link>
      <p>Demo4: GET Headers</p>
      <Link
        href={`/route-handlers/api/redirect`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo5
      </Link>
      <p>Demo5: GET Redirect</p>
      <Link
        href={`/route-handlers/api/cors`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Demo6
      </Link>
      <p>Demo6: Setting CORS</p>
    </div>
  );
}
