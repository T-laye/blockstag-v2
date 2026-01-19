"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Reward() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const contents = [
    {
      title: "Rewards",
      description:
        "Post tasks, bounties, or events for your community of event attendees.",
    },
    {
      title: "Awards",
      description:
        "Acknowledge participants with badges, NFTs, certificates, or awards.",
    },
    {
      title: "NFT Prizes",
      description:
        "Set prize pools for top NFT holder holders for events for each event.",
    },
    {
      title: "Leaderboards",
      description:
        "Use leaderboards and live boost participation and long-term engagement.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the container border with a subtle scale
      gsap.from(containerRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Animate title
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate description
      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate button
      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate cards with stagger
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-20 pt-10 sm:pt-50">
      <div className="landing-container">
        <div
          ref={containerRef}
          className="hero-bg md:flex md:justify-between gap-7 border-[3px] border-[#DEDBDA] dark:border-[#2A2A2A] rounded-2xl px-4 py-7 lg:py-17.75 lg:px-20 lg:max-w-234.5 mx-auto"
        >
          <div className="md:flex md:flex-col md:justify-between max-w-77.75">
            <div>
              <h4
                ref={titleRef}
                className="text-2xl lg:text-[28px] sm:font-medium"
              >
                Recognize contributions. <br /> Reward engagement. <br /> Track
                impact.
              </h4>
              <p
                ref={descriptionRef}
                className="mt-6 text-[#211D1D] dark:text-[#B3B3B3] lg:text-lg"
              >
                BlocStage Earn keeps communities active with tasks, bounties,
                and challenges.
              </p>
            </div>
            <div>
              <Button
                ref={buttonRef}
                className="px-6 mt-8 w-full lg:mt-10 max-w-54.5 "
              >
                Create Your First Event
              </Button>
            </div>
          </div>

          <div className="mt-11 md:mt-0 grid grid-cols-1 min-[570px]:grid-cols-2 gap-6 sm:grid-cols-2 lg:max-w-109.5">
            {contents.map((c, i) => (
              <Card
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                title={c.title}
                description={c.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = React.forwardRef<
  HTMLDivElement,
  { title: string; description: string }
>(({ title, description }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white dark:bg-[#151515] py-10 px-6 rounded-[20px] max-[570px]:w-full max-[380px]:max-w-51.75 lg:py-16"
    >
      <h4 className="font-medium text-xl">{title}</h4>
      <p className="mt-2 text-base text-[#636161]">{description}</p>
    </div>
  );
});

Card.displayName = "Card";

// import React from "react";
// import { Button } from "../ui/button";

// export default function Reward() {
//   const contents = [
//     {
//       title: "Rewards",
//       description:
//         "Post tasks, bounties, or events for your community of event attendees.",
//     },
//     {
//       title: "Awards",
//       description:
//         "Acknowledge participants with badges, NFTs, certificates, or awards.",
//     },
//     {
//       title: "NFT Prizes",
//       description:
//         "Set prize pools for top NFT holder holders for events for each event.",
//     },
//     {
//       title: "Leaderboards",
//       description:
//         "Use leaderboards and live boost participation and long-term engagement.",
//     },
//   ];

//   return (
//     <section className="pb-20 pt-10 sm:pt-50">
//       <div className="landing-container">
//         <div className="hero-bg md:flex md:justify-between gap-7 border-[3px] border-[#DEDBDA] dark:border-[#2A2A2A] rounded-2xl px-4 py-7 lg:py-17.75 lg:px-20 lg:max-w-234.5 mx-auto">
//           <div className="md:flex md:flex-col md:justify-between max-w-77.75">
//             <div>
//               <h4 className="text-2xl lg:text-[28px] sm:font-medium">
//                 Recognize contributions. <br /> Reward engagement. <br /> Track
//                 impact.
//               </h4>
//               <p className="mt-6 text-[#211D1D] dark:text-[#B3B3B3] lg:text-lg">
//                 BlocStage Earn keeps communities active with tasks, bounties,
//                 and challenges.
//               </p>
//             </div>
//             <div>
//               <Button className="px-6 mt-8 w-full lg:mt-10 max-w-54.5 ">
//                 Create Your First Event
//               </Button>
//             </div>
//           </div>

//           <div className="mt-11 md:mt-0 grid grid-cols-1 min-[570px]:grid-cols-2 gap-6 sm:grid-cols-2 lg:max-w-109.5">
//             {contents.map((c, i) => (
//               <Card key={i} title={c.title} description={c.description} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Card({ title, description }: { title: string; description: string }) {
//   return (
//     <div className="bg-white py-10 px-6 rounded-[20px] max-[570px]:w-full max-[380px]:max-w-51.75 lg:py-16">
//       <h4 className="font-medium text-xl">{title}</h4>
//       <p className="mt-2 text-base">{description}</p>
//     </div>
//   );
// }
