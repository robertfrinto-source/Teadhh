
import { ArrowLeft, Building2, MapPin, DollarSign, Home, CheckCircle } from "lucide-react";
import { useRoute } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function ProjectDetail() {
  const [, params] = useRoute<{id: string}>("/projects/:id");
  const { t } = useI18n();
  const projects = useStore(state => state.projects);
  const pId = params ? params.id : null;
  const project = projects.find(x => x.id === pId);

  if (!project) return <div className="p-8 text-center text-on-surface-variant">Project not found</div>;

  return (
    <div className="flex flex-col w-full h-full font-body-md text-on-surface p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => window.history.back()} className="p-2 hover:bg-surface-container-high rounded-full transition-colors"><ArrowLeft className="w-5 h-5 rtl:rotate-180" /></button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{project.name}</h1>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">{project.status}</span>
      </div>
      <div className="bg-surface-container-lowest rounded-[32px] p-6 md:p-10 shadow-sm border border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><Building2 className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">{t("contacts.name")}</p><p className="font-medium">{project.name}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"><MapPin className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">{t("projects.location")}</p><p className="font-medium">{project.location}</p></div></div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><DollarSign className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">{t("projects.price")}</p><p className="font-medium">{project.price}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Home className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">{t("projects.units")}</p><p className="font-medium">{project.units}</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
