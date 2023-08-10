import { cls } from "@/lib/cls";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import bgCircle from "public/img/bg-circle.jpg";
import enterJpg from "public/img/enter.jpg";

const inter = Inter({
  weight: ["100", "400", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={cls("relative", inter.className)}>
      <div className="from-cyan-700 to-pink-400 bg-gradient-to-br fixed w-screen h-screen z-[-1] opacity-30">
        <Image alt="bg" src={bgCircle} className="fixed w-screen h-screen object-cover mix-blend-overlay" />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center gap-10">
        <Image alt="enter" src={enterJpg} className="w-10/12 max-w-[30rem] sm:w-1/2 rounded-xl shadow" />
        <h1 className="text-3xl font-bold">Fortuneteller GPT</h1>
        <Link className="underline" href="/page">
          Enter
        </Link>
      </main>
    </div>
  );
}
