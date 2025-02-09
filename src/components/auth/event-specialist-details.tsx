import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface EventSpecialistDetails {
  eventPortfolio: string;
  servicesOffered: string;
  pastEvents: string;
}

interface EventSpecialistDetailsProps {
  defaultValues?: EventSpecialistDetails;
  onSave: (data: EventSpecialistDetails) => void;
  onBack: () => void;
}

export default function EventSpecialistDetails({
  defaultValues = {
    eventPortfolio: "",
    servicesOffered: "",
    pastEvents: "",
  },
  onSave,
  onBack,
}: EventSpecialistDetailsProps) {
  const [formData, setFormData] =
    useState<EventSpecialistDetails>(defaultValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="eventPortfolio">Event Portfolio</Label>
            <Textarea
              id="eventPortfolio"
              placeholder="Describe your event experience..."
              value={formData.eventPortfolio}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  eventPortfolio: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="servicesOffered">Services Offered</Label>
            <Textarea
              id="servicesOffered"
              placeholder="List your services..."
              value={formData.servicesOffered}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  servicesOffered: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="pastEvents">Past Events</Label>
            <Textarea
              id="pastEvents"
              placeholder="Highlight significant events..."
              value={formData.pastEvents}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, pastEvents: e.target.value }))
              }
              required
            />
          </div>
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Save Details</Button>
        </div>
      </form>
    </div>
  );
}
