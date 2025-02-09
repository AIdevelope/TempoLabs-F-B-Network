import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  attendees: number;
  image?: string;
}

interface EventCardProps {
  event: Event;
  onRSVP: (eventId: string) => void;
}

export function EventCard({ event, onRSVP = () => {} }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      {event.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <Badge className="mb-2">{event.type}</Badge>
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {event.location}
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {event.attendees}/{event.capacity} attending
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {event.description}
        </p>
        <Button onClick={() => onRSVP(event.id)} className="w-full">
          RSVP
        </Button>
      </div>
    </Card>
  );
}
