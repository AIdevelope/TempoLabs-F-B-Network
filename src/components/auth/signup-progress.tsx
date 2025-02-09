import { Progress } from "@/components/ui/progress";

interface SignupProgressProps {
  step: number;
  totalSteps: number;
}

export function SignupProgress({ step, totalSteps }: SignupProgressProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-muted-foreground text-center">
        Step {step} of {totalSteps}
      </p>
    </div>
  );
}
