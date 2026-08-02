import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      <Sidebar />
      <div className="ps-72 transition-all duration-300">
        <TopBar />
        <main className="relative pt-20 bg-surface min-h-screen px-margin-desktop py-gutter">
          {children}
        </main>
      </div>
    </div>
  );
}
