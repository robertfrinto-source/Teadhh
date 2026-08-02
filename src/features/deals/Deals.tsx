import React, { useState, useEffect, FC } from "react";
import { Plus, MoreVertical, CheckCircle2, XCircle, X } from "lucide-react";
import { 
  DndContext, 
  DragOverlay, 
  closestCorners, 
  KeyboardSensor, 
  PointerSensor, 
  useSensor, 
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent
} from '@dnd-kit/core';
import { 
  SortableContext, 
  arrayMove, 
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useI18n } from "../../contexts/I18nContext";
import { useStore, Lead } from "../../store";

const COLUMNS = [
  { id: 'discovery', titleKey: "deals.discovery", color: 'bg-secondary' },
  { id: 'proposal', titleKey: "deals.proposal", color: 'bg-primary-fixed' },
  { id: 'negotiation', titleKey: "deals.negotiation", color: 'bg-tertiary-fixed' },
  { id: 'closed', titleKey: "deals.closed", color: 'bg-outline' }
];

const SortableDealCard: FC<{ deal: Lead }> = ({ deal }) => {
  const { t } = useI18n();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: deal.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  if (deal.columnId === 'closed') {
    return (
      <div 
        ref={setNodeRef} style={style} {...attributes} {...listeners}
        className={`bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 cursor-pointer group ${deal.status === 'خسرت' ? 'opacity-60 grayscale' : 'bg-secondary/5 border-secondary/20'}`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className={`flex items-center gap-1 ${deal.status === 'ربحت' ? 'text-secondary' : 'text-outline'}`}>
            {deal.status === 'ربحت' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            <span className="text-[10px] font-bold uppercase tracking-wider">{deal.status === "ربحت" ? t("deals.won") : t("deals.lost")}</span>
          </div>
        </div>
        <h3 className="font-label-md text-body-md font-medium text-on-surface mb-1 line-through opacity-80">{deal.name}</h3>
        <div className="flex justify-between items-end mt-3">
          <div className="font-label-md text-[14px] text-on-surface-variant">{deal.value || '$0'}</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={setNodeRef} style={style} {...attributes} {...listeners}
      className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group border border-outline-variant/30 touch-none"
    >
      <div className="flex justify-between items-start mb-3">
        {deal.priority === 'urgent' && <span className="bg-error/10 text-error text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">عاجل</span>}
        {deal.priority === 'high' && <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">عالي الأهمية</span>}
        {deal.priority === 'medium' && <span className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">متوسط</span>}
        <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <h3 className="font-label-md text-body-md font-semibold text-on-surface mb-1">{deal.name}</h3>
      <p className="text-label-sm text-on-surface-variant mb-4">{deal.company}</p>
      <div className="flex justify-between items-end mt-auto pt-4 border-t border-surface-container">
        <div className="font-headline-md text-[18px] text-primary">{deal.value || '$0'}</div>
      </div>
    </div>
  );
};

export function Deals() {
  const { t } = useI18n();
  const leads = useStore(state => state.leads);
  const updateLead = useStore(state => state.updateLead);
  const addLead = useStore(state => state.addLead);
  
  const [localDeals, setLocalDeals] = useState<Lead[]>(leads);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newDeal, setNewDeal] = useState<Partial<Lead>>({ name: '', company: '', value: '', priority: 'medium', columnId: 'discovery' });

  useEffect(() => {
    setLocalDeals(leads);
  }, [leads]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = localDeals.some(d => d.id === activeId);
    const isOverTask = localDeals.some(d => d.id === overId);

    if (!isActiveTask) return;

    if (isActiveTask && isOverTask) {
      setLocalDeals((prev) => {
        const activeIndex = prev.findIndex((t) => t.id === activeId);
        const overIndex = prev.findIndex((t) => t.id === overId);

        if (prev[activeIndex].columnId !== prev[overIndex].columnId) {
          const updated = [...prev];
          updated[activeIndex].columnId = prev[overIndex].columnId;
          updateLead(activeId as string, { columnId: prev[overIndex].columnId });
          return arrayMove(updated, activeIndex, overIndex);
        }

        return arrayMove(prev, activeIndex, overIndex);
      });
    }

    const isOverColumn = COLUMNS.some(c => c.id === overId);
    if (isActiveTask && isOverColumn) {
      setLocalDeals((prev) => {
        const activeIndex = prev.findIndex((t) => t.id === activeId);
        const updated = [...prev];
        updated[activeIndex].columnId = overId as string;
        updateLead(activeId as string, { columnId: overId as string });
        return arrayMove(updated, activeIndex, activeIndex);
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
  };

  const activeDeal = activeId ? localDeals.find(d => d.id === activeId) : null;

  const handleAdd = () => {
    addLead({
      id: Math.random().toString(),
      name: newDeal.name || 'صفقة جديدة',
      company: newDeal.company,
      value: newDeal.value,
      priority: newDeal.priority as 'high' | 'medium' | 'urgent',
      columnId: newDeal.columnId || 'discovery',
      phone: '',
      email: '',
      project: '',
      status: 'جديد',
      date: new Date().toISOString().split('T')[0]
    });
    setIsAddModalOpen(false);
    setNewDeal({ name: '', company: '', value: '', priority: 'medium', columnId: 'discovery' });
  };

  return (
    <div className="flex flex-col w-full font-body-md text-on-surface">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2 tracking-tight">{t("nav.kanban")}</h1>
          <p className="text-body-md text-on-surface-variant">{t("deals.subtitle")}</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-[0_4px_12px_rgba(45,91,255,0.2)] hover:shadow-[0_6px_16px_rgba(45,91,255,0.3)]">
          <Plus className="w-5 h-5" />
          <span className="font-label-md font-bold tracking-wide">{t("deals.new_deal")}</span>
        </button>
      </div>

      <DndContext 
        sensors={sensors} 
        collisionDetection={closestCorners} 
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-gutter overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar min-h-[calc(100vh-240px)]">
          {COLUMNS.map(col => (
            <div key={col.id} id={col.id} className="flex-none w-80 snap-start flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${col.color}`}></div>
                  <h2 className="font-headline-md text-body-lg font-semibold text-on-surface">{t(col.titleKey)}</h2>
                </div>
                <span className="bg-surface-container-high text-on-surface-variant text-label-sm px-2 py-1 rounded-md">
                  {localDeals.filter(d => d.columnId === col.id).length}
                </span>
              </div>
              
              <SortableContext 
                id={col.id}
                items={localDeals.filter(d => d.columnId === col.id).map(d => d.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className={`flex-1 rounded-2xl p-3 flex flex-col gap-3 min-h-[150px] ${col.id === 'closed' ? 'bg-surface-container-low/30 border border-dashed border-outline-variant/50' : 'bg-surface-container-low/50'}`}>
                  {localDeals.filter(d => d.columnId === col.id).map(deal => (
                    <SortableDealCard key={deal.id} deal={deal} />
                  ))}
                </div>
              </SortableContext>
            </div>
          ))}
        </div>
        <DragOverlay>
          {activeDeal ? <SortableDealCard deal={activeDeal} /> : null}
        </DragOverlay>
      </DndContext>
      <div className="h-12 w-full"></div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 w-full max-w-md shadow-lg animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-headline-md text-on-surface">{t("deals.add_deal")}</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("deals.deal_name")}</label>
                <input 
                  type="text" 
                  value={newDeal.name} 
                  onChange={e => setNewDeal({...newDeal, name: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("contacts.company")}</label>
                <input 
                  type="text" 
                  value={newDeal.company} 
                  onChange={e => setNewDeal({...newDeal, company: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("deals.expected_value")}</label>
                <input 
                  type="text" 
                  value={newDeal.value} 
                  onChange={e => setNewDeal({...newDeal, value: e.target.value})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                  placeholder="$0"
                />
              </div>
              <div>
                <label className="block text-sm font-label-md mb-1 text-on-surface">{t("deals.priority")}</label>
                <select 
                  value={newDeal.priority} 
                  onChange={e => setNewDeal({...newDeal, priority: e.target.value as any})}
                  className="w-full border border-outline-variant/50 rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest text-on-surface"
                >
                  <option value="medium">{t("deals.priority_medium")}</option>
                  <option value="high">{t("deals.priority_high")}</option>
                  <option value="urgent">{t("deals.priority_urgent")}</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 rounded-full font-label-md text-on-surface hover:bg-surface-container-high transition-colors">
                إلغاء
              </button>
              <button onClick={handleAdd} className="px-5 py-2 rounded-full bg-primary text-on-primary font-label-md shadow-sm hover:opacity-90 transition-opacity">
                إضافة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
