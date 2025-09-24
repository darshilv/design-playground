import { Outlet, useLocation } from "react-router-dom";
import { GlobalHeader } from "./header";
import { GlobalSidebar } from "./sidebar";

export default function AppShell() {
  const location = useLocation();
  const shouldShowGlobalLayout = !location.pathname.includes("/editor/");

  if (shouldShowGlobalLayout) {
    return (
      <div className="min-h-screen bg-surface text-text">
        <div className="flex-1 flex flex-col">
          <GlobalHeader />
          <div className="flex h-screen">
            <GlobalSidebar />
            <main className="flex-1 overflow-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-text">
      <Outlet />
    </div>
  );
}
