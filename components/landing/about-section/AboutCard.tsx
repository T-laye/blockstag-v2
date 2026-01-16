import Image from "next/image";
import React from "react";

interface AboutCardProps {
  title: string;
  description: string;
  image: string;
}

// const AboutCard = ({ title, description, image }: AboutCardProps) => {
const AboutCard = ({ title, description, image }: AboutCardProps) => {
  return (
    <div className="img-container max-w-114.25 ">
      <div>
        <Image
          alt="image"
          src={image}
          width={400}
          height={400}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="px-3 mt-4.25">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="mt-2 text-[#636161] max-w-11/12">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
