import LanguageSelector from "@/components/language-selector";
import LoginOrRegister from "@/components/login-or-register";
import ClientOnly from "@/components/clientonly";

export const revalidate = 0; // SSR, so no caching

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-content-center bg-blue-200">
      <ClientOnly>
        <LanguageSelector />
        <LoginOrRegister />
      </ClientOnly>
    </div>
  );
}
