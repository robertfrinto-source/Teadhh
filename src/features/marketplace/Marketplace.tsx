import { Search, Filter, Home, Key, MapPin } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";
import { useStore } from "../../store";

export function Marketplace() {
  const { t } = useI18n();
  const rentUnits = useStore(state => state.rentUnits);
  const resaleUnits = useStore(state => state.resaleUnits);

  const allUnits = [
    ...resaleUnits.map(u => ({ ...u, type: 'resale', label: t("marketplace.for_sale"), title: `${t("marketplace.unit")} ${u.project}`, size: u.area })),
    ...rentUnits.map(u => ({ ...u, type: 'rent', label: t("marketplace.for_rent"), title: `${t("marketplace.rent_unit")} ${u.project}`, size: u.area }))
  ];

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-headline-lg sm:text-display-lg text-[#0F2D52] tracking-tight">{t("nav.marketplace")}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t("marketplace.subtitle")}</p>
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
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b border-outline-variant/20 pb-4 overflow-x-auto whitespace-nowrap">
        <button className="px-4 py-2 bg-[#0F2D52] text-white rounded-full font-label-md text-sm shadow-sm transition-colors">
          الكل
        </button>
        <button className="px-4 py-2 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-[#0F2D52] border border-outline-variant/30 rounded-full font-label-md text-sm transition-colors flex items-center gap-2">
          <Home className="w-4 h-4" />
          إعادة بيع
        </button>
        <button className="px-4 py-2 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-[#0F2D52] border border-outline-variant/30 rounded-full font-label-md text-sm transition-colors flex items-center gap-2">
          <Key className="w-4 h-4" />
          للإيجار
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allUnits.map((unit, i) => (
          <div key={i} className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden border border-outline-variant/20 hover:border-[#C9A84C]/50 transition-colors group cursor-pointer flex flex-col">
            <div className="h-48 bg-surface-container-high relative flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant/30">
                {unit.type === 'resale' ? <Home className="w-12 h-12" /> : <Key className="w-12 h-12" />}
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-xs font-bold text-[#0F2D52]">
                {unit.label}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-lg text-[#0F2D52] mb-1 group-hover:text-[#C9A84C] transition-colors">{unit.title}</h3>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{unit.project || unit.type}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20">
                <div className="font-headline-md text-[#0F2D52] text-xl font-bold">{unit.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
