
import { ArrowLeft, User, Phone, Mail, Building, Calendar, FileText, CheckCircle } from "lucide-react";
import { useRoute, useLocation } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function ContactDetail() {
  const [, params] = useRoute<{id: string}>("/leads/:id");
  const { t } = useI18n();
  const leads = useStore(state => state.leads);
  const pId = params ? params.id : null;
  const lead = leads.find(x => x.id === pId);

  if (!lead) return <div className="p-8 text-center text-on-surface-variant">Lead not found</div>;

  return (
    <div className="flex flex-col w-full h-full font-body-md text-on-surface p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => window.history.back()}
          className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
        </button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          {lead.name}
        </h1>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
          {lead.status}
        </span>
      </div>
      <div className="bg-surface-container-lowest rounded-[32px] p-6 md:p-10 shadow-sm border border-outline-variant/20">
        <h2 className="font-headline-md mb-6 border-b border-surface-container pb-4">{t("contacts.details")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><User className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">{t("contacts.name")}</p><p className="font-medium">{lead.name}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"><Phone className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">{t("contacts.phone")}</p><p className="font-medium">{lead.phone || '-'}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><Mail className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">{t("contacts.email")}</p><p className="font-medium">{lead.email || '-'}</p></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Building className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">{t("contacts.project")}</p><p className="font-medium">{lead.project || '-'}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><FileText className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">{t("contacts.company")}</p><p className="font-medium">{lead.company || '-'}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Calendar className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">{t("contacts.date")}</p><p className="font-medium">{lead.date || '-'}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
