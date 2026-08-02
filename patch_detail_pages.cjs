const fs = require('fs');

const contactDetail = `
import { ArrowLeft, User, Phone, Mail, Building, Calendar, FileText, CheckCircle } from "lucide-react";
import { useRoute, useLocation } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function ContactDetail() {
  const [, params] = useRoute("/leads/:id");
  const { t } = useI18n();
  const leads = useStore(state => state.leads);
  const lead = leads.find(l => l.id === params?.id);

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
        <h2 className="font-headline-md mb-6 border-b border-surface-container pb-4">تفاصيل العميل / Lead Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><User className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">الاسم / Name</p><p className="font-medium">{lead.name}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"><Phone className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">الهاتف / Phone</p><p className="font-medium">{lead.phone || '-'}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><Mail className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">البريد / Email</p><p className="font-medium">{lead.email || '-'}</p></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Building className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">المشروع / Project</p><p className="font-medium">{lead.project || '-'}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><FileText className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">الشركة / Company</p><p className="font-medium">{lead.company || '-'}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Calendar className="w-5 h-5"/></div>
              <div><p className="text-sm text-on-surface-variant">التاريخ / Date</p><p className="font-medium">{lead.date || '-'}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/features/contacts/ContactDetail.tsx', contactDetail);

const projectDetail = `
import { ArrowLeft, Building2, MapPin, DollarSign, Home, CheckCircle } from "lucide-react";
import { useRoute } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const { t } = useI18n();
  const projects = useStore(state => state.projects);
  const project = projects.find(p => p.id === params?.id);

  if (!project) return <div className="p-8 text-center text-on-surface-variant">Project not found</div>;

  return (
    <div className="flex flex-col w-full h-full font-body-md text-on-surface p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => window.history.back()} className="p-2 hover:bg-surface-container-high rounded-full transition-colors"><ArrowLeft className="w-5 h-5 rtl:rotate-180" /></button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{project.name}</h1>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">{project.status}</span>
      </div>
      <div className="bg-surface-container-lowest rounded-[32px] p-6 md:p-10 shadow-sm border border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><Building2 className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">الاسم / Name</p><p className="font-medium">{project.name}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"><MapPin className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">الموقع / Location</p><p className="font-medium">{project.location}</p></div></div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><DollarSign className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">السعر / Price</p><p className="font-medium">{project.price}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Home className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">الوحدات / Units</p><p className="font-medium">{project.units}</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('src/features/projects/ProjectDetail.tsx', projectDetail);

const clientDetail = `
import { ArrowLeft, User, Mail, DollarSign, Building, Calendar } from "lucide-react";
import { useRoute } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function ClientDetail() {
  const [, params] = useRoute("/clients/:id");
  const { t } = useI18n();
  const clients = useStore(state => state.clients);
  const client = clients.find(c => c.id === params?.id);

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
`;
fs.writeFileSync('src/features/clients/ClientDetail.tsx', clientDetail);

const employeeDetail = `
import { ArrowLeft, User, Mail, Briefcase, Phone, CheckCircle } from "lucide-react";
import { useRoute } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function EmployeeDetail() {
  const [, params] = useRoute("/employees/:id");
  const { t } = useI18n();
  const employees = useStore(state => state.employees);
  const employee = employees.find(e => e.id === params?.id);

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
`;
fs.writeFileSync('src/features/employees/EmployeeDetail.tsx', employeeDetail);

const rentDetail = `
import { ArrowLeft, Home, MapPin, DollarSign, Maximize, User } from "lucide-react";
import { useRoute } from "wouter";
import { useStore } from "../../store";
import { useI18n } from "../../contexts/I18nContext";

export function RentDetail() {
  const [, params] = useRoute("/rent/:id");
  const { t } = useI18n();
  const rentUnits = useStore(state => state.rentUnits);
  const unit = rentUnits.find(u => u.id === params?.id);

  if (!unit) return <div className="p-8 text-center text-on-surface-variant">Unit not found</div>;

  return (
    <div className="flex flex-col w-full h-full font-body-md text-on-surface p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => window.history.back()} className="p-2 hover:bg-surface-container-high rounded-full transition-colors"><ArrowLeft className="w-5 h-5 rtl:rotate-180" /></button>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{unit.type} - {unit.project}</h1>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">{unit.status}</span>
      </div>
      <div className="bg-surface-container-lowest rounded-[32px] p-6 md:p-10 shadow-sm border border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><Home className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">النوع / Type</p><p className="font-medium">{unit.type}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"><MapPin className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">المشروع / Project</p><p className="font-medium">{unit.project}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><DollarSign className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">السعر / Price</p><p className="font-medium">{unit.price}</p></div></div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Home className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">الغرف / Rooms</p><p className="font-medium">{unit.rooms}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><Maximize className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">المساحة / Area</p><p className="font-medium">{unit.area}</p></div></div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center"><User className="w-5 h-5"/></div><div><p className="text-sm text-on-surface-variant">المالك / Owner</p><p className="font-medium">{unit.owner}</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('src/features/rent/RentDetail.tsx', rentDetail);
