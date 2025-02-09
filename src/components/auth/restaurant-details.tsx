import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface RestaurantDetails {
  restaurantType: string;
  cuisine: string;
  capacity: string;
}

interface RestaurantDetailsProps {
  defaultValues?: RestaurantDetails;
  onSave: (data: RestaurantDetails) => void;
  onBack: () => void;
}

export default function RestaurantDetails({
  defaultValues = {
    restaurantType: "",
    cuisine: "",
    capacity: "",
  },
  onSave,
  onBack,
}: RestaurantDetailsProps) {
  const [formData, setFormData] = useState<RestaurantDetails>(defaultValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="restaurantType">Restaurant Type</Label>
            <Input
              id="restaurantType"
              placeholder="Fine Dining, Casual, etc."
              value={formData.restaurantType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  restaurantType: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="cuisine">Cuisine Specialties</Label>
            <Textarea
              id="cuisine"
              placeholder="Describe your restaurant's cuisine..."
              value={formData.cuisine}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  cuisine: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="capacity">Seating Capacity</Label>
            <Input
              id="capacity"
              placeholder="Number of seats"
              value={formData.capacity}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, capacity: e.target.value }))
              }
              required
            />
          </div>
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
}
