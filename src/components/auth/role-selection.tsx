import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignupProgress } from "./signup-progress";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createProfile } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import type { Profile } from "@/types/database";
import { AccountTypeSelector, type AccountType } from "./account-type-selector";

interface RoleSelectionProps {
  onComplete: (role: string) => void;
  onBack?: () => void;
}

export function RoleSelection({ onComplete, onBack }: RoleSelectionProps) {
  const [selectedType, setSelectedType] = useState<AccountType>();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleRoleSelect = async (role: Profile["role"]) => {
    setLoading(true);
    try {
      // For now, we'll skip profile creation and just move to the next step
      toast({ title: "Role selected successfully!" });
      onComplete(role);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="relative border-b">
        <Button
          variant="ghost"
          className="absolute left-6 top-1/2 -translate-y-1/2"
          onClick={onBack}
        >
          Back
        </Button>
        <div className="text-center">
          <CardTitle>Select Your Role</CardTitle>
          <CardDescription>
            Choose how you'll use the F&B Network
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <AccountTypeSelector
          selectedType={selectedType}
          onSelect={setSelectedType}
        />
        <div className="flex justify-end mt-6">
          <Button
            onClick={() => {
              if (selectedType) {
                handleRoleSelect(
                  selectedType === "event-specialist"
                    ? "event_specialist"
                    : selectedType,
                );
              }
            }}
            disabled={loading || !selectedType}
          >
            {loading ? "Creating Profile..." : "Continue"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
