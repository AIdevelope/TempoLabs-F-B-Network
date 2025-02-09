import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, MessageCircle, Share2, Award, UserPlus } from "lucide-react";

interface NetworkPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

interface NetworkFeedProps {
  posts?: NetworkPost[];
}

const defaultPosts: NetworkPost[] = [
  {
    id: "1",
    author: {
      name: "Chef Gordon Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gordon",
      role: "Executive Chef",
    },
    content:
      "Just completed a successful fusion cuisine workshop! Looking forward to implementing new techniques in my kitchen.",
    timestamp: "2 hours ago",
    likes: 45,
    comments: 12,
    shares: 8,
  },
  {
    id: "2",
    author: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      role: "Restaurant Owner",
    },
    content:
      "Seeking talented sous chef for our downtown location. Must have 3+ years experience in Asian cuisine.",
    timestamp: "4 hours ago",
    likes: 32,
    comments: 15,
    shares: 20,
  },
];

const NetworkFeed = ({ posts = defaultPosts }: NetworkFeedProps) => {
  return (
    <div className="w-full h-full bg-background p-4 space-y-6 overflow-y-auto">
      {/* Network Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">245</h3>
          <p className="text-muted-foreground">Connections</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">18</h3>
          <p className="text-muted-foreground">Endorsements</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">12</h3>
          <p className="text-muted-foreground">Recommendations</p>
        </Card>
      </div>

      {/* Network Actions */}
      <Card className="p-4">
        <div className="flex space-x-4">
          <Button variant="outline" className="flex-1">
            <UserPlus className="w-4 h-4 mr-2" />
            Connect
          </Button>
          <Button variant="outline" className="flex-1">
            <Award className="w-4 h-4 mr-2" />
            Endorse
          </Button>
        </div>
      </Card>

      {/* Feed Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar className="w-12 h-12">
                <img src={post.author.avatar} alt={post.author.name} />
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold">{post.author.name}</h4>
                  <Badge variant="secondary">{post.author.role}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {post.timestamp}
                </p>
                <p className="mt-2">{post.content}</p>

                <Separator className="my-4" />

                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    {post.shares}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NetworkFeed;
