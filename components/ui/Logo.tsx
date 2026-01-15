import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
}

const Logo = ({ variant = "primary", size = "sm" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6",
    lg: "h-7",
  };

  return (
    <Link href="/">
      <Image
        src={`/logo/${variant}.png`}
        alt="Logo"
        width={100}
        height={50}
        className={`object-contain ${sizeClasses[size]}`}
      />
    </Link>
  );
};

export default Logo;
