import LanguageSelector from "@/components/language-selector";
import { useTranslations } from "next-intl";

export const revalidate = 0; // SSR, so no caching

export default function Home() {
  const t = useTranslations("metadata");
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <LanguageSelector />
    </main>
  );
}
