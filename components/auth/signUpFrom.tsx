import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  return (
    <div className="mt-8 w-full">
      <div className="w-full">
        <Button className="flex justify-center w-full gap-2.5 bg-[#EFE5E1] text-[#211D1DDD] text-lg dark:bg-[#151515] dark:text-[#FFFFFFDD]">
          <FcGoogle className="" />
          <span>Continue with Google</span>
        </Button>

        <div className="flex items-center gap-4 mt-8">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(230, 230, 230, 0) 17.69%, #BFB7B7 22.62%, rgba(191, 183, 183, 0.482353) 75.88%, rgba(230, 230, 230, 0) 81.73%)",
            }}
            className="border-white h-px w-full"
          ></div>
          <p className="whitespace-nowrap text-sm text-[#4F4F4F] dark:text-[#B3B3B3]">
            or Sign up with Email
          </p>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(230, 230, 230, 0) 17.69%, #BFB7B7 22.62%, rgba(191, 183, 183, 0.482353) 75.88%, rgba(230, 230, 230, 0) 81.73%)",
            }}
            className="border-white h-px w-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
