import Link from "next/link";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-prose mx-auto flex flex-col gap-4">
      <div className="flex flex-row gap-4 mt-8">
        <Link
          href="/route-groups/demo2/account"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Account
        </Link>
        <Link
          href="/route-groups/demo2/cart"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Cart
        </Link>
        <Link
          href="/route-groups/demo2/checkout"
          className="text-zinc-600 hover:text-zinc-900"
        >
          Checkout
        </Link>
      </div>
      <h1>Demo2 Root Layout.tsx</h1>
      <div className="text-zinc-500">
        <p>
          {
            "Account/Cart Level: demo2/layout.tsx -> (shop)/layout.tsx -> xxx/page.tsx"
          }
        </p>
        <p>
          {
            "Checkout Level: demo2/layout.tsx -> checkout/page.tsx"
          }
        </p>
      </div>
      {children}
      <Link
        href={`/route-groups/`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Home
      </Link>
    </div>
  );
}
