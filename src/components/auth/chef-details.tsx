import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ChefDetails {
  specialties: string;
  experience: string;
  certifications: string;
}

interface ChefDetailsProps {
  defaultValues?: ChefDetails;
  onSave: (data: ChefDetails) => void;
  onBack: () => void;
}

export default function ChefDetails({
  defaultValues = {
    specialties: "",
    experience: "",
    certifications: "",
  },
  onSave,
  onBack,
}: ChefDetailsProps) {
  const [formData, setFormData] = useState<ChefDetails>(defaultValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="specialties">Culinary Specialties</Label>
            <Textarea
              id="specialties"
              placeholder="List your culinary specialties..."
              value={formData.specialties}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  specialties: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="experience">Professional Experience</Label>
            <Textarea
              id="experience"
              placeholder="Describe your professional experience..."
              value={formData.experience}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  experience: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="certifications">Certifications</Label>
            <Textarea
              id="certifications"
              placeholder="List your certifications..."
              value={formData.certifications}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  certifications: e.target.value,
                }))
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
