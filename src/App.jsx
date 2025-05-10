import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfileForm from "./features/authentication/CompleteProfileForm";
import Home from "./pages/Home";
import NoteFound from "./pages/NoteFound";
import AppLayoutDashboard from "./features/appLayout/AppLayoutDashboard";
import Owner from "./pages/Owner";

const queryClient = new QueryClient();
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="complete-profile" element={<CompleteProfileForm />} />
          </Route>
          <Route element={<AppLayoutDashboard />}>
            <Route path="/owner" element={<Owner />} />
          </Route>
          <Route path="*" element={<NoteFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
