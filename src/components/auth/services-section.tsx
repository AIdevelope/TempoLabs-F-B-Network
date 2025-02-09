import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
}

interface ServicesSectionProps {
  onSave: (services: Service[]) => void;
  onBack: () => void;
}

export default function ServicesSection({
  onSave,
  onBack,
}: ServicesSectionProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [currentService, setCurrentService] = useState<Service>({
    name: "",
    description: "",
    price: "",
    duration: "",
    category: "",
  });

  const handleAddService = () => {
    setServices([...services, currentService]);
    setCurrentService({
      name: "",
      description: "",
      price: "",
      duration: "",
      category: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(services);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Services Offered</h2>
        <p className="text-sm text-muted-foreground">
          Add the professional services you offer with pricing and details
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="serviceName">Service Name</Label>
            <Input
              id="serviceName"
              placeholder="e.g., Private Chef Experience"
              value={currentService.name}
              onChange={(e) =>
                setCurrentService((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your service..."
              value={currentService.description}
              onChange={(e) =>
                setCurrentService((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Price (USD)</Label>
              <Input
                id="price"
                type="number"
                placeholder="0"
                value={currentService.price}
                onChange={(e) =>
                  setCurrentService((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="duration">Duration (hours)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="0"
                value={currentService.duration}
                onChange={(e) =>
                  setCurrentService((prev) => ({
                    ...prev,
                    duration: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={currentService.category}
              onValueChange={(value) =>
                setCurrentService((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dining">Private Dining</SelectItem>
                <SelectItem value="catering">Catering</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="classes">Cooking Classes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="button"
            variant="secondary"
            onClick={handleAddService}
            className="w-full"
            disabled={
              !currentService.name ||
              !currentService.description ||
              !currentService.price ||
              !currentService.duration ||
              !currentService.category
            }
          >
            Add Service
          </Button>
        </div>

        {services.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-medium">Added Services</h3>
            {services.map((service, index) => (
              <div key={index} className="p-4 border rounded-md bg-muted/30">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      ${service.price} · {service.duration} hours
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {service.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Save Services</Button>
        </div>
      </form>
    </div>
  );
}
