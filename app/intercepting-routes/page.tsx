import Link from "next/link";
import { photos } from "./img/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap mt-12">
      {photos.map(({ id, src }) => (
        <Link
          key={id}
          href={`/intercepting-routes/photo/${id}`}
        >
          <Image
            width={200}
            height={200}
            alt="Picture of the cat"
            src={src}
            className="m-1 w-[200px] h-[200px] object-cover"
          />
        </Link>
      ))}
    </main>
  );
}
