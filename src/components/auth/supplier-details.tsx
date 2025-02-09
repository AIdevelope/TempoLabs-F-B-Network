import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface SupplierDetails {
  products: string;
  serviceArea: string;
  businessType: string;
}

interface SupplierDetailsProps {
  defaultValues?: SupplierDetails;
  onSave: (data: SupplierDetails) => void;
  onBack: () => void;
}

export default function SupplierDetails({
  defaultValues = {
    products: "",
    serviceArea: "",
    businessType: "",
  },
  onSave,
  onBack,
}: SupplierDetailsProps) {
  const [formData, setFormData] = useState<SupplierDetails>(defaultValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="products">Products & Services</Label>
            <Textarea
              id="products"
              placeholder="List your products and services..."
              value={formData.products}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  products: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="serviceArea">Service Area</Label>
            <Input
              id="serviceArea"
              placeholder="Geographic areas you serve"
              value={formData.serviceArea}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  serviceArea: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="businessType">Business Type</Label>
            <Input
              id="businessType"
              placeholder="Wholesaler, Distributor, etc."
              value={formData.businessType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  businessType: e.target.value,
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
