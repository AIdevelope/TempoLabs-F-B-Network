import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Profile } from "@/types/database";

const DEMO_PROFILES: Profile[] = [
  {
    id: "1",
    email: "chef.john@example.com",
    full_name: "John Smith",
    role: "chef",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    email: "sarah.restaurant@example.com",
    full_name: "Sarah Johnson",
    role: "restaurant",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    created_at: new Date().toISOString(),
  },
];

export default function NetworkSection() {
  const { toast } = useToast();

  const handleConnect = (profileId: string) => {
    // Handle connection request
    toast({
      title: "Connection request sent",
      description: "Your request has been sent",
    });
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Network</CardTitle>
        <CardDescription>Connect with F&B professionals</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {DEMO_PROFILES.map((profile) => (
          <Card key={profile.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={profile.avatar_url} />
                  <AvatarFallback>
                    {profile.full_name?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{profile.full_name}</h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {profile.role?.replace("_", " ")}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => handleConnect(profile.id)}
                variant="outline"
                size="sm"
              >
                Connect
              </Button>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
