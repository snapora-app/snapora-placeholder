import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-full flex flex-grow-0 justify-center center items-center"
    >
      <Image
        src={'/Snapora_Logo_Pre.png'} alt={'Logo'} width={512} height={512}
      />
    </div>
  );
}
