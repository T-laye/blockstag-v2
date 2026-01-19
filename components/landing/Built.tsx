"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Built() {
  const sectionRef = useRef<HTMLElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const leftLinesRef = useRef<HTMLDivElement>(null);
  const rightLinesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none none",
        },
      });

      // Animate top line expanding from center
      if (topLineRef.current) {
        tl.from(topLineRef.current, {
          scaleX: 0,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Animate left lines growing upward
      if (leftLinesRef.current) {
        tl.from(
          leftLinesRef.current.children,
          {
            scaleY: 0,
            transformOrigin: "bottom center",
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Animate right lines growing upward
      if (rightLinesRef.current) {
        tl.from(
          rightLinesRef.current.children,
          {
            scaleY: 0,
            transformOrigin: "bottom center",
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }

      // Animate text with scale and fade
      if (textRef.current) {
        tl.from(
          textRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          "-=0.5"
        );
      }

      // Animate bottom line expanding from center
      if (bottomLineRef.current) {
        tl.from(
          bottomLineRef.current,
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-primary pt-9.75 pb-7.5 lg:py-10 mb-40"
    >
      <div className="landing-container flex font-medium text justify-center items-center flex-col">
        <div ref={topLineRef} className="h-px w-full bgblue-300">
          <Image
            alt="line"
            src="/images/built_line_top.png"
            width={100}
            height={100}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="flex justify-between items-center bg-pink300 w-full max-w-163 py-2">
          <div ref={leftLinesRef} className="flex gap-2 items-center">
            <div className="w-px h-18 sm:h-34.25 bgblue-300">
              <Image
                alt="line"
                src="/images/built_line_side.png"
                width={100}
                height={100}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-px h-28.5 sm:h-54 bgblue-300">
              <Image
                alt="line"
                src="/images/built_line_side.png"
                width={100}
                height={100}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div
            ref={textRef}
            className="text-white font-medium text-2xl sm:text-3xl md:text-[40px] text-center"
          >
            Built for Anyone <br /> Building a Community
          </div>
          <div ref={rightLinesRef} className="flex gap-2 items-center">
            <div className="w-px h-28.5 sm:h-54 bgblue-300">
              <Image
                alt="line"
                src="/images/built_line_side.png"
                width={100}
                height={100}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-px h-18 sm:h-34.25 bgblue-300">
              <Image
                alt="line"
                src="/images/built_line_side.png"
                width={100}
                height={100}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
        <div ref={bottomLineRef} className="h-px w-full bgblue-300">
          <Image
            alt="line"
            src="/images/built_line_top.png"
            width={100}
            height={100}
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";

// export default function Built() {
//   return (
//     <section className="bg-primary pt-9.75 pb-7.5 lg:py-10 mb-40">
//       <div className="landing-container flex font-medium text justify-center items-center flex-col">
//         <div className="h-px w-full bgblue-300">
//           <Image
//             alt="line"
//             src="/images/built_line_top.png"
//             // src="/images/about-1.png"
//             width={100}
//             height={100}
//             className="w-full h-full object-fill"
//           />
//         </div>
//         <div className="flex justify-between items-center bg-pink300 w-full max-w-163 py-2">
//           <div className="flex gap-2 items-center">
//             <div className="w-px h-18 sm:h-34.25 bgblue-300">
//               <Image
//                 alt="line"
//                 src="/images/built_line_side.png"
//                 // src="/images/about-1.png"
//                 width={100}
//                 height={100}
//                 className="w-full h-full object-fill"
//               />
//             </div>
//             <div className="w-px h-28.5 sm:h-54 bgblue-300">
//               <Image
//                 alt="line"
//                 src="/images/built_line_side.png"
//                 // src="/images/about-1.png"
//                 width={100}
//                 height={100}
//                 className="w-full h-full object-fill"
//               />
//             </div>
//           </div>
//           <div className="text-white font-medium text-2xl sm:text-3xl md:text-[40px] text-center">
//             Built for Anyone <br /> Building a Community
//           </div>
//           <div className="flex gap-2 items-center">
//             <div className="w-px h-28.5 sm:h-54 bgblue-300">
//               <Image
//                 alt="line"
//                 src="/images/built_line_side.png"
//                 // src="/images/about-1.png"
//                 width={100}
//                 height={100}
//                 className="w-full h-full object-fill"
//               />
//             </div>
//             <div className="w-px h-18 sm:h-34.25 bgblue-300">
//               <Image
//                 alt="line"
//                 src="/images/built_line_side.png"
//                 // src="/images/about-1.png"
//                 width={100}
//                 height={100}
//                 className="w-full h-full object-fill"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="h-px w-full bgblue-300">
//           <Image
//             alt="line"
//             src="/images/built_line_top.png"
//             // src="/images/about-1.png"
//             width={100}
//             height={100}
//             className="w-full h-full object-fill"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// // background: linear-gradient(180deg, rgba(230, 230, 230, 0) 17.69%, #BFB7B7 22.62%, rgba(191, 183, 183, 0.482353) 75.88%, rgba(230, 230, 230, 0) 81.73%);
