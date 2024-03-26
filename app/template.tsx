export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 max-w-[1120px] mx-auto">
      {children}
    </div>
  );
}
