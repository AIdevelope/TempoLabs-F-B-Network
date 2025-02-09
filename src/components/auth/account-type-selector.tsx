import { Card } from "@/components/ui/card";
import { ChefHat, Store, Truck, Calendar } from "lucide-react";

export type AccountType =
  | "chef"
  | "restaurant"
  | "supplier"
  | "event-specialist";

interface AccountTypeSelectorProps {
  selectedType?: AccountType;
  onSelect?: (type: AccountType) => void;
}

export function AccountTypeSelector({
  selectedType,
  onSelect = () => {},
}: AccountTypeSelectorProps) {
  const accountTypes = [
    {
      type: "chef" as AccountType,
      icon: ChefHat,
      title: "Chef",
      description: "For professional chefs and culinary artists",
    },
    {
      type: "restaurant" as AccountType,
      icon: Store,
      title: "Restaurant",
      description: "For restaurants and food establishments",
    },
    {
      type: "supplier" as AccountType,
      icon: Truck,
      title: "Supplier",
      description: "For food and equipment suppliers",
    },
    {
      type: "event-specialist" as AccountType,
      icon: Calendar,
      title: "Event Specialist",
      description: "For catering and event professionals",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Choose your account type
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accountTypes.map(({ type, icon: Icon, title, description }) => (
          <Card
            key={type}
            className={`p-6 cursor-pointer transition-all hover:shadow-md ${
              selectedType === type
                ? "border-2 border-primary"
                : "border border-gray-200"
            }`}
            onClick={() => onSelect(type)}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-3 rounded-lg ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
