import { useState } from "react";
import { Plus, Search, Filter, Building, UserCircle, X } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";
import { useStore, Client } from "../../store";

export function Clients() {
  const { t } = useI18n();
  const clients = useStore(state => state.clients);
  const addClient = useStore(state => state.addClient);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newClient, setNewClient] = useState<Partial<Client>>({ 
    name: '', email: '', value: '', project: '', date: '' 
  });

  const handleAdd = () => {
    addClient({
      id: Math.random().toString(),
      name: newClient.name || 'بدون اسم',
      email: newClient.email || '',
      value: newClient.value || '$0',
      project: newClient.project || '',
      date: newClient.date || new Date().toISOString().split('T')[0]
    });
    setIsAddModalOpen(false);
    setNewClient({ name: '', email: '', value: '', project: '', date: '' });
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto animate-fade-in relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-headline-lg sm:text-display-lg text-[#0F2D52] tracking-tight">{t("nav.clients")} (Deals Closed)</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t("clients.subtitle")}</p>
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
          <button className="bg-surface-container-highest text-[#0F2D52] font-label-md px-4 py-2.5 rounded-full hover:bg-[#E2E7FF] transition-colors flex items-center gap-2">
            <Filter className="w-5 h-5" />
            تصفية
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#0F2D52] hover:bg-[#0F2D52]/90 text-white font-label-md text-label-md px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 whitespace-nowrap">
            <Plus className="w-5 h-5" />
            إضافة عميل
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden border border-outline-variant/20">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/30">
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("clients.table_name")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("clients.deal_value")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("clients.project")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("clients.contract_date")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E2E7FF] flex items-center justify-center text-[#0F2D52] font-bold">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-label-md text-body-md font-semibold text-[#0F2D52] group-hover:text-[#C9A84C] transition-colors">{client.name}</div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">{client.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-headline-md text-sm text-[#0F2D52]">{client.value}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-outline" />
                      <span className="font-body-md text-sm text-on-surface">{client.project}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-body-md text-sm text-on-surface-variant">{client.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 w-full max-w-md shadow-lg animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-headline-md text-on-surface">{t("clients.add_client_closed")}</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("clients.name")}</label>
                <input 
                  type="text" 
                  value={newClient.name} 
                  onChange={e => setNewClient({...newClient, name: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("clients.email")}</label>
                <input 
                  type="email" 
                  value={newClient.email} 
                  onChange={e => setNewClient({...newClient, email: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("clients.project")}</label>
                <input 
                  type="text" 
                  value={newClient.project} 
                  onChange={e => setNewClient({...newClient, project: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("clients.deal_value")}</label>
                <input 
                  type="text" 
                  value={newClient.value} 
                  onChange={e => setNewClient({...newClient, value: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("clients.contract_date")}</label>
                <input 
                  type="date" 
                  value={newClient.date} 
                  onChange={e => setNewClient({...newClient, date: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface text-right"
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
