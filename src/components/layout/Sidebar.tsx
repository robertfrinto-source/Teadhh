import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  BarChart2, 
  Settings,
  Building2,
  Home,
  Key,
  Search,
  Users2,
  KanbanSquare
} from "lucide-react";
import { cn } from "../../lib/utils";
import { useI18n } from "../../contexts/I18nContext";

export function Sidebar() {
  const [location] = useLocation();
  const { t } = useI18n();

  const NAV_GROUPS = [
    {
      title: t("nav.overview"),
      items: [
        { path: "/home", label: t("nav.home"), icon: LayoutDashboard },
      ]
    },
    {
      title: t("nav.pipeline"),
      items: [
        { path: "/leads", label: t("nav.leads"), icon: Users },
        { path: "/leads/kanban", label: t("nav.kanban"), icon: KanbanSquare },
      ]
    },
    {
      title: t("nav.inventory"),
      items: [
        { path: "/projects", label: t("nav.projects"), icon: Building2 },
        { path: "/resale", label: t("nav.resale"), icon: Home },
        { path: "/rent", label: t("nav.rent"), icon: Key },
        { path: "/marketplace", label: t("nav.marketplace"), icon: Search },
      ]
    },
    {
      title: t("nav.clients_group"),
      items: [
        { path: "/clients", label: t("nav.clients"), icon: Users2 },
      ]
    },
    {
      title: t("nav.people"),
      items: [
        { path: "/employees", label: t("nav.employees"), icon: Users },
      ]
    },
    {
      title: t("nav.tools"),
      items: [
        { path: "/search", label: t("nav.search"), icon: Search },
        { path: "/planner", label: t("nav.planner"), icon: CheckSquare },
        { path: "/reports", label: t("nav.reports"), icon: BarChart2 },
        { path: "/permissions", label: t("nav.permissions"), icon: Settings },
      ]
    }
  ];

  return (
    <aside className="fixed start-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col overflow-y-auto border-e border-outline-variant/20 transition-transform duration-300">
      <div className="h-20 px-base flex items-center gap-3 mb-4 flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-[#C9A84C] flex items-center justify-center text-white">
          <Building2 className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-headline-md text-headline-md text-[#0F2D52] tracking-tight font-bold">
            {t("app.title")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            {t("app.subtitle")}
          </span>
        </div>
      </div>
      <nav className="flex-1 px-4 pb-8 space-y-6">
        {NAV_GROUPS.map((group) => (
          <div key={group.title}>
            <div className="px-4 mb-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant/70">
              {group.title}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = location === item.path || (location === "/" && item.path === "/home");
                return (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    className={cn(
                      "flex items-center px-4 py-2.5 rounded-xl transition-all group",
                      isActive
                        ? "bg-[#0F2D52] text-white font-semibold shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    )}
                  >
                    <item.icon className="me-3 w-5 h-5" />
                    <span className="font-label-md text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
