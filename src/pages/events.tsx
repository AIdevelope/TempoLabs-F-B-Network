import { useState } from "react";
import { EventFilters } from "@/components/events/event-filters";
import { EventCard, type Event } from "@/components/events/event-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

const DEMO_EVENTS: Event[] = [
  {
    id: "1",
    title: "F&B Industry Networking Night",
    type: "Networking",
    date: "2024-03-15",
    time: "6:00 PM - 9:00 PM",
    location: "The Grand Hotel, New York",
    description:
      "Join us for an evening of networking with top F&B professionals.",
    capacity: 100,
    attendees: 65,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    id: "2",
    title: "Sustainable Cooking Workshop",
    type: "Workshop",
    date: "2024-03-20",
    time: "2:00 PM - 5:00 PM",
    location: "Culinary Institute, Miami",
    description: "Learn sustainable cooking practices from expert chefs.",
    capacity: 30,
    attendees: 25,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
  },
  {
    id: "3",
    title: "Wine Tasting Experience",
    type: "Tasting",
    date: "2024-03-25",
    time: "7:00 PM - 10:00 PM",
    location: "Vintage Cellars, San Francisco",
    description:
      "Explore a curated selection of premium wines with our sommeliers.",
    capacity: 40,
    attendees: 32,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
  },
];

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleRSVP = (eventId: string) => {
    toast({
      title: "RSVP Successful",
      description: "You have successfully registered for this event.",
    });
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full bg-background flex overflow-hidden">
      {/* Filters Sidebar */}
      <div className="w-[300px] p-6 border-r hidden lg:block">
        <EventFilters />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="ml-4">
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEMO_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} onRSVP={handleRSVP} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default EventsPage;
