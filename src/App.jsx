import { useEffect, useState } from "react";

import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route, Navigate } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfileForm from "./features/authentication/CompleteProfileForm";
import Home from "./pages/Home";
import NoteFound from "./pages/NoteFound";
import AppLayoutDashboard from "./features/appLayout/AppLayoutDashboard";
import OwnerSingleProject from "./pages/OwnerSingleProject";
import OwnerProjects from "./pages/OwnerProjects";
import OwnerDashboard from "./pages/OwnerDashboard";
import { DarkModeContextProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient();
function App() {


  return (
    <DarkModeContextProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />}>
              <Route
                path="complete-profile"
                element={<CompleteProfileForm />}
              />
            </Route>
            <Route path="/owner" element={<AppLayoutDashboard />}>
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<OwnerProjects />} />
              <Route
                path="projects/:projectId"
                element={<OwnerSingleProject />}
              />
            </Route>
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeContextProvider>
  );
}

export default App;
