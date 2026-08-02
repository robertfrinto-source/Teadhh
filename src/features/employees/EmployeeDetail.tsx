
import { ArrowLeft, User, Mail, Briefcase, Phone, CheckCircle, Building } from "lucide-react";
import { useRoute } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function EmployeeDetail() {
  const [, params] = useRoute<{id: string}>("/employees/:id");
  const { t } = useI18n();
  const employees = useStore(state => state.employees);
  const pId = params ? params.id : null;
  const employee = employees.find(x => x.id === pId);

  if (!employee) return <div className="p-8 text-center text-on-surface-variant">Employee not found</div>;

  return (
    <div className="flex flex-col w-full h-full font-body-md text-on-surface p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => window.history.back()} className="p-2 hover:bg-surface-container-high rounded-full transition-colors"><ArrowLeft className="w-5 h-5 rtl:rotate-180" /></button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{employee.name}</h1>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">{employee.status}</span>
      </div>
      <div className="bg-surface-container-lowest rounded-[32px] p-6 md:p-10 shadow-sm border border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><User className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">الاسم / Name</p><p className="font-medium">{employee.name}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><Mail className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">البريد / Email</p><p className="font-medium">{employee.email || '-'}</p></div></div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"><Briefcase className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">الدور / Role</p><p className="font-medium">{employee.role}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Building className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">القسم / Department</p><p className="font-medium">{employee.department || '-'}</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
