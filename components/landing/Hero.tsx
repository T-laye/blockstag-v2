import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg pt-20 pb-9.5 sm:pb-16">
      <div className="landing-container flex flex-col items-center mt-10.5 sm:mt-14 lg:mt-18.75">
        <h1 className="font-medium text-2xl text-center sm:text-4xl lg:text-[58px] leading-tight">
          Host memorable event. <br /> Build communities that last.
        </h1>
        <p className="text-center text-base sm:text-xl lg:text-[22px] text-[#636161] dark:text-[#B3B3B3] mt-4">
          An all-in-one platform that helps you plan,{" "}
          <br className="sm:hidden" /> run, and <br /> grow meaningful events
          and community
        </p>
        <Button className="px-6 mt-8 lg:mt-10">Create Your First Event</Button>

        <div className="sm:h-74.5 mt-6.75 lg:mt-10">
          <Image
            alt="Hero Image"
            src="/images/hero-img.png"
            height={500}
            width={500}
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
