import { useState } from "react";
import { Plus, Search, Filter, Key, CheckCircle2, UserCircle, X } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";
import { useStore, ResaleUnit } from "../../store";

export function Rent() {
  const { t } = useI18n();
  const rentUnits = useStore(state => state.rentUnits);
  const addRentUnit = useStore(state => state.addRentUnit);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newUnit, setNewUnit] = useState<Partial<ResaleUnit>>({ 
    type: 'شقة', project: '', price: '', rooms: 1, area: '', status: 'متاح', owner: '' 
  });

  const handleAdd = () => {
    addRentUnit({
      id: Math.random().toString(),
      type: newUnit.type || 'شقة',
      project: newUnit.project || 'وحدة جديدة',
      price: newUnit.price || '',
      rooms: Number(newUnit.rooms) || 1,
      area: newUnit.area || '',
      status: newUnit.status || 'متاح',
      owner: newUnit.owner || ''
    });
    setIsAddModalOpen(false);
    setNewUnit({ type: 'شقة', project: '', price: '', rooms: 1, area: '', status: 'متاح', owner: '' });
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto animate-fade-in relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-headline-lg sm:text-display-lg text-[#0F2D52] tracking-tight">{t("nav.rent")}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t("rent.subtitle")}</p>
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
            إضافة وحدة
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden border border-outline-variant/20">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/30">
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("rent.unit_project")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("rent.price")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("rent.furnish")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">{t("rent.owner")}</th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {rentUnits.map((unit) => (
                <tr key={unit.id} className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-[#0F2D52]">
                        <Key className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-label-md text-body-md font-semibold text-[#0F2D52] group-hover:text-[#C9A84C] transition-colors">{unit.type} - {unit.rooms}غرف نوم</div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">{unit.project}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-headline-md text-sm text-[#0F2D52]">{unit.price}</td>
                  <td className="py-4 px-6 font-body-md text-sm text-on-surface-variant">{unit.area}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <UserCircle className="w-5 h-5 text-outline" />
                      <span className="font-body-md text-sm text-on-surface">{unit.owner}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E2E7FF] text-[#0F2D52] font-label-sm text-[11px] font-bold tracking-wide">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {unit.status}
                    </span>
                  </td>
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
              <h2 className="text-xl font-headline-md text-on-surface">{t("rent.add_unit")}</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("rent.type")}</label>
                <input 
                  type="text" 
                  value={newUnit.type} 
                  onChange={e => setNewUnit({...newUnit, type: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                  placeholder={t("rent.placeholder_type")}
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("rent.project")}</label>
                <input 
                  type="text" 
                  value={newUnit.project} 
                  onChange={e => setNewUnit({...newUnit, project: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-label-md mb-1 text-on-surface">{t("rent.rooms")}</label>
                  <input 
                    type="number" 
                    value={newUnit.rooms} 
                    onChange={e => setNewUnit({...newUnit, rooms: Number(e.target.value)})}
                    className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-label-md mb-1 text-on-surface">{t("rent.furnish")}</label>
                  <input 
                    type="text" 
                    value={newUnit.area} 
                    onChange={e => setNewUnit({...newUnit, area: e.target.value})}
                    className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                    placeholder={t("rent.furnish")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("rent.price")}</label>
                <input 
                  type="text" 
                  value={newUnit.price} 
                  onChange={e => setNewUnit({...newUnit, price: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                  placeholder="$0/شهر"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("rent.owner")}</label>
                <input 
                  type="text" 
                  value={newUnit.owner} 
                  onChange={e => setNewUnit({...newUnit, owner: e.target.value})}
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
