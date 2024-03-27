import Link from "next/link";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h1>Demo2 (shop) Layout.tsx</h1>
      {children}
    </div>
  );
}
