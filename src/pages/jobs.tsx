import { useState } from "react";
import { JobFilters } from "@/components/jobs/job-filters";
import { JobDetailDialog } from "@/components/jobs/job-detail-dialog";
import JobBoard from "@/components/dashboard/JobBoard";

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full bg-background flex overflow-hidden">
      {/* Filters Sidebar */}
      <div className="w-[300px] p-6 border-r hidden lg:block">
        <JobFilters />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <JobBoard onApplyJob={(jobId) => setSelectedJob(jobId)} />
      </div>

      {/* Job Detail Dialog */}
      <JobDetailDialog
        job={{
          id: "1",
          title: "Head Chef",
          company: "Gourmet Restaurant",
          location: "New York, NY",
          salary: "$70,000 - $90,000",
          type: "Full-time",
          posted: "2 days ago",
          description:
            "We are looking for an experienced Head Chef to lead our kitchen team and maintain our high standards of culinary excellence.",
          requirements: [
            "Minimum 5 years experience in a similar role",
            "Strong leadership and team management skills",
            "Excellent knowledge of food preparation and cooking techniques",
            "Menu planning and cost control experience",
          ],
          benefits: [
            "Competitive salary package",
            "Health insurance",
            "Paid vacation",
            "Professional development opportunities",
          ],
        }}
        open={!!selectedJob}
        onOpenChange={(open) => !open && setSelectedJob(null)}
        onApply={(jobId) => {
          console.log("Applying to job:", jobId);
          setSelectedJob(null);
        }}
      />
    </div>
  );
};

export default JobsPage;
