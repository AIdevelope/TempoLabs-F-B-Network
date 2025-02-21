import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Video, FileText } from "lucide-react";

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "article" | "video" | "guide" | "template";
  image?: string;
  author: string;
  date: string;
  readTime?: string;
  tags: string[];
  url: string;
}

interface ResourceCardProps {
  resource: Resource;
  onView: (resource: Resource) => void;
}

const typeIcons = {
  article: BookOpen,
  video: Video,
  guide: FileText,
  template: FileText,
};

export function ResourceCard({ resource, onView }: ResourceCardProps) {
  const Icon = typeIcons[resource.type];

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {resource.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="secondary" className="mb-2 capitalize">
            <Icon className="h-3 w-3 mr-1" />
            {resource.type}
          </Badge>
          {resource.readTime && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {resource.readTime}
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {resource.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            By {resource.author} · {resource.date}
          </div>
          <Button variant="ghost" size="sm" onClick={() => onView(resource)}>
            View
          </Button>
        </div>
      </div>
    </Card>
  );
}
