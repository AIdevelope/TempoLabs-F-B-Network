import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, DollarSign } from "lucide-react";

interface SearchResult {
  id: string;
  type: "profile" | "job" | "content";
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  tags?: string[];
  location?: string;
  company?: string;
  salary?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick?: (result: SearchResult) => void;
}

export function SearchResults({
  results = [],
  onResultClick = () => {},
}: SearchResultsProps) {
  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Card
          key={result.id}
          className="p-4 hover:bg-muted/50 cursor-pointer"
          onClick={() => onResultClick(result)}
        >
          <div className="flex items-start gap-4">
            {result.type === "profile" && (
              <Avatar className="h-12 w-12">
                <AvatarImage src={result.image} />
              </Avatar>
            )}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{result.title}</h3>
                  {result.subtitle && (
                    <p className="text-sm text-muted-foreground">
                      {result.subtitle}
                    </p>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  {result.type === "profile"
                    ? "View Profile"
                    : result.type === "job"
                      ? "Apply"
                      : "View"}
                </Button>
              </div>

              {result.type === "job" && (
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  {result.company && (
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {result.company}
                    </span>
                  )}
                  {result.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {result.location}
                    </span>
                  )}
                  {result.salary && (
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {result.salary}
                    </span>
                  )}
                </div>
              )}

              {result.description && (
                <p className="mt-2 text-sm">{result.description}</p>
              )}

              {result.tags && result.tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {result.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
