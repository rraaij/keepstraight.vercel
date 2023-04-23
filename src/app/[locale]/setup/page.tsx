import React from "react";
import SetupForm from "@/app/[locale]/setup/components/setup-form";
import LanguageSelector from "@/components/language-selector";

const Setup = () => {
  return (
    <div className="w-full h-screen flex justify-content-center bg-blue-200">
      <LanguageSelector />
      <SetupForm />
    </div>
  );
};

export default Setup;
