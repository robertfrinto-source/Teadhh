
import { ArrowLeft, User, Mail, DollarSign, Building, Calendar } from "lucide-react";
import { useRoute } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function ClientDetail() {
  const [, params] = useRoute<{id: string}>("/clients/:id");
  const { t } = useI18n();
  const clients = useStore(state => state.clients);
  const pId = params ? params.id : null;
  const client = clients.find(x => x.id === pId);

  if (!client) return <div className="p-8 text-center text-on-surface-variant">Client not found</div>;

  return (
    <div className="flex flex-col w-full h-full font-body-md text-on-surface p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => window.history.back()} className="p-2 hover:bg-surface-container-high rounded-full transition-colors"><ArrowLeft className="w-5 h-5 rtl:rotate-180" /></button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{client.name}</h1>
      </div>
      <div className="bg-surface-container-lowest rounded-[32px] p-6 md:p-10 shadow-sm border border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><User className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">الاسم / Name</p><p className="font-medium">{client.name}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><Mail className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">البريد / Email</p><p className="font-medium">{client.email || '-'}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"><DollarSign className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">القيمة / Value</p><p className="font-medium">{client.value}</p></div></div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Building className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">المشروع / Project</p><p className="font-medium">{client.project}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Calendar className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">التاريخ / Date</p><p className="font-medium">{client.date}</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
