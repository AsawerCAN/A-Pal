import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("a-pal-theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("a-pal-theme", theme);
    set({ theme });
  },
}));
