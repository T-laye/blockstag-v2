"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "../ui/carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Autoplay from "embla-carousel-autoplay";

gsap.registerPlugin(ScrollTrigger);

const contents = [
  {
    title: "Creators",
    url: "/images/carousel_creators.png",
  },
  {
    title: "Event Organizers",
    url: "/images/carousel_organizers.png",
  },
  {
    title: "Companies",
    url: "/images/carousel_company.png",
  },
  {
    title: "Community Managers",
    url: "/images/carousel_community_managers.png",
  },
  {
    title: "Marketers",
    url: "/images/carousel_marketers.png",
  },
  {
    title: "Creators",
    url: "/images/carousel_creators.png",
  },
  {
    title: "Event Organizers",
    url: "/images/carousel_organizers.png",
  },
  {
    title: "Companies",
    url: "/images/carousel_company.png",
  },
  {
    title: "Community Managers",
    url: "/images/carousel_community_managers.png",
  },
  {
    title: "Marketers",
    url: "/images/carousel_marketers.png",
  },
];

export default function PicCarousel() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [api, setApi] = useState<CarouselApi>();

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(carouselRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate slides on change
  useEffect(() => {
    if (!api) return;

    const animateSlides = () => {
      const slidesInView = api.slidesInView();
      const slides = api.slideNodes();

      slides.forEach((slide, index) => {
        const img = slide.querySelector("img");
        if (slidesInView.includes(index)) {
          gsap.to(img, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          gsap.to(img, {
            scale: 0.95,
            opacity: 0.6,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    };

    api.on("select", animateSlides);
    api.on("slidesInView", animateSlides);
    animateSlides(); // Initial animation

    return () => {
      api.off("select", animateSlides);
      api.off("slidesInView", animateSlides);
    };
  }, [api]);

  return (
    <section ref={sectionRef} className="pt-11 md:pt-16 lg:pt-16.25 pb-20">
      <div className="max-w-300 mx-auto">
        <div ref={carouselRef}>
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4.25 md:-ml-9">
              {contents.map((c, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-8 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <Pic content={c} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function Pic({ content }: { content: { title: string; url: string } }) {
  return (
    <div className="w-full rounded-[11.08px] sm:rounded-[20px] overflow-hidden sm:aspect-11/12">
      <Image
        alt={content.title}
        src={content.url}
        width={1000}
        height={1000}
        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}
