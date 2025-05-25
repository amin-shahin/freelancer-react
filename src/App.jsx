import { useEffect, useState } from "react";

import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route, Navigate } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfileForm from "./features/authentication/CompleteProfileForm";
import Home from "./pages/Home";
import OwnerSingleProject from "./pages/OwnerSingleProject";
import OwnerProjects from "./pages/OwnerProjects";
import OwnerDashboard from "./pages/OwnerDashboard";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/appLayout/OwnerLayout";
import FreelancerLayout from "./features/appLayout/FreelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import FreelancerProposals from "./features/freelancer/FreelancerProposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/appLayout/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AllUser from "./pages/AllUser";
import NotFound from "./pages/NotFound";

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
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<OwnerProjects />} />
              <Route
                path="projects/:projectId"
                element={<OwnerSingleProject />}
              />
            </Route>
            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="projects" element={<SubmittedProjects />} />
              <Route path="proposals" element={<FreelancerProposals />} />
            </Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="projects" element={<SubmittedProjects />} />
              <Route path="proposals" element={<FreelancerProposals />} />
              <Route path="users" element={<AllUser />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeContextProvider>
  );
}

export default App;
