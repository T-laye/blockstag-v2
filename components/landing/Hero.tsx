"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { pageRoutes } from "../../lib/routes";

export default function Hero() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  const gotoSignUp = () => {
    router.push(pageRoutes.authRoutes.SIGN_UP);
  };

  useEffect(() => {
    // Create a GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Create a timeline for coordinated animations
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Animate heading
      tl.from(h1Ref.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      // Animate paragraph
      tl.from(
        pRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5", // Start 0.5s before previous animation ends
      );

      // Animate button
      tl.from(
        buttonRef.current,
        {
          y: 10,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5",
      );

      // Animate image with scale
      tl.from(
        imageRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
          duration: 1,
        },
        "-=0.6",
      );
    }, heroRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-bg pt-20 pb-9.5 sm:pb-16 md:min-h-[90vh]"
    >
      <svg className="noise-overlay">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div className="landing-container flex flex-col items-center mt-10.5 sm:mt-14 lg:mt-18.75">
        <h1
          ref={h1Ref}
          className="font-medium text-2xl text-center sm:text-4xl lg:text-[58px] leading-tight"
        >
          Host memorable event. <br /> Build communities that last.
        </h1>
        <p
          ref={pRef}
          className="text-center text-base sm:text-xl lg:text-[22px] text-[#636161] dark:text-[#B3B3B3] mt-4"
        >
          An all-in-one platform that helps you plan,{" "}
          <br className="sm:hidden" /> run, and <br className="max-sm:hidden" />{" "}
          grow meaningful events and community
        </p>
        <Button
          ref={buttonRef}
          onClick={gotoSignUp}
          className="px-6 mt-8 md:mt-12"
        >
          Create Your First Event
        </Button>

        <div ref={imageRef} className="sm:h-74.5 mt-6.75 md:mt-20">
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

// import React from "react";
// import { Button } from "../ui/button";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="hero-bg pt-20 pb-9.5 sm:pb-16">
//       <div className="landing-container flex flex-col items-center mt-10.5 sm:mt-14 lg:mt-18.75">
//         <h1 className="font-medium text-2xl text-center sm:text-4xl lg:text-[58px] leading-tight">
//           Host memorable event. <br /> Build communities that last.
//         </h1>
//         <p className="text-center text-base sm:text-xl lg:text-[22px] text-[#636161] dark:text-[#B3B3B3] mt-4">
//           An all-in-one platform that helps you plan,{" "}
//           <br className="sm:hidden" /> run, and <br /> grow meaningful events
//           and community
//         </p>
//         <Button className="px-6 mt-8 lg:mt-10">Create Your First Event</Button>

//         <div className="sm:h-74.5 mt-6.75 lg:mt-10">
//           <Image
//             alt="Hero Image"
//             src="/images/hero-img.png"
//             height={500}
//             width={500}
//             className="object-contain h-full w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
