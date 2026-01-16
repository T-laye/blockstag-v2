import React from "react";
import { Button } from "../ui/button";

export default function Reward() {
  return (
    <section className="pb-20 pt-10 sm:pt-50">
      <div className="landing-container">
        <div className="hero-bg border-[3px] border-[#DEDBDA] dark:border-[#2A2A2A] rounded-2xl px-4 py-7">
          <div>
            <h4 className="text-2xl">
              Recognize contributions. <br /> Reward engagement. <br /> Track
              impact.
            </h4>
            <p className="mt-6 text-[#211D1D] dark:text-[#B3B3B3]">
              BlocStage Earn keeps communities active with tasks, bounties, and
              challenges.
            </p>
          </div>
          <div>
            <Button className="px-6 mt-8 w-full lg:mt-10 max-w-54.5 ">
              Create Your First Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
