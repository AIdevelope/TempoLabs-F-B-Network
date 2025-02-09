import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  suggestions?: string[];
}

export function SearchBar({
  onSearch = () => {},
  suggestions = [
    "Top Chefs",
    "Restaurant Jobs",
    "Event Specialists",
    "Suppliers",
  ],
}: SearchBarProps) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search for people, jobs, or content..."
          className="pl-10 pr-32"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2"
        >
          Search
        </Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {suggestions.map((suggestion, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80"
            onClick={() => onSearch(suggestion)}
          >
            {suggestion}
          </Badge>
        ))}
      </div>
    </div>
  );
}
