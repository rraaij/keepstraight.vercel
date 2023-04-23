import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import LanguageSelector from "@/components/language-selector";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Keepstraight: Login</h1>
      <LanguageSelector />
    </main>
  );
}
