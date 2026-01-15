import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  initTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "system",

  setTheme: (theme) => {
    set({ theme });

    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.theme = theme;
    }

    applyTheme(theme);
  },

  initTheme: () => {
    const savedTheme = localStorage.theme as Theme | undefined;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const resolvedTheme = savedTheme ?? (systemPrefersDark ? "dark" : "light");

    set({ theme: savedTheme ?? "system" });
    applyTheme(resolvedTheme);
  },
}));

function applyTheme(theme: Theme | "light" | "dark") {
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDark);
}
