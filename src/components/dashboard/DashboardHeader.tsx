import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, MessageCircle, Search, Settings, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  user?: {
    name: string;
    avatar: string;
    notifications: number;
  };
  onMenuClick?: () => void;
  onSettingsClick?: () => void;
  onNotificationsClick?: () => void;
  onMessagesClick?: () => void;
}

const DashboardHeader = ({
  user = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    notifications: 3,
  },
  onMenuClick = () => {},
  onSettingsClick = () => {},
  onNotificationsClick = () => {},
  onMessagesClick = () => {},
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-[72px] bg-background border-b px-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative w-[300px] hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={onNotificationsClick}
        >
          <Bell className="h-5 w-5" />
          {user.notifications > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
              {user.notifications}
            </span>
          )}
        </Button>

        <Button variant="ghost" size="icon" onClick={onMessagesClick}>
          <MessageCircle className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" onClick={onSettingsClick}>
          <Settings className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <img src={user.avatar} alt={user.name} />
              </Avatar>
              <span className="hidden md:inline-block">{user.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
