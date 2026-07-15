import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "normal" | "dark" | "high-contrast";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "normal",
  setTheme: () => {},
});

const STORAGE_KEY = "regvarsity-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "high-contrast");
  if (theme === "dark") root.classList.add("dark");
  if (theme === "high-contrast") root.classList.add("high-contrast");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (
        stored === "dark" ||
        stored === "high-contrast" ||
        stored === "normal"
      )
        return stored;
    } catch {}
    return "normal";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {}
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
