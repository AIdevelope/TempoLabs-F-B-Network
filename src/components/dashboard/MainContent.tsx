import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NetworkFeed from "./NetworkFeed";
import JobBoard from "./JobBoard";

interface MainContentProps {
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

const MainContent = ({
  activeTab = "network",
  onTabChange = () => {},
}: MainContentProps) => {
  return (
    <div className="w-full h-full bg-background p-4">
      <Tabs
        defaultValue={activeTab}
        className="w-full h-full"
        onValueChange={onTabChange}
      >
        <TabsList className="mb-4">
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="mt-0 h-[calc(100%-48px)]">
          <NetworkFeed />
        </TabsContent>

        <TabsContent value="jobs" className="mt-0 h-[calc(100%-48px)]">
          <JobBoard />
        </TabsContent>

        <TabsContent value="events" className="mt-0 h-[calc(100%-48px)]">
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Events feature coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-0 h-[calc(100%-48px)]">
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              Resources feature coming soon
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainContent;
