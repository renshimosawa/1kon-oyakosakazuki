import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl font-bold">いつでも一献</h1>
        <Link
          href="/parent"
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-48 text-center"
        >
          酒を注ぐ
        </Link>
        <Link
          href="/child"
          className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-md w-48 text-center"
        >
          盃を受ける
        </Link>
        <Image src="/sakazuki.png" alt="parent" width={300} height={100} />
      </main>
    </div>
  );
}
