import { Inter } from "next/font/google";
import GameBoard from "@/components/GameBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <GameBoard/>
    </main>
  );
}
