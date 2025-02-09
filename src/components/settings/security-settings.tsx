import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current">Current Password</Label>
            <Input id="current" type="password" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="new">New Password</Label>
            <Input id="new" type="password" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirm">Confirm New Password</Label>
            <Input id="confirm" type="password" />
          </div>

          <Button>Update Password</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">
          Two-Factor Authentication
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable 2FA</Label>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Login History</h2>
        <div className="space-y-4">
          {[
            {
              device: "Chrome on MacOS",
              location: "New York, USA",
              time: "2 hours ago",
              status: "Current session",
            },
            {
              device: "Safari on iPhone",
              location: "New York, USA",
              time: "Yesterday",
              status: "Logged out",
            },
          ].map((session, i) => (
            <div
              key={i}
              className="flex justify-between items-start p-4 bg-muted/50 rounded-lg"
            >
              <div>
                <p className="font-medium">{session.device}</p>
                <p className="text-sm text-muted-foreground">
                  {session.location}
                </p>
                <p className="text-sm text-muted-foreground">{session.time}</p>
              </div>
              <span className="text-sm">{session.status}</span>
            </div>
          ))}
        </div>

        <Button variant="outline" className="mt-4 w-full">
          View All Sessions
        </Button>
      </Card>

      <Card className="p-6 border-destructive">
        <h2 className="text-lg font-semibold mb-4 text-destructive">
          Danger Zone
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
