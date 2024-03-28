import Image from "next/image";
import { photos } from "@/app/intercepting-routes/img/data";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = photos.find(
    (item) => item.id === id
  );
  return (
    <div className="h-60">
      Modal {id}
      <Image
        width={200}
        height={200}
        alt="Picture of the cat"
        src={photo!.src}
        className="m-1 w-[200px] h-[200px] object-cover"
      />
    </div>
  );
}
