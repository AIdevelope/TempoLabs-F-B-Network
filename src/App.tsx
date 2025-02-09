import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./pages/dashboard";
import JobsPage from "./pages/jobs";
import EventsPage from "./pages/events";
import ResourcesPage from "./pages/resources";
import ProfilePage from "./pages/profile";
import SearchPage from "./pages/search";
import SettingsPage from "./pages/settings";
import HelpPage from "./pages/help";
import MessagesPage from "./pages/messages";
import routes from "tempo-routes";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./lib/auth";
import { MainNav } from "./components/layout/main-nav";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <MainNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Toaster />
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
