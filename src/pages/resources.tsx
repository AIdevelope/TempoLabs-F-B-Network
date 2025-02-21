import { useState } from "react";
import {
  ResourceCard,
  type Resource,
} from "@/components/resources/resource-card";
import { ResourceFilters } from "@/components/resources/resource-filters";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

const DEMO_RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Essential Kitchen Management Techniques",
    description:
      "Learn the fundamentals of running an efficient kitchen operation, from inventory management to staff coordination.",
    type: "guide",
    author: "Chef Michael Roberts",
    date: "Mar 10, 2024",
    readTime: "15 min read",
    tags: ["Kitchen Operations", "Management", "Efficiency"],
    image: "https://images.unsplash.com/photo-1557555187-23d685287bc3",
    url: "#",
  },
  {
    id: "2",
    title: "Sustainable Sourcing in Modern Restaurants",
    description:
      "A comprehensive guide to implementing sustainable practices in your restaurant's sourcing and supply chain.",
    type: "article",
    author: "Sarah Chen",
    date: "Mar 8, 2024",
    readTime: "10 min read",
    tags: ["Sustainability", "Sourcing", "Supply Chain"],
    image: "https://images.unsplash.com/photo-1470784790053-6c2f15489967",
    url: "#",
  },
  {
    id: "3",
    title: "Advanced Plating Techniques Masterclass",
    description:
      "Watch this comprehensive video tutorial on modern plating techniques from Michelin-starred chefs.",
    type: "video",
    author: "Chef Jean Pierre",
    date: "Mar 5, 2024",
    readTime: "45 min watch",
    tags: ["Culinary Skills", "Plating", "Professional Development"],
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d",
    url: "#",
  },
];

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleViewResource = (resource: Resource) => {
    // In a real app, this would navigate to the resource or open it
    window.open(resource.url, "_blank");
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full bg-background flex overflow-hidden">
      {/* Filters Sidebar */}
      <div className="w-[300px] p-6 border-r hidden lg:block">
        <ResourceFilters />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="ml-4">
            <Plus className="h-4 w-4 mr-2" />
            Submit Resource
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEMO_RESOURCES.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onView={handleViewResource}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ResourcesPage;
