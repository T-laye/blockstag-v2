"use client";
import { useRouter } from "next/navigation";
import Logo from "../shared/Logo";
import { ThemeToggle } from "../shared/ThemeSwitcher";
import { Button } from "../ui/button";
import { pageRoutes } from "../../lib/routes";

export default function Header() {
  const router = useRouter();

  const gotoSignUp = () => {
    router.push(pageRoutes.authRoutes.SIGN_UP);
  };

  return (
    <header className="fixed inset-x-0 top-0 hero-bg py-4 min-h-21.5 flex items-center z-50">
      <div className="landing-container w-full flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-3">
          <Button onClick={gotoSignUp} variant="secondary">
            Sign Up
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
