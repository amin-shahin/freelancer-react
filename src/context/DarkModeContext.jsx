import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const darkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const toggleTheme = () => setIsDarkMode((prevState) => !prevState);

  //custom hook for localStorage value
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "dark-theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </darkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(darkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside darkModeContextProvider");
  return context;
}
