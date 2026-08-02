import { useState } from "react";
import { Plus, Calendar as CalendarIcon, CheckCircle2, Circle, MoreVertical, Clock, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { useI18n } from "../../contexts/I18nContext";
import { useStore, Task } from "../../store";

export function Tasks() {
  const { t } = useI18n();
  const tasks = useStore(state => state.tasks);
  const toggleTask = useStore(state => state.toggleTask);
  const addTask = useStore(state => state.addTask);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({ 
    title: '', date: '', priority: 'medium' 
  });

  const handleAdd = () => {
    addTask({
      id: Math.random().toString(),
      title: newTask.title || 'مهمة جديدة',
      date: newTask.date || 'اليوم',
      isDone: false,
      priority: (newTask.priority as 'high' | 'medium' | 'low') || 'medium'
    });
    setIsAddModalOpen(false);
    setNewTask({ title: '', date: '', priority: 'medium' });
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto font-body-md text-on-surface">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2 tracking-tight">{t("nav.tasks")}</h1>
          <p className="text-body-md text-on-surface-variant">{t("tasks.subtitle")}</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-[0_4px_12px_rgba(45,91,255,0.2)] hover:shadow-[0_6px_16px_rgba(45,91,255,0.3)]">
          <Plus className="w-5 h-5" />
          <span className="font-label-md font-bold tracking-wide">{t("tasks.new_task")}</span>
        </button>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] overflow-hidden border border-outline-variant/20">
        <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">{t("tasks.today_tasks")}</h2>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">لديك {tasks.filter(t => !t.isDone).length} مهام غير مكتملة</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-outline-variant/10">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className={cn(
                "p-4 sm:p-6 flex items-center gap-4 group hover:bg-surface-container-low/50 transition-colors cursor-pointer",
                task.isDone ? "opacity-60" : ""
              )}
              onClick={() => toggleTask(task.id)}
            >
              <button className={cn(
                "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                task.isDone ? "text-secondary" : "text-outline hover:text-primary"
              )}>
                {task.isDone ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
              </button>
              
              <div className="flex-1 min-w-0">
                <h3 className={cn(
                  "font-label-md text-body-lg mb-1 truncate transition-all",
                  task.isDone ? "line-through text-on-surface-variant" : "text-on-surface font-semibold group-hover:text-primary"
                )}>
                  {task.title}
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{task.date}</span>
                  </div>
                  {task.priority === 'high' && (
                    <span className="bg-error/10 text-error px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{t("deals.priority_urgent")}</span>
                  )}
                  {task.priority === 'medium' && (
                    <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{t("deals.priority_medium")}</span>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors" onClick={(e) => e.stopPropagation()}>
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 w-full max-w-md shadow-lg animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-headline-md text-on-surface">{t("tasks.add_task")}</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("tasks.title_label")}</label>
                <input 
                  type="text" 
                  value={newTask.title} 
                  onChange={e => setNewTask({...newTask, title: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("tasks.datetime")}</label>
                <input 
                  type="text" 
                  value={newTask.date} 
                  onChange={e => setNewTask({...newTask, date: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                  placeholder={t("tasks.placeholder_date")}
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("deals.priority")}</label>
                <select 
                  value={newTask.priority} 
                  onChange={e => setNewTask({...newTask, priority: e.target.value as 'high' | 'medium' | 'low'})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                >
                  <option value="high">{t("deals.priority_urgent")}</option>
                  <option value="medium">{t("deals.priority_medium")}</option>
                  <option value="low">{t("deals.priority_low")}</option>
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
