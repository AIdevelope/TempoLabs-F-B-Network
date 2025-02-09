import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Phone, Video, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  isMe: boolean;
}

interface Conversation {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
}

const DEMO_CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    user: {
      id: "1",
      name: "Gordon Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gordon",
      role: "Executive Chef",
    },
    lastMessage: "Looking forward to discussing the menu.",
    timestamp: "2 min ago",
    unread: 2,
  },
  {
    id: "2",
    user: {
      id: "2",
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      role: "Restaurant Owner",
    },
    lastMessage: "The position is still available if you're interested.",
    timestamp: "1 hour ago",
    unread: 0,
  },
];

const DEMO_MESSAGES: Message[] = [
  {
    id: "1",
    content:
      "Hi, I saw your profile and I'm interested in discussing potential opportunities.",
    timestamp: "10:30 AM",
    sender: DEMO_CONVERSATIONS[0].user,
    isMe: false,
  },
  {
    id: "2",
    content: "Hello! Thanks for reaching out. I'd be happy to discuss.",
    timestamp: "10:32 AM",
    sender: {
      id: "me",
      name: "Me",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=me",
      role: "Chef",
    },
    isMe: true,
  },
];

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full bg-background flex overflow-hidden">
      {/* Conversations Sidebar */}
      <div className="w-[350px] border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Messages</h2>
            <Button size="icon" variant="ghost">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search messages..." className="pl-10" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          {DEMO_CONVERSATIONS.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 cursor-pointer hover:bg-muted/50 ${selectedConversation?.id === conversation.id ? "bg-muted" : ""}`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage src={conversation.user.avatar} />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold truncate">
                      {conversation.user.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    {conversation.user.role}
                  </Badge>
                  {conversation.unread > 0 && (
                    <Badge className="mt-1 ml-2">{conversation.unread}</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      {selectedConversation ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={selectedConversation.user.avatar} />
              </Avatar>
              <div>
                <h3 className="font-semibold">
                  {selectedConversation.user.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedConversation.user.role}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <Phone className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Video className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {DEMO_MESSAGES.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[70%] ${message.isMe ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.sender.avatar} />
                    </Avatar>
                    <div>
                      <div
                        className={`rounded-lg p-3 ${message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                      >
                        {message.content}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          Select a conversation to start messaging
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
