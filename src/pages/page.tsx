import FortuneTeller from "@/components/Fortuneteller";
import bg from "public/img/page-bg.jpg";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-cover" style={{ backgroundImage: `url('${bg.src}')` }}>
      <div className="bg-black/50 flex flex-col flex-1">
        <header className="relative overflow-hidden">
          <div className="flex items-center justify-center w-full h-96">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow">Tell fortunes with GPT</h1>
          </div>
        </header>
        <main className="relative flex-1">
          <FortuneTeller className="p-3 z-10" />
        </main>
      </div>
    </div>
  );
}
