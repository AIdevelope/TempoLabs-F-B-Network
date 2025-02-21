import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ResourceFiltersProps {
  onFilterChange?: (filters: any) => void;
  popularTags?: string[];
}

export function ResourceFilters({
  onFilterChange = () => {},
  popularTags = [
    "Restaurant Management",
    "Culinary Techniques",
    "Food Safety",
    "Menu Planning",
    "Wine Pairing",
    "Kitchen Operations",
    "Staff Training",
    "Sustainability",
  ],
}: ResourceFiltersProps) {
  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Resource Type</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="articles" />
            <Label htmlFor="articles">Articles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="videos" />
            <Label htmlFor="videos">Videos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="guides" />
            <Label htmlFor="guides">Guides</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="templates" />
            <Label htmlFor="templates">Templates</Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Popular Tags</h3>
        <ScrollArea className="h-[200px]">
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-secondary/80"
                onClick={() => onFilterChange({ tag })}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
}
