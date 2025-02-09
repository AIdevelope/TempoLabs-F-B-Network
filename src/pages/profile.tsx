import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Pencil,
  MapPin,
  Building2,
  Award,
  Network,
  Calendar,
} from "lucide-react";

const ProfilePage = () => {
  const profile = {
    name: "John Doe",
    role: "Chef",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    location: "New York, NY",
    company: "Fine Dining Restaurant",
    bio: "Passionate chef specializing in Mediterranean cuisine with 10+ years of experience.",
    stats: {
      connections: 245,
      endorsements: 18,
      projects: 32,
      reviews: 24,
    },
    certifications: [
      {
        name: "Certified Executive Chef",
        issuer: "American Culinary Federation",
        date: "2021",
      },
      {
        name: "Food Safety Manager Certification",
        issuer: "ServSafe",
        date: "2022",
      },
    ],
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background p-6">
      {/* Profile Header */}
      <div className="relative w-full h-[200px] rounded-t-lg bg-gradient-to-r from-primary/10 to-primary/5 mb-16">
        <div className="absolute -bottom-12 left-8 flex items-end space-x-4">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src={profile.avatar} />
          </Avatar>
          <div className="mb-4">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {profile.name}
              <Badge variant="secondary">{profile.role}</Badge>
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {profile.location}
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="h-4 w-4" /> {profile.company}
              </span>
            </div>
          </div>
        </div>
        <Button
          size="sm"
          className="absolute top-4 right-4"
          variant="secondary"
        >
          <Pencil className="h-4 w-4 mr-2" /> Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Left Column */}
        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-muted-foreground">{profile.bio}</p>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Network className="h-5 w-5 mx-auto mb-1" />
                <div className="font-semibold">{profile.stats.connections}</div>
                <div className="text-xs text-muted-foreground">Connections</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Award className="h-5 w-5 mx-auto mb-1" />
                <div className="font-semibold">
                  {profile.stats.endorsements}
                </div>
                <div className="text-xs text-muted-foreground">
                  Endorsements
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Certifications</h2>
            <div className="space-y-3">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <div className="font-medium">{cert.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {cert.issuer} · {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="mt-6">
              <Card className="p-4">
                <div className="text-center text-muted-foreground py-8">
                  No portfolio items yet
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-6">
              <Card className="p-4">
                <div className="text-center text-muted-foreground py-8">
                  No experience items yet
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-6">
              <Card className="p-4">
                <div className="text-center text-muted-foreground py-8">
                  No recommendations yet
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
