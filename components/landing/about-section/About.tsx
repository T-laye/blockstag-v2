"use client";

import React, { useEffect, useRef } from "react";
import ParallaxScroll from "./ParallaxScroll";
import { about } from "../../../lib/contents";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards.length) return;

    gsap.set(cards, {
      opacity: 0,
      yPercent: 20,
      zIndex: 0,
    });

    // First card visible initially
    gsap.set(cards[0], {
      opacity: 1,
      yPercent: 0,
      zIndex: 1,
    });

    const scrollDistance = window.innerHeight * cards.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center", // ✅ fully in view
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i > 0) {
        // Fade in
        tl.to(card, {
          opacity: 1,
          yPercent: 0,
          zIndex: 1,
          duration: 0.5,
        });
      }

      // Hold
      tl.to({}, { duration: 0.5 });

      // Fade out (except last)
      if (i < cards.length - 1) {
        tl.to(card, {
          opacity: 0,
          yPercent: -20,
          zIndex: 0,
          duration: 0.5,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-7 min-[500px]:pt-20 lg:pt-33 h[50vh] max-lg:hidden"
    >
      <div className="landing-container h-fit flex">
        <div className="md:grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 w-full">
          {/* Left side - Static heading */}
          <div className="flex sm:justify-center md:justify-end min-[500px]:justify-center">
            <h2 className="text-[28px] leading-[120%] font-medium sm:text-center sm:text-4xl md:text-3xl md:text-start lg:text-[40px] min-[500px]:text-center">
              Everything You Need <br className="md:hidden lg:block" /> to Host
              Exceptional <br /> Events
            </h2>
          </div>

          {/* Right side - Cards container */}
          <div className="relative h-90 lg:h-100 flex items-start justify-center min-[450px]:mt-10 md:mt-0 ">
            {about.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <ParallaxScroll item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
