import FortuneTeller from "@/components/Fortuneteller";
import Image from "next/image";
import Link from "next/link";
import bg from "public/img/galaxy.jpg";
import wom from "public/img/enter.jpg";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative overflow-hidden">
        <Image
          src={wom}
          alt="banner"
          className="absolute z-[-1] left-0 top-0 w-full h-full object-cover blur mix-blend-multiply"
        />
        <div className="flex items-center justify-center w-full h-96">
          <h1 className="bg-black rounded px-4 py-2 text-xl font-bold text-white">Tell fortunes with GPT</h1>
        </div>
      </header>
      <main className="relative flex-1">
        <div>
          <Image src={bg} alt="background" className="absolute top-0 left-0 w-full h-full z-[-1] object-cover" />
        </div>

        <FortuneTeller className="p-3 z-10" />
      </main>
    </div>
  );
}
