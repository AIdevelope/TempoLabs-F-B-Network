import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Award } from "lucide-react";
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
    toast({
      title: "Connection request sent",
      description: "Your request has been sent",
    });
  };

  const handleEndorse = (profileId: string) => {
    toast({
      title: "Endorsement sent",
      description: "Your endorsement has been recorded",
    });
  };

  return (
    <div className="space-y-6">
      {/* Network Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">245</h3>
          <p className="text-muted-foreground">Connections</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">18</h3>
          <p className="text-muted-foreground">Endorsements</p>
        </Card>
      </div>

      {/* Recommended Connections */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Connections</CardTitle>
          <CardDescription>F&B professionals you might know</CardDescription>
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
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEndorse(profile.id)}
                    variant="outline"
                    size="sm"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Endorse
                  </Button>
                  <Button onClick={() => handleConnect(profile.id)} size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
