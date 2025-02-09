import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Certification {
  name: string;
  issuingOrg: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
}

interface CertificationSectionProps {
  onSave: (certifications: Certification[]) => void;
  onBack: () => void;
}

export default function CertificationSection({
  onSave,
  onBack,
}: CertificationSectionProps) {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [currentCert, setCurrentCert] = useState<Certification>({
    name: "",
    issuingOrg: "",
    issueDate: "",
  });

  const handleAddCertification = () => {
    setCertifications([...certifications, currentCert]);
    setCurrentCert({
      name: "",
      issuingOrg: "",
      issueDate: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(certifications);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Certifications</h2>
        <p className="text-sm text-muted-foreground">
          Add your professional certifications and credentials
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="certName">Certification Name</Label>
            <Input
              id="certName"
              placeholder="e.g., Food Safety Manager Certification"
              value={currentCert.name}
              onChange={(e) =>
                setCurrentCert((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div>
            <Label htmlFor="issuingOrg">Issuing Organization</Label>
            <Input
              id="issuingOrg"
              placeholder="e.g., ServSafe"
              value={currentCert.issuingOrg}
              onChange={(e) =>
                setCurrentCert((prev) => ({
                  ...prev,
                  issuingOrg: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="issueDate">Issue Date</Label>
              <Input
                id="issueDate"
                type="date"
                value={currentCert.issueDate}
                onChange={(e) =>
                  setCurrentCert((prev) => ({
                    ...prev,
                    issueDate: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
              <Input
                id="expiryDate"
                type="date"
                value={currentCert.expiryDate}
                onChange={(e) =>
                  setCurrentCert((prev) => ({
                    ...prev,
                    expiryDate: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div>
            <Label htmlFor="credentialUrl">Credential URL (Optional)</Label>
            <Input
              id="credentialUrl"
              type="url"
              placeholder="https://example.com/your-credential"
              value={currentCert.credentialUrl}
              onChange={(e) =>
                setCurrentCert((prev) => ({
                  ...prev,
                  credentialUrl: e.target.value,
                }))
              }
            />
          </div>

          <Button
            type="button"
            variant="secondary"
            onClick={handleAddCertification}
            disabled={
              !currentCert.name ||
              !currentCert.issuingOrg ||
              !currentCert.issueDate
            }
          >
            Add Certification
          </Button>
        </div>

        {certifications.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-medium">Added Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 border rounded-md bg-muted/30">
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-muted-foreground">
                  {cert.issuingOrg}
                </p>
                <p className="text-sm text-muted-foreground">
                  Issued: {new Date(cert.issueDate).toLocaleDateString()}
                  {cert.expiryDate &&
                    ` · Expires: ${new Date(cert.expiryDate).toLocaleDateString()}`}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Save Certifications</Button>
        </div>
      </form>
    </div>
  );
}
