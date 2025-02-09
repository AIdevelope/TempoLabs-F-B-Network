import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface JobFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export function JobFilters({ onFilterChange = () => {} }: JobFiltersProps) {
  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Job Type</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="full-time" />
            <Label htmlFor="full-time">Full-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="part-time" />
            <Label htmlFor="part-time">Part-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="contract" />
            <Label htmlFor="contract">Contract</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4">Experience Level</h3>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="entry" id="entry" />
            <Label htmlFor="entry">Entry Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mid" id="mid" />
            <Label htmlFor="mid">Mid Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="senior" id="senior" />
            <Label htmlFor="senior">Senior Level</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4">Salary Range</h3>
        <Slider
          defaultValue={[20000, 200000]}
          max={200000}
          min={20000}
          step={1000}
          className="mt-6"
        />
        <div className="flex justify-between mt-2">
          <span className="text-sm text-muted-foreground">$20k</span>
          <span className="text-sm text-muted-foreground">$200k</span>
        </div>
      </div>
    </Card>
  );
}
