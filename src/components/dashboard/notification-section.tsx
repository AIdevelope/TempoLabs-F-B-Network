import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bell } from "lucide-react";
import type { Notification } from "@/types/database";

const DEMO_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    user_id: "1",
    title: "New Connection Request",
    message: "Chef Michael wants to connect with you",
    type: "connection",
    read: false,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    user_id: "1",
    title: "Job Application Update",
    message: "Your application for Head Chef position has been reviewed",
    type: "job",
    read: true,
    created_at: new Date().toISOString(),
  },
];

export default function NotificationSection() {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          <CardTitle>Notifications</CardTitle>
        </div>
        <CardDescription>Stay updated with your network</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {DEMO_NOTIFICATIONS.map((notification) => (
          <Card
            key={notification.id}
            className={`p-4 ${!notification.read ? "bg-muted" : ""}`}
          >
            <h3 className="font-semibold">{notification.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {notification.message}
            </p>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
