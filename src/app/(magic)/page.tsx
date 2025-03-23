import Image from "next/image";
import Logo from "@/presentation/assets/images/MagicLogo.png"
import { CounterComponent } from "@/presentation/components/CounterComponent";

export default function Home() {

  return (
    <>
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
    </>
  );
}
