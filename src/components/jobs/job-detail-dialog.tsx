import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building2, MapPin, DollarSign, Calendar } from "lucide-react";

interface JobDetailDialogProps {
  job?: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    posted: string;
    description: string;
    requirements: string[];
    benefits: string[];
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: (jobId: string) => void;
}

export function JobDetailDialog({
  job,
  open,
  onOpenChange,
  onApply,
}: JobDetailDialogProps) {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{job.title}</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="flex items-center">
                <Building2 className="mr-1 h-3 w-3" />
                {job.company}
              </Badge>
              <Badge variant="secondary" className="flex items-center">
                <MapPin className="mr-1 h-3 w-3" />
                {job.location}
              </Badge>
              <Badge variant="secondary" className="flex items-center">
                <DollarSign className="mr-1 h-3 w-3" />
                {job.salary}
              </Badge>
              <Badge variant="secondary" className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {job.posted}
              </Badge>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="font-semibold mb-2">Job Description</h3>
            <p className="text-muted-foreground">{job.description}</p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">Requirements</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {job.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button onClick={() => onApply(job.id)}>Apply Now</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
