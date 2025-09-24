import {
  Menu,
  ChevronDown,
  Search,
  HelpCircle,
  User,
  MessageCircle,
  ClipboardCheck,
  Bell,
  Grid3X3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlobalHeader() {
  return (
    <header className="bg-[#7a005d] text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 p-2"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <span className="font-medium">Tools</span>
          <ChevronDown className="h-4 w-4" />
        </div>

        <Button
          variant="secondary"
          size="sm"
          className="bg-white/10 text-white hover:bg-white/20 border-0"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span>Labs</span>
          </div>
        </Button>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
          <input
            type="text"
            placeholder="Search or jump to..."
            className="w-full bg-white/10 border-0 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 p-2"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 p-2"
        >
          <User className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 p-2"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 p-2"
        >
          <ClipboardCheck className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 p-2 relative"
        >
          <Bell className="h-5 w-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 p-2"
        >
          <Grid3X3 className="h-5 w-5" />
        </Button>

        <Button
          variant="secondary"
          size="sm"
          className="bg-white/10 text-white hover:bg-white/20 border-0 px-3"
        >
          <div className="flex items-center gap-2">
            <span>Rippling</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </Button>
      </div>
    </header>
  );
}
