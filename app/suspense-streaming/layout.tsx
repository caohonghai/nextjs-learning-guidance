import { Albert_Sans } from "next/font/google";
const albert = Albert_Sans({
  subsets: ["latin"],
});
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-prose mx-auto">
      <h1
        className={`${albert.className} text-4xl lg:text-5xl font-extrabold lg:tracking-tight xl:tracking-tighter text-center`}
      >
        Suspense And Streaming
      </h1>
      {children}
    </div>
  );
}
