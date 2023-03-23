import Image from "next/image";
import { Inter } from "next/font/google";
import Counter from "@/app/components/counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Counter />
    </main>
  );
}
