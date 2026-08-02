import { Search, Bell, Globe } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";

export function TopBar() {
  const { t, language, setLanguage } = useI18n();

  return (
    <header className="fixed top-0 start-72 end-0 h-20 bg-surface/80 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-margin-desktop flex items-center justify-between transition-all duration-300">
      <div className="flex-1 max-w-md">
        <div className="relative flex items-center">
          <Search className="absolute start-3 w-5 h-5 text-on-surface-variant" />
          <input
            className="w-full bg-surface-container-highest/50 border-none rounded-full py-2 ps-10 pe-4 text-sm focus:ring-2 focus:ring-[#0F2D52]/20 transition-all outline-none"
            placeholder={t("topbar.search")}
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          className="flex items-center gap-2 p-2 rounded-full hover:bg-surface-container-high transition-colors font-label-md text-sm"
        >
          <Globe className="w-5 h-5 text-on-surface-variant" />
          <span>{language === 'ar' ? 'English' : 'العربية'}</span>
        </button>
        <button className="relative p-2 rounded-full hover:bg-surface-container-high transition-colors">
          <Bell className="w-6 h-6 text-on-surface-variant" />
          <span className="absolute top-2 end-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 ps-4 border-s border-outline-variant/30">
          <div className="text-end hidden sm:block">
            <div className="text-label-md font-bold text-on-surface">Alex Rivera</div>
            <div className="text-label-sm text-on-surface-variant uppercase tracking-wider">
              {t("topbar.role")}
            </div>
          </div>
          <img
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-surface-container shadow-sm object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLt0jyCBkvSGWbWF0RQ7o4KTPuR5Icrgadl09PbOAJodGO1N25eS-03vaiYxYKEZwZkSEc8I_mXvoq-EPF0vTT0-20PaNJkYgnMG45yVXKucSyC-6DdJEZAEjo4eATDtMmztQ-jzIcIiCfyNcjUix8zyGVDbcQ3JF_aUUtakbVfWrM3msNwxMpxt_s5_-qCng6U5lkJSFksij0OjLdfqHMWnYLP3vvZV8pYmAu-Ld3JV231NT5JqNF5UU2XG"
          />
        </div>
      </div>
    </header>
  );
}
