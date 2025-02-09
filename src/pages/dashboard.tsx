import React from "react";
import NetworkFeed from "@/components/dashboard/NetworkFeed";
import JobBoard from "@/components/dashboard/JobBoard";
import QuickStats from "@/components/dashboard/QuickStats";

interface DashboardProps {
  user?: {
    name: string;
    avatar: string;
    notifications: number;
  };
}

const Dashboard = ({
  user = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    notifications: 3,
  },
}: DashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState("network");

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full bg-background flex overflow-hidden">
      {/* Left Sidebar */}
      <div
        className={`w-[350px] border-r transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 bg-background`}
      >
        <div className="p-4">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg bg-muted" />
            <div className="h-4 w-3/4 bg-muted rounded" />
            <div className="h-4 w-1/2 bg-muted rounded" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-3/4 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">
            Welcome back, {user.name}!
          </h1>
          <QuickStats />
          {activeTab === "network" && <NetworkFeed />}
          {activeTab === "jobs" && <JobBoard />}
          {activeTab === "events" && (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">
                Events feature coming soon
              </p>
            </div>
          )}
          {activeTab === "resources" && (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">
                Resources feature coming soon
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[330px] border-l hidden lg:block bg-background">
        <div className="p-4">
          <div className="space-y-4">
            <div className="h-8 w-full bg-muted rounded" />
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="space-y-1 flex-1">
                    <div className="h-4 w-3/4 bg-muted rounded" />
                    <div className="h-3 w-1/2 bg-muted rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
