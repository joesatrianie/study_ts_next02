import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Posts from "./api/components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome👋
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold ">Junsung Lee</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
