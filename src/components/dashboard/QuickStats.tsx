import { Card } from "@/components/ui/card";
import { Network, Award, Briefcase, Eye } from "lucide-react";

interface QuickStatsProps {
  stats?: {
    connections: number;
    endorsements: number;
    applications: number;
    profileViews: number;
  };
}

export default function QuickStats({
  stats = {
    connections: 245,
    endorsements: 18,
    applications: 12,
    profileViews: 156,
  },
}: QuickStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <Network className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-medium">Connections</span>
        </div>
        <p className="text-2xl font-bold mt-2">{stats.connections}</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <Award className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium">Endorsements</span>
        </div>
        <p className="text-2xl font-bold mt-2">{stats.endorsements}</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">Applications</span>
        </div>
        <p className="text-2xl font-bold mt-2">{stats.applications}</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <Eye className="h-4 w-4 text-purple-500" />
          <span className="text-sm font-medium">Profile Views</span>
        </div>
        <p className="text-2xl font-bold mt-2">{stats.profileViews}</p>
      </Card>
    </div>
  );
}
