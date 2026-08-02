import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useI18n } from "../../contexts/I18nContext";

export function DetailPlaceholder({ titleKey }: { titleKey: string }) {
  const [, setLocation] = useLocation();
  const { t } = useI18n();

  return (
    <div className="flex flex-col w-full h-full font-body-md text-on-surface p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => window.history.back()}
          className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
        </button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          {t(titleKey)}
        </h1>
      </div>
      <div className="flex-1 bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)] border border-outline-variant/20 flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="font-bold text-2xl">⏳</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            {t("common.under_development")}
          </h2>
          <p className="text-on-surface-variant max-w-sm mx-auto">
            {t("common.under_development_desc")}
          </p>
        </div>
      </div>
    </div>
  );
}
