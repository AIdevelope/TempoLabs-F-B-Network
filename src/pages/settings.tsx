import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralSettings } from "@/components/settings/general-settings";
import { PrivacySettings } from "@/components/settings/privacy-settings";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { SecuritySettings } from "@/components/settings/security-settings";

const SettingsPage = () => {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="general"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Privacy
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="general">
              <GeneralSettings />
            </TabsContent>

            <TabsContent value="privacy">
              <PrivacySettings />
            </TabsContent>

            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>

            <TabsContent value="security">
              <SecuritySettings />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
