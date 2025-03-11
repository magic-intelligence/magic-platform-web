import Image from "next/image";
import Logo from "@/presentation/assets/images/MagicLogo.png"
import { CounterComponent } from "@/presentation/components/CounterComponent";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src={ Logo }
          alt="Next.js logo"
          width={280}
          height={68}
          priority
        />
        <CounterComponent/>
      </main>
    </div>
  );
}
