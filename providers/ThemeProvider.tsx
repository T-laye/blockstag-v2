"use client";

import { useEffect } from "react";
import { useThemeStore } from "../stores/themeStore";
import { Toaster } from "../components/ui/sonner";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const initTheme = useThemeStore((state) => state.initTheme);
  const { initTheme, theme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      {children} <Toaster position="top-right" richColors theme={theme} />
    </>
  );
}
