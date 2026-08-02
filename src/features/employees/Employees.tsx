import { useState } from "react";
import { Plus, Search, Filter, ShieldAlert, Mail, X } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";
import { useStore, Employee } from "../../store";

export function Employees() {
  const { t } = useI18n();
  const employees = useStore(state => state.employees);
  const addEmployee = useStore(state => state.addEmployee);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({ 
    name: '', role: '', email: '', status: 'active' 
  });

  const handleAdd = () => {
    addEmployee({
      id: Math.random().toString(),
      name: newEmployee.name || 'موظف جديد',
      role: newEmployee.role || 'Sales Advisor',
      email: newEmployee.email || '',
      status: (newEmployee.status as 'active' | 'pending') || 'active'
    });
    setIsAddModalOpen(false);
    setNewEmployee({ name: '', role: '', email: '', status: 'active' });
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto animate-fade-in relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-headline-lg sm:text-display-lg text-[#0F2D52] tracking-tight">{t("nav.employees")}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t("employees.subtitle")}</p>
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
            إضافة موظف
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {employees.map((emp) => (
          <div key={emp.id} className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden border border-outline-variant/20 hover:border-[#C9A84C]/50 transition-colors group cursor-pointer p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-full bg-[#E2E7FF] flex items-center justify-center text-[#0F2D52] font-headline-md font-bold text-xl">
                {emp.name.charAt(0)}
              </div>
              {emp.status === "active" ? (
                <span className="px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded uppercase tracking-wider">{t("employees.active")}</span>
              ) : (
                <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase tracking-wider flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  قيد الانتظار
                </span>
              )}
            </div>
            
            <h3 className="font-headline-md text-lg text-[#0F2D52] mb-1">{emp.name}</h3>
            <p className="font-label-sm text-[#C9A84C] mb-4 uppercase tracking-wider">{emp.role}</p>
            
            <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
              <Mail className="w-4 h-4 text-outline" />
              <span className="truncate">{emp.email}</span>
            </div>
            
            <div className="pt-4 border-t border-outline-variant/20 flex gap-2">
              <button className="flex-1 py-2 text-center rounded-lg bg-surface-container-low text-[#0F2D52] hover:bg-[#E2E7FF] transition-colors font-label-sm text-sm">
                الملف الشخصي
              </button>
            </div>
          </div>
        ))}
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 w-full max-w-md shadow-lg animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-headline-md text-on-surface">{t("employees.add_new")}</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("employees.name")}</label>
                <input 
                  type="text" 
                  value={newEmployee.name} 
                  onChange={e => setNewEmployee({...newEmployee, name: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("employees.email")}</label>
                <input 
                  type="email" 
                  value={newEmployee.email} 
                  onChange={e => setNewEmployee({...newEmployee, email: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("employees.job_title")}</label>
                <input 
                  type="text" 
                  value={newEmployee.role} 
                  onChange={e => setNewEmployee({...newEmployee, role: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                  placeholder="Sales Advisor"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("employees.status")}</label>
                <select 
                  value={newEmployee.status} 
                  onChange={e => setNewEmployee({...newEmployee, status: e.target.value as 'active' | 'pending'})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                >
                  <option value="active">{t("employees.active")}</option>
                  <option value="pending">{t("employees.pending")}</option>
                </select>
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
