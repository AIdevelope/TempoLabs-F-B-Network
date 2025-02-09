import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";

interface EventFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export function EventFilters({ onFilterChange = () => {} }: EventFiltersProps) {
  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Event Type</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="networking" />
            <Label htmlFor="networking">Networking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="workshops" />
            <Label htmlFor="workshops">Workshops</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="conferences" />
            <Label htmlFor="conferences">Conferences</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="tastings" />
            <Label htmlFor="tastings">Tastings</Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Date</h3>
        <Calendar mode="single" className="rounded-md border" />
      </div>
    </Card>
  );
}
