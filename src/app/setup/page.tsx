import React from "react";
import SetupForm from "@/app/setup/components/setup-form";

const Setup = () => {
  return (
    <div className="w-full h-screen flex justify-content-center bg-blue-200">
      <div className="p-4 pt-8 w-96 flex flex-column align-self-center bg-white">
        <SetupForm />
      </div>
    </div>
  );
};

export default Setup;
