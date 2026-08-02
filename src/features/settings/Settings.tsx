import { User, Bell, Shield, Paintbrush, Globe, Database, Save } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";

export function Settings() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto font-body-md text-on-surface">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2 tracking-tight">{t("settings.title")}</h1>
          <p className="text-body-md text-on-surface-variant">{t("settings.subtitle")}</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-[0_4px_12px_rgba(45,91,255,0.2)] hover:shadow-[0_6px_16px_rgba(45,91,255,0.3)]">
          <Save className="w-5 h-5" />
          <span className="font-label-md font-bold tracking-wide">{t("settings.save")}</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-container text-on-primary-container font-semibold transition-colors text-right">
            <User className="w-5 h-5" />
            <span className="font-label-md">{t("settings.profile")}</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors text-right">
            <Bell className="w-5 h-5" />
            <span className="font-label-md">{t("settings.notifications")}</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors text-right">
            <Shield className="w-5 h-5" />
            <span className="font-label-md">{t("settings.security")}</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors text-right">
            <Paintbrush className="w-5 h-5" />
            <span className="font-label-md">{t("settings.appearance")}</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors text-right">
            <Globe className="w-5 h-5" />
            <span className="font-label-md">{t("settings.language")}</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors text-right">
            <Database className="w-5 h-5" />
            <span className="font-label-md">{t("settings.data")}</span>
          </button>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.04)] border border-outline-variant/20">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-surface-container pb-4">{t("settings.personal_info")}</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex flex-col items-center gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida/AP1WRLt0jyCBkvSGWbWF0RQ7o4KTPuR5Icrgadl09PbOAJodGO1N25eS-03vaiYxYKEZwZkSEc8I_mXvoq-EPF0vTT0-20PaNJkYgnMG45yVXKucSyC-6DdJEZAEjo4eATDtMmztQ-jzIcIiCfyNcjUix8zyGVDbcQ3JF_aUUtakbVfWrM3msNwxMpxt_s5_-qCng6U5lkJSFksij0OjLdfqHMWnYLP3vvZV8pYmAu-Ld3JV231NT5JqNF5UU2XG" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-4 border-surface-container-high"
              />
              <button className="text-primary font-label-sm hover:underline">{t("settings.change_picture")}</button>
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-sm text-on-surface-variant">{t("settings.first_name")}</label>
                  <input 
                    type="text" 
                    defaultValue="Alex"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-sm text-on-surface-variant">{t("settings.last_name")}</label>
                  <input 
                    type="text" 
                    defaultValue="Rivera"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-label-md text-sm text-on-surface-variant">{t("settings.email")}</label>
                <input 
                  type="email" 
                  defaultValue="alex.rivera@nexus-crm.com"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-sm text-on-surface-variant">{t("settings.job_title")}</label>
                <input 
                  type="text" 
                  defaultValue="Account Lead"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-right"
                />
              </div>
            </div>
          </div>

          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-surface-container pb-4">{t("settings.system_preferences")}</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3">
              <div>
                <h3 className="font-label-md text-on-surface">{t("settings.email_notifications")}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{t("settings.email_notifications_desc")}</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <h3 className="font-label-md text-on-surface">{t("settings.dark_mode")}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{t("settings.dark_mode_desc")}</p>
              </div>
              <div className="w-12 h-6 bg-surface-container-high rounded-full relative cursor-pointer">
                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
