"use client";
import { LuSunMoon } from "react-icons/lu";
import { useThemeStore } from "../../stores/themeStore";
import { FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  console.log("Current theme:", theme);

  return (
    <div className="flex gap-2 text-3xl sm:text-4xl cursor-pointer">
      {theme === "dark" ? (
        <button className="" onClick={() => setTheme("light")}>
          <FiSun />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <LuSunMoon />
        </button>
      )}
      {/* <button onClick={() => setTheme("system")}>System</button> */}
    </div>
  );
}
