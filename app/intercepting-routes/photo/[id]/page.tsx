import Image from "next/image";
import Link from "next/link";
import { photos } from "../../img/data";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = photos.find(
    (item) => item.id === id
  );
  return (
    <div className="mt-4 flex flex-col gap-4">
      <Image
        width={200}
        height={200}
        alt="Picture of the cat"
        src={photo!.src}
        className="w-[200px] h-[200px] object-cover"
      />
      <Link
        href={`/`}
        className="bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
      >
        Home
      </Link>
    </div>
  );
}
