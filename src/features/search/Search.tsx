import { Search as SearchIcon, Filter, Clock, User, Building, Phone } from "lucide-react";

import { useI18n } from "../../contexts/I18nContext";
export function Search() {
  const { t } = useI18n();
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="font-display-lg text-headline-lg sm:text-display-lg text-[#0F2D52] tracking-tight mb-4">{t("search.title")}</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">{t("search.subtitle")}</p>
        
        <div className="relative group shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl">
          <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-on-surface-variant group-focus-within:text-[#0F2D52] transition-colors" />
          <input 
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-4 pr-14 pl-4 text-lg focus:ring-2 focus:ring-[#0F2D52]/20 focus:border-[#0F2D52] transition-all outline-none text-on-surface placeholder:text-on-surface-variant/60" 
            placeholder={t("search.placeholder")} 
            type="text" 
            autoFocus
          />
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0F2D52] hover:bg-[#0F2D52]/90 text-white font-label-md px-6 py-2.5 rounded-xl transition-all">
            بحث
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden border border-outline-variant/20 p-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container">
          <h2 className="font-headline-md text-lg text-[#0F2D52]">{t("search.recent")}</h2>
          <button className="text-on-surface-variant hover:text-[#0F2D52] transition-colors flex items-center gap-2 text-sm font-label-md">
            <Filter className="w-4 h-4" />
            تصفية
          </button>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E2E7FF] flex items-center justify-center text-[#0F2D52] flex-shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-label-md text-base text-[#0F2D52] group-hover:text-[#C9A84C] transition-colors">عبدالله محمد</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-on-surface-variant">
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> 050 123 4567</span>
                    <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5" /> شركة آفاق</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:w-auto w-full justify-between sm:justify-end">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-[11px] font-bold rounded-full uppercase tracking-wider">{t("search.current_client")}</span>
                <span className="flex items-center gap-1 text-xs text-on-surface-variant">
                  <Clock className="w-3.5 h-3.5" /> آخر نشاط منذ يومين
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
