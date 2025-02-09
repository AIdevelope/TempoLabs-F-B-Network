import { useState } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResults } from "@/components/search/SearchResults";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const DEMO_RESULTS = [
  {
    id: "1",
    type: "profile",
    title: "Gordon Smith",
    subtitle: "Executive Chef",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=gordon",
    description: "Experienced chef specializing in French cuisine",
    tags: ["French Cuisine", "Fine Dining", "Team Leadership"],
    location: "New York, NY",
  },
  {
    id: "2",
    type: "job",
    title: "Head Chef Position",
    company: "Le Bistro",
    location: "Miami, FL",
    salary: "$70,000 - $90,000",
    description: "Seeking an experienced head chef to lead our kitchen team",
    tags: ["Full-time", "Senior Level", "French Cuisine"],
  },
  {
    id: "3",
    type: "profile",
    title: "Sarah Chen",
    subtitle: "Restaurant Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    description: "Owner of award-winning Asian fusion restaurant",
    tags: ["Restaurant Management", "Asian Cuisine"],
    location: "San Francisco, CA",
  },
];

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState(DEMO_RESULTS);

  const handleSearch = (query: string) => {
    // In a real app, this would make an API call
    console.log("Searching for:", query);
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full bg-background flex overflow-hidden">
      <div className="flex-1 min-w-0 p-6">
        <SearchBar onSearch={handleSearch} />

        <div className="mt-6 grid grid-cols-4 gap-6">
          {/* Filters */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Filters</h3>
            <div className="space-y-4">
              {/* Add your filter components here */}
              <p className="text-sm text-muted-foreground">
                Filters coming soon...
              </p>
            </div>
          </Card>

          {/* Results */}
          <div className="col-span-3">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">
                Showing {searchResults.length} results
              </p>
              <select className="text-sm border rounded p-1">
                <option>Most Relevant</option>
                <option>Most Recent</option>
                <option>Most Popular</option>
              </select>
            </div>

            <ScrollArea className="h-[calc(100vh-12rem)]">
              <SearchResults
                results={searchResults}
                onResultClick={(result) => console.log("Clicked:", result)}
              />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
