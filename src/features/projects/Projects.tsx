import { useState } from "react";
import { Building2, Plus, Search, MapPin, Grid, X } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";
import { useStore, Project } from "../../store";

export function Projects() {
  const { t } = useI18n();
  const projects = useStore(state => state.projects);
  const addProject = useStore(state => state.addProject);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({ 
    name: '', location: '', type: 'سكني', price: '', units: 0, status: 'نشط' 
  });

  const handleAdd = () => {
    addProject({
      id: Math.random().toString(),
      name: newProject.name || 'مشروع جديد',
      location: newProject.location || '',
      type: newProject.type || 'سكني',
      price: newProject.price || '',
      units: Number(newProject.units) || 0,
      status: newProject.status || 'نشط',
    });
    setIsAddModalOpen(false);
    setNewProject({ name: '', location: '', type: 'سكني', price: '', units: 0, status: 'نشط' });
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto animate-fade-in relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-headline-lg sm:text-display-lg text-[#0F2D52] tracking-tight">{t("nav.projects")}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t("dashboard.subtitle")}</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64 group">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-[#0F2D52] transition-colors" />
            <input 
              className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-full py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-[#0F2D52]/20 focus:border-[#0F2D52] transition-all shadow-sm outline-none text-on-surface placeholder:text-on-surface-variant" 
              placeholder={t("topbar.search")}
              type="text" 
            />
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#0F2D52] hover:bg-[#0F2D52]/90 text-white font-label-md text-label-md px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 whitespace-nowrap">
            <Plus className="w-5 h-5" />
            إضافة مشروع
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden border border-outline-variant/20 hover:border-[#C9A84C]/50 transition-colors group cursor-pointer">
            <div className="h-40 bg-surface-container-high relative">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant/30">
                <Building2 className="w-12 h-12" />
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-xs font-bold text-[#0F2D52]">
                {project.status}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-headline-md text-lg text-[#0F2D52] mb-2 group-hover:text-[#C9A84C] transition-colors">{project.name}</h3>
              
              <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <Grid className="w-4 h-4 text-on-surface-variant" />
                  <span className="font-label-sm text-on-surface-variant">{project.units} وحدة</span>
                </div>
                <div className="text-left">
                  <div className="font-label-sm text-on-surface-variant text-[10px] uppercase">متوسط السعر</div>
                  <div className="font-headline-md text-sm text-[#0F2D52]">{project.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 w-full max-w-md shadow-lg animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-headline-md text-on-surface">{t("projects.add_project")}</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">اسم المشروع</label>
                <input 
                  type="text" 
                  value={newProject.name} 
                  onChange={e => setNewProject({...newProject, name: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("projects.location")}</label>
                <input 
                  type="text" 
                  value={newProject.location} 
                  onChange={e => setNewProject({...newProject, location: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">متوسط السعر</label>
                <input 
                  type="text" 
                  value={newProject.price} 
                  onChange={e => setNewProject({...newProject, price: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                  placeholder="$0"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("projects.units")}</label>
                <input 
                  type="number" 
                  value={newProject.units} 
                  onChange={e => setNewProject({...newProject, units: Number(e.target.value)})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 rounded-full font-label-md text-on-surface hover:bg-surface-container-high transition-colors">
                إلغاء
              </button>
              <button onClick={handleAdd} className="px-5 py-2 rounded-full bg-[#0F2D52] text-white font-label-md shadow-sm hover:opacity-90 transition-opacity">
                إضافة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
