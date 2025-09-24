import {
  Grid3X3,
  Heart,
  MessageCircle,
  ClipboardCheck,
  Bell,
  ChefHat,
  BarChart3,
  Zap,
  Settings,
  Plus,
  User,
  Pin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlobalSidebarProps {
  className?: string;
}

export function GlobalSidebar({ className }: GlobalSidebarProps) {
  // Mock navigation state - in a real app this would come from a store/context
  const selectedItems = ["settings"];

  const navigationItems = [
    { id: "dashboard", icon: Grid3X3, label: "Dashboard" },
    { id: "profile", icon: Heart, label: "Profile" },
    { id: "messages", icon: MessageCircle, label: "Messages" },
    { id: "tasks", icon: ClipboardCheck, label: "Tasks" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "recipes", icon: ChefHat, label: "Recipes" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "quick-actions", icon: Zap, label: "Quick Actions" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "add-app", icon: Plus, label: "Add App" },
    { id: "user", icon: User, label: "User" },
    { id: "pinned", icon: Pin, label: "Pinned" },
  ];

  return (
    <aside
      className={cn(
        "w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-2",
        className
      )}
    >
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isSelected = selectedItems.includes(item.id);

        return (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className={cn(
              "w-12 h-12 p-0 rounded-xl transition-all duration-200",
              isSelected
                ? item.id === "dashboard"
                  ? "bg-gray-100 text-gray-700"
                  : "bg-blue-50 text-blue-600 border border-blue-200"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            )}
            title={item.label}
          >
            <Icon className="h-5 w-5" />
          </Button>
        );
      })}
    </aside>
  );
}
