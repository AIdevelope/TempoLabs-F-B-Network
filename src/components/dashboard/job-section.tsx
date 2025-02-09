import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/auth";
import type { JobOffer } from "@/types/database";

const DEMO_JOBS: JobOffer[] = [
  {
    id: "1",
    title: "Head Chef",
    description:
      "Looking for an experienced head chef to lead our kitchen team.",
    company: "Fine Dining Restaurant",
    location: "New York, NY",
    salary_range: "$70,000 - $90,000",
    created_at: new Date().toISOString(),
    role_type: "chef",
  },
  {
    id: "2",
    title: "Restaurant Manager",
    description:
      "Seeking a passionate restaurant manager to oversee operations.",
    company: "Bistro Central",
    location: "Los Angeles, CA",
    salary_range: "$55,000 - $65,000",
    created_at: new Date().toISOString(),
    role_type: "restaurant",
  },
];

export default function JobSection() {
  const { toast } = useToast();

  const handleApply = (jobId: string) => {
    // Handle job application
    toast({
      title: "Application submitted",
      description: "Your application has been received",
    });
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Latest Job Offers</CardTitle>
        <CardDescription>
          Find your next opportunity in the F&B industry
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {DEMO_JOBS.map((job) => (
          <Card key={job.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {job.company} - {job.location}
                </p>
                <p className="text-sm mt-2">{job.description}</p>
                {job.salary_range && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Salary: {job.salary_range}
                  </p>
                )}
              </div>
              <Button
                onClick={() => handleApply(job.id)}
                variant="outline"
                className="ml-4"
              >
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
