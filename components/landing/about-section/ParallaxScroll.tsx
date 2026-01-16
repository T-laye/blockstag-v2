import React from "react";
import AboutCard from "./AboutCard";

interface ParallaxScrollProps {
  item: {
    title: string;
    description: string;
    image: string;
  };
}

export default function ParallaxScroll({ item }: ParallaxScrollProps) {
  return (
    <AboutCard
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );
}
