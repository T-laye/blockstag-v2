"use client";

import React, { useEffect, useRef } from "react";
import ParallaxScroll from "./ParallaxScroll";
import { about } from "../../../lib/contents";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMobile() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="pt-7 min-[500px]:pt-20 lg:pt-33 lg:hidden pb-5">
      <div className="landing-container">
        <div className="w-full">
          {/* Heading */}
          <div className="flex md:text-center md:justify-center">
            <h2 className="text-[28px] leading-[120%] font-medium sm:text-4xl">
              Everything You Need <br /> to Host Exceptional <br /> Events
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col mt-10 gap-6 items-center sm:gap-12">
            {about.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
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
