import Image from "next/image";
import React from "react";
import SignUpForm from "../../../../components/auth/signUpFrom";

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
          Sign up for Blockstage
        </h2>
        <p className="mt-2 text-base lg:text-lg text-primary">
          Not just events, memorable ones.
        </p>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}
