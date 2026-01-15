import Logo from "../ui/Logo";
import { ThemeToggle } from "../../components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 hero-bg py-4 min-h-21.5 flex items-center">
      <div className="landing-container w-full flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-4">
          <button>sign up</button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
