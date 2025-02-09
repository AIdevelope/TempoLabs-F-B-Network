import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Search,
  Plus,
} from "lucide-react";

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
}

interface JobBoardProps {
  jobs?: JobListing[];
  onPostJob?: () => void;
  onApplyJob?: (jobId: string) => void;
}

const defaultJobs: JobListing[] = [
  {
    id: "1",
    title: "Head Chef",
    company: "Gourmet Restaurant",
    location: "New York, NY",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "Sous Chef",
    company: "Luxury Hotel",
    location: "Miami, FL",
    salary: "$55,000 - $65,000",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    id: "3",
    title: "Pastry Chef",
    company: "Artisan Bakery",
    location: "San Francisco, CA",
    salary: "$45,000 - $60,000",
    type: "Part-time",
    posted: "3 days ago",
  },
];

const JobBoard = ({
  jobs = defaultJobs,
  onPostJob = () => {},
  onApplyJob = () => {},
}: JobBoardProps) => {
  return (
    <div className="w-full h-full bg-background p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Job Board</h2>
        <Button onClick={onPostJob}>
          <Plus className="mr-2 h-4 w-4" />
          Post Job
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search jobs..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <ScrollArea className="h-[700px] pr-4">
            {jobs.map((job) => (
              <Card key={job.id} className="p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                    <p className="text-muted-foreground mb-2">{job.company}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center">
                        <DollarSign className="mr-1 h-3 w-3" />
                        {job.salary}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center">
                        <Briefcase className="mr-1 h-3 w-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {job.posted}
                      </Badge>
                    </div>
                  </div>
                  <Button onClick={() => onApplyJob(job.id)}>Apply Now</Button>
                </div>
              </Card>
            ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="saved">
          <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
            <Briefcase className="h-12 w-12 mb-4" />
            <p>No saved jobs yet</p>
          </div>
        </TabsContent>

        <TabsContent value="applied">
          <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
            <Briefcase className="h-12 w-12 mb-4" />
            <p>No job applications yet</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobBoard;
