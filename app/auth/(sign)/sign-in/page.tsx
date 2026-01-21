import Image from "next/image";
import React from "react";
import SignInForm from "../../../../components/auth/signInForm";

export default function Page() {
  return (
    <div className="pt-20 lg:pt-28 w-full">
      <div className="flex flex-col items-center justifycenter">
        <div className="w-15 lg:w-8">
          <Image
            className="h-full w-full object-contain"
            height={100}
            width={100}
            alt="logo"
            src="/logo/primary-logo-icon.svg"
          />
        </div>

        <h2 className="mt-4 lg:mt-1.5 font-bold text-2xl lg:text-[32px]">
          Welcome Back
        </h2>
        <p className="mt-2 text-base lg:text-lg text-primary">
          Event that builds communities.
        </p>
      </div>
      <div>
        <SignInForm />
      </div>
    </div>
  );
}
