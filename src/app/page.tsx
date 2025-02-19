import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="h-full flex flex-col flex-grow-0 justify-center items-center"
    >
      <Image
        src={'/Snapora_Logo_Pre.png'} alt={'Logo'} width={512} height={512}
      />
      <footer className="mt-4 text-center text-gray-600">
        © {currentYear} snapora.app. All rights reserved.
      </footer>

    </div>
  );
}
