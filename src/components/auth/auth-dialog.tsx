import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BasicInfoSection from "./BasicInfoSection";
import { SignupProgress } from "./signup-progress";
import { RoleSelection } from "./role-selection";
import EventSpecialistDetails from "./event-specialist-details";
import CertificationSection from "./certification-section";
import ServicesSection from "./services-section";
import ChefDetails from "./chef-details";
import RestaurantDetails from "./restaurant-details";
import SupplierDetails from "./supplier-details";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

export function AuthDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();

  const [step, setStep] = useState<
    | "credentials"
    | "role"
    | "basic-info"
    | "role-details"
    | "certifications"
    | "services"
    | "portfolio"
    | "verification"
    | "preferences"
  >("credentials");
  const [selectedRole, setSelectedRole] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        if (email && password) {
          await signIn(email, password);
          toast({ title: "Welcome back!" });
        } else {
          // Demo mode - skip auth
          await signIn("demo@example.com", "demo123");
          toast({ title: "Demo Mode" });
        }
        setIsOpen(false);
        window.location.href = "/dashboard";
      } else {
        const newUser = await signUp(
          email || "demo@example.com",
          password || "demo123",
        );
        if (newUser) {
          setStep("role");
        } else {
          toast({
            title: "Check your email",
            description: "Please check your email for the confirmation link.",
          });
          setIsOpen(false);
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const totalSteps = selectedRole === "event-specialist" ? 9 : 8;

  const getCurrentStep = () => {
    switch (step) {
      case "credentials":
        return 1;
      case "role":
        return 2;
      case "basic-info":
        return 3;
      case "role-details":
        return 4;
      case "certifications":
        return 5;
      case "services":
        return 6;
      case "portfolio":
        return 7;
      case "verification":
        return 8;
      case "preferences":
        return 9;
      default:
        return 1;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>

      {step === "credentials" ? (
        <DialogContent className="sm:max-w-[425px] overflow-y-auto max-h-[90vh]">
          {!isLogin && <SignupProgress step={1} totalSteps={totalSteps} />}
          <DialogHeader>
            <DialogTitle>{isLogin ? "Sign In" : "Create Account"}</DialogTitle>
            <DialogDescription>
              {isLogin
                ? "Welcome back! Please sign in to continue."
                : "Create an account to get started."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Button type="submit">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
              <Button
                type="button"
                variant="link"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm"
              >
                {isLogin
                  ? "Need an account? Sign up"
                  : "Already have an account? Sign in"}
              </Button>
            </div>
          </form>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-[600px]">
          <SignupProgress step={getCurrentStep()} totalSteps={totalSteps} />
          {step === "role" ? (
            <div className="space-y-6">
              <RoleSelection
                onComplete={(role) => {
                  setSelectedRole(role);
                  setStep("basic-info");
                }}
                onBack={() => setStep("credentials")}
              />
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setStep("basic-info")}>
                  Skip for now
                </Button>
              </div>
            </div>
          ) : step === "basic-info" ? (
            <div className="space-y-6">
              <BasicInfoSection
                onSave={(data) => {
                  setStep("role-details");
                }}
                onBack={() => setStep("role")}
              />
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setStep("role-details")}>
                  Skip for now
                </Button>
              </div>
            </div>
          ) : step === "role-details" ? (
            <div className="space-y-6">
              {selectedRole === "chef" ? (
                <ChefDetails
                  onSave={(data) => {
                    setStep("certifications");
                  }}
                  onBack={() => setStep("basic-info")}
                />
              ) : selectedRole === "restaurant" ? (
                <RestaurantDetails
                  onSave={(data) => {
                    setStep("certifications");
                  }}
                  onBack={() => setStep("basic-info")}
                />
              ) : selectedRole === "supplier" ? (
                <SupplierDetails
                  onSave={(data) => {
                    setStep("certifications");
                  }}
                  onBack={() => setStep("basic-info")}
                />
              ) : (
                <EventSpecialistDetails
                  onSave={(data) => {
                    setStep("certifications");
                  }}
                  onBack={() => setStep("basic-info")}
                />
              )}
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  onClick={() => setStep("certifications")}
                >
                  Skip for now
                </Button>
              </div>
            </div>
          ) : step === "certifications" ? (
            <div className="space-y-6">
              <CertificationSection
                onSave={(certifications) => {
                  setStep("services");
                }}
                onBack={() => setStep("role-details")}
              />
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setStep("services")}>
                  Skip for now
                </Button>
              </div>
            </div>
          ) : step === "services" ? (
            <div className="space-y-6">
              <ServicesSection
                onSave={(services) => {
                  setIsOpen(false);
                  toast({
                    title: "Welcome to F&B Network!",
                    description: "Your profile has been created successfully.",
                  });
                  window.location.href = "/dashboard";
                }}
                onBack={() => setStep("certifications")}
              />
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setIsOpen(false);
                    toast({
                      title: "Welcome to F&B Network!",
                      description:
                        "Your profile has been created successfully.",
                    });
                    window.location.href = "/dashboard";
                  }}
                >
                  Skip for now
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      )}
    </Dialog>
  );
}
