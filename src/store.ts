import { create } from 'zustand';

export type Lead = { id: string; name: string; phone: string; email: string; project: string; status: string; date: string; value?: string; priority?: 'high' | 'medium' | 'urgent'; columnId?: string; company?: string; };
export type Project = { id: string; name: string; location: string; type: string; price: string; units: number; status: string; };
export type ResaleUnit = { id: string; type: string; project: string; price: string; rooms: number; area: string; status: string; owner: string; };
export type Employee = { id: string; name: string; role: string; department?: string; status: string; email: string; phone?: string; };
export type Task = { id: string; title: string; date: string; isDone: boolean; priority: 'high' | 'medium' | 'low'; };
export type Client = { id: string; name: string; email: string; value: string; project: string; date: string; };

interface AppState {
  leads: Lead[];
  projects: Project[];
  resaleUnits: ResaleUnit[];
  rentUnits: ResaleUnit[];
  employees: Employee[];
  tasks: Task[];
  clients: Client[];
  
  fetchData: () => Promise<void>;
  
  addLead: (lead: Lead) => Promise<void>;
  updateLead: (id: string, data: Partial<Lead>) => Promise<void>;
  deleteLead: (id: string) => Promise<void>;
  
  addProject: (project: Project) => Promise<void>;
  addResaleUnit: (unit: ResaleUnit) => Promise<void>;
  addRentUnit: (unit: ResaleUnit) => Promise<void>;
  addEmployee: (employee: Employee) => Promise<void>;

  addTask: (task: Task) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  addClient: (client: Client) => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  leads: [],
  projects: [],
  resaleUnits: [],
  rentUnits: [],
  employees: [],
  tasks: [],
  clients: [],
  
  fetchData: async () => {
    try {
      const res = await fetch('/api/data');
      if (res.ok) {
        const data = await res.json();
        set(data);
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  },
  
  addLead: async (lead) => {
    await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
    set((state) => ({ leads: [...state.leads, lead] }));
  },
  updateLead: async (id, data) => {
    await fetch(`/api/leads/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    set((state) => ({ leads: state.leads.map(l => l.id === id ? { ...l, ...data } : l) }));
  },
  deleteLead: async (id) => {
    await fetch(`/api/leads/${id}`, { method: 'DELETE' });
    set((state) => ({ leads: state.leads.filter(l => l.id !== id) }));
  },
  
  addProject: async (project) => {
    await fetch('/api/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(project) });
    set((state) => ({ projects: [...state.projects, project] }));
  },
  addResaleUnit: async (unit) => {
    await fetch('/api/resale', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(unit) });
    set((state) => ({ resaleUnits: [...state.resaleUnits, unit] }));
  },
  addRentUnit: async (unit) => {
    await fetch('/api/rent', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(unit) });
    set((state) => ({ rentUnits: [...state.rentUnits, unit] }));
  },
  addEmployee: async (employee) => {
    await fetch('/api/employees', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(employee) });
    set((state) => ({ employees: [...state.employees, employee] }));
  },

  addTask: async (task) => {
    await fetch('/api/tasks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task) });
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  toggleTask: async (id) => {
    await fetch(`/api/tasks/${id}/toggle`, { method: 'PUT' });
    set((state) => ({
      tasks: state.tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task)
    }));
  },
  addClient: async (client) => {
    await fetch('/api/clients', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(client) });
    set((state) => ({ clients: [...state.clients, client] }));
  },
}));
