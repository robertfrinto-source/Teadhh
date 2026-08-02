import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const PORT = 3000;

// In-memory Database
const db = {
  leads: [
    { id: '1', name: 'أحمد محمود', phone: '0501234567', email: 'ahmed@example.com', project: 'مشروع النور', status: 'جديد', date: '2023-10-25', company: 'شركة التقنية', priority: 'high', columnId: 'discovery', value: '$45,000' },
    { id: '2', name: 'سارة خالد', phone: '0509876543', email: 'sara@example.com', project: 'مشروع الأفق', status: 'مؤهل', date: '2023-10-24', company: 'مجموعة الرواد', priority: 'medium', columnId: 'proposal', value: '$12,500' },
  ],
  projects: [
    { id: '1', name: 'مشروع النور', location: 'الرياض', type: 'سكني', price: 'يبدأ من 500,000$', units: 120, status: 'تحت الإنشاء' },
  ],
  resaleUnits: [
    { id: '1', type: 'شقة', project: 'مشروع النور', price: '$220,000', rooms: 3, area: '150م', status: 'متاح', owner: 'خالد حسن' },
  ],
  rentUnits: [
    { id: '1', type: 'شقة', project: 'مشروع الأفق', price: '$1,500/شهر', rooms: 2, area: '100م', status: 'متاح', owner: 'محمد علي' },
  ],
  employees: [
    { id: '1', name: 'أحمد محمود', role: 'Sales Manager', department: 'المبيعات', status: 'active', email: 'ahmed@tilgroup.com', phone: '0501112222' },
    { id: '2', name: 'سارة خليل', role: 'Team Leader', department: 'المبيعات', status: 'active', email: 'sara@tilgroup.com', phone: '0502223333' },
  ],
  tasks: [
    { id: "1", title: "مكالمة متابعة مع عميل مشروع النور", date: "اليوم, 10:00 ص", isDone: false, priority: "high" },
    { id: "2", title: "تجهيز عرض سعر لشركة التقنية", date: "اليوم, 12:30 م", isDone: false, priority: "medium" },
    { id: "3", title: "مراجعة عقود الإيجار الجديدة", date: "اليوم, 03:00 م", isDone: true, priority: "medium" },
  ],
  clients: [
    { id: '1', name: 'عميل مميز 1', email: 'client1@example.com', value: '$250,000', project: 'مشروع النور - شقة A1', date: '15 أكتوبر 2023' },
    { id: '2', name: 'عميل مميز 2', email: 'client2@example.com', value: '$300,000', project: 'مشروع النور - شقة A2', date: '16 أكتوبر 2023' },
  ]
};

async function startServer() {
  const app = express();
  app.use(express.json());

  // --- API Routes ---
  
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Fetch all data
  app.get("/api/data", (req, res) => {
    res.json(db);
  });

  // Leads
  app.post("/api/leads", (req, res) => {
    const newLead = req.body;
    db.leads.push(newLead);
    res.json(newLead);
  });
  
  app.put("/api/leads/:id", (req, res) => {
    const idx = db.leads.findIndex(l => l.id === req.params.id);
    if (idx > -1) {
      db.leads[idx] = { ...db.leads[idx], ...req.body };
      res.json(db.leads[idx]);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  app.delete("/api/leads/:id", (req, res) => {
    db.leads = db.leads.filter(l => l.id !== req.params.id);
    res.json({ success: true });
  });

  // Projects
  app.post("/api/projects", (req, res) => {
    const newProject = req.body;
    db.projects.push(newProject);
    res.json(newProject);
  });

  // Resale Units
  app.post("/api/resale", (req, res) => {
    const newUnit = req.body;
    db.resaleUnits.push(newUnit);
    res.json(newUnit);
  });

  // Rent Units
  app.post("/api/rent", (req, res) => {
    const newUnit = req.body;
    db.rentUnits.push(newUnit);
    res.json(newUnit);
  });

  // Employees
  app.post("/api/employees", (req, res) => {
    const newEmployee = req.body;
    db.employees.push(newEmployee);
    res.json(newEmployee);
  });

  // Tasks
  app.post("/api/tasks", (req, res) => {
    const newTask = req.body;
    db.tasks.push(newTask);
    res.json(newTask);
  });

  app.put("/api/tasks/:id/toggle", (req, res) => {
    const idx = db.tasks.findIndex(t => t.id === req.params.id);
    if (idx > -1) {
      db.tasks[idx].isDone = !db.tasks[idx].isDone;
      res.json(db.tasks[idx]);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  // Clients
  app.post("/api/clients", (req, res) => {
    const newClient = req.body;
    db.clients.push(newClient);
    res.json(newClient);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
