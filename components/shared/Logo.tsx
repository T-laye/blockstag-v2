import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "primary.png" | "secondary.png" | "white-logo.svg";
  size?: "sm" | "lg";
  className?: string;
}

const Logo = ({
  variant = "primary.png",
  size = "sm",
  className,
}: LogoProps) => {
  const sizeClasses = {
    sm: "w-[120px] sm:w-[150px]",
    lg: "h-7",
  };

  return (
    <Link href="/" className={`${sizeClasses[size]} ${className}`}>
      <Image
        // src={`/logo/${variant}.png`}
        src={`/logo/${variant}`}
        alt="Logo"
        width={100}
        height={50}
        className={`object-contain h-full w-full`}
      />
    </Link>
  );
};

export default Logo;
