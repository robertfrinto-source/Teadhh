import { useState } from "react";
import { Search, UserPlus, MoreVertical, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";
import { useStore, Lead } from "../../store";

export function Contacts() {
  const { t } = useI18n();
  const leads = useStore(state => state.leads);
  const addLead = useStore(state => state.addLead);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLead, setNewLead] = useState<Partial<Lead>>({ name: '', company: '', email: '', phone: '', status: 'جديد', project: '', date: new Date().toISOString().split('T')[0] });

  const handleAdd = () => {
    addLead({
      id: Math.random().toString(),
      name: newLead.name || 'بدون اسم',
      phone: newLead.phone || '',
      email: newLead.email || '',
      project: newLead.project || '',
      status: newLead.status || 'جديد',
      date: newLead.date || new Date().toISOString().split('T')[0],
      company: newLead.company,
      columnId: 'discovery'
    });
    setIsAddModalOpen(false);
    setNewLead({ name: '', company: '', email: '', phone: '', status: 'جديد', project: '', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="flex flex-col w-full max-w-container-max mx-auto animate-fade-in relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-headline-lg sm:text-display-lg text-on-surface tracking-tight">{t("nav.leads")}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t("dashboard.subtitle")}</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64 group">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input 
              className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-full py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm outline-none text-on-surface placeholder:text-on-surface-variant" 
              placeholder={t("topbar.search")}
              type="text" 
            />
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 whitespace-nowrap">
            <UserPlus className="w-5 h-5" />
            {t("dashboard.add_lead")}
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden flex flex-col relative before:absolute before:inset-0 before:pointer-events-none before:border before:border-outline-variant/20 before:rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/30">
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("contacts.name")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("contacts.company")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("contacts.email")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("contacts.status")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("contacts.last_contact")}</th>
                <th className="py-4 px-6 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-label-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">{lead.name}</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">{lead.company}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 font-body-md text-body-md text-on-surface">{lead.company}</td>
                <td className="py-4 px-6 font-body-md text-body-md text-on-surface-variant font-mono text-sm">{lead.email}</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {lead.status}
                  </span>
                </td>
                <td className="py-4 px-6 font-body-md text-sm text-on-surface-variant">{lead.date}</td>
                <td className="py-4 px-6 text-left">
                  <button className="p-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-4 px-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-lowest/50">
          <span className="font-label-sm text-on-surface-variant">عرض 1 إلى {leads.length} من {leads.length} جهة اتصال</span>
          <div className="flex items-center gap-1 dir-ltr" dir="ltr">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-full flex items-center justify-center font-label-md text-sm bg-primary text-on-primary shadow-sm">1</button>
            </div>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 w-full max-w-md shadow-lg animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-headline-md text-on-surface">{t("dashboard.add_lead")}</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("contacts.name")}</label>
                <input 
                  type="text" 
                  value={newLead.name} 
                  onChange={e => setNewLead({...newLead, name: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("contacts.company")}</label>
                <input 
                  type="text" 
                  value={newLead.company} 
                  onChange={e => setNewLead({...newLead, company: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("contacts.email")}</label>
                <input 
                  type="email" 
                  value={newLead.email} 
                  onChange={e => setNewLead({...newLead, email: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 rounded-full font-label-md text-on-surface hover:bg-surface-container-high transition-colors">
                إلغاء
              </button>
              <button onClick={handleAdd} className="px-5 py-2 rounded-full bg-primary text-on-primary font-label-md shadow-sm hover:opacity-90 transition-opacity">
                إضافة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
