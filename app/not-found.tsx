import Link from "next/link";
import { Albert_Sans } from "next/font/google";
const albert = Albert_Sans({
  subsets: ["latin"],
});
export default function NotFound() {
  return (
    <div className="flex flex-col gap-8">
      <h1
        className={`${albert.className} mt-12 text-4xl lg:text-5xl font-extrabold lg:tracking-tight xl:tracking-tighter`}
      >
        404 Not Found
      </h1>
      <p>
        Oops! Looks like you have stumbled upon a page that
        does not exist. Please try again or navigate to
        another page on our site.
      </p>
      <Link href="/" className="underline">
        Return Home Page
      </Link>
    </div>
  );
}
