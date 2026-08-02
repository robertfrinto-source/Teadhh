const fs = require('fs');

const arMore = `
    "contacts.title": "العملاء المحتملين",
    "contacts.subtitle": "إدارة جهات الاتصال الخاصة بك وتتبع تفاعلاتهم.",
    "contacts.add": "إضافة جهة اتصال",
    "contacts.name": "الاسم",
    "contacts.company": "الشركة",
    "contacts.email": "البريد الإلكتروني",
    "contacts.status": "الحالة",
    "contacts.last_contact": "آخر تواصل",
    "contacts.cancel": "إلغاء",
    "contacts.add_btn": "إضافة",
    "contacts.details": "تفاصيل العميل / Lead Details",
    "contacts.phone": "الهاتف / Phone",
    "contacts.project": "المشروع / Project",
    "contacts.date": "التاريخ / Date",
    
    "deals.title": "لوحة المبيعات",
    "deals.subtitle": "تتبع الصفقات في مراحل المبيعات المختلفة.",
    "deals.new_deal": "صفقة جديدة",
    "deals.add_deal": "إضافة صفقة جديدة",
    "deals.deal_name": "اسم الصفقة",
    "deals.expected_value": "القيمة المتوقعة",
    "deals.priority": "الأهمية",
    "deals.priority_medium": "متوسطة",
    "deals.priority_high": "عالية",
    "deals.priority_urgent": "عاجلة",
    "deals.discovery": "الاكتشاف",
    "deals.proposal": "تقديم العرض",
    "deals.negotiation": "التفاوض",
    "deals.closed": "مكتملة / مغلقة",
    "deals.won": "ربحت",
    "deals.lost": "خسرت",

    "tasks.title": "المهام اليومية",
    "tasks.subtitle": "إدارة وتتبع مهامك الشخصية ومواعيدك.",
    "tasks.new_task": "مهمة جديدة",
    "tasks.add_task": "إضافة مهمة جديدة",
    "tasks.today_tasks": "مهام اليوم",
    "tasks.title_label": "العنوان",
    "tasks.datetime": "التاريخ والوقت",
    "tasks.placeholder_date": "مثال: غداً, 10:00 ص",
    
    "projects.title": "إدارة المشاريع",
    "projects.subtitle": "إدارة وعرض المشاريع العقارية وتتبع تقدمها.",
    "projects.add_project": "إضافة مشروع",
    "projects.location": "الموقع / Location",
    "projects.price": "السعر / Price",
    "projects.units": "الوحدات / Units",
`;

const enMore = `
    "contacts.title": "Leads",
    "contacts.subtitle": "Manage your contacts and track their interactions.",
    "contacts.add": "Add Contact",
    "contacts.name": "Name",
    "contacts.company": "Company",
    "contacts.email": "Email",
    "contacts.status": "Status",
    "contacts.last_contact": "Last Contact",
    "contacts.cancel": "Cancel",
    "contacts.add_btn": "Add",
    "contacts.details": "Lead Details",
    "contacts.phone": "Phone",
    "contacts.project": "Project",
    "contacts.date": "Date",
    
    "deals.title": "Sales Pipeline",
    "deals.subtitle": "Track deals across different sales stages.",
    "deals.new_deal": "New Deal",
    "deals.add_deal": "Add New Deal",
    "deals.deal_name": "Deal Name",
    "deals.expected_value": "Expected Value",
    "deals.priority": "Priority",
    "deals.priority_medium": "Medium",
    "deals.priority_high": "High",
    "deals.priority_urgent": "Urgent",
    "deals.discovery": "Discovery",
    "deals.proposal": "Proposal",
    "deals.negotiation": "Negotiation",
    "deals.closed": "Closed",
    "deals.won": "Won",
    "deals.lost": "Lost",

    "tasks.title": "Daily Tasks",
    "tasks.subtitle": "Manage and track your personal tasks and appointments.",
    "tasks.new_task": "New Task",
    "tasks.add_task": "Add New Task",
    "tasks.today_tasks": "Today's Tasks",
    "tasks.title_label": "Title",
    "tasks.datetime": "Date & Time",
    "tasks.placeholder_date": "e.g. Tomorrow, 10:00 AM",
    
    "projects.title": "Projects Management",
    "projects.subtitle": "Manage and view real estate projects and track progress.",
    "projects.add_project": "Add Project",
    "projects.location": "Location",
    "projects.price": "Price",
    "projects.units": "Units",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);

// Contacts.tsx
let rCode = fs.readFileSync('src/features/contacts/Contacts.tsx', 'utf8');
rCode = rCode.replace(/>العملاء المحتملين</g, '>{t("contacts.title")}<');
rCode = rCode.replace(/>إدارة جهات الاتصال الخاصة بك وتتبع تفاعلاتهم\.</g, '>{t("contacts.subtitle")}<');
rCode = rCode.replace(/>إضافة جهة اتصال</g, '>{t("contacts.add")}<');
rCode = rCode.replace(/>الاسم</g, '>{t("contacts.name")}<');
rCode = rCode.replace(/>الشركة</g, '>{t("contacts.company")}<');
rCode = rCode.replace(/>البريد الإلكتروني</g, '>{t("contacts.email")}<');
rCode = rCode.replace(/>الحالة</g, '>{t("contacts.status")}<');
rCode = rCode.replace(/>آخر تواصل</g, '>{t("contacts.last_contact")}<');
rCode = rCode.replace(/>إلغاء</g, '>{t("contacts.cancel")}<');
rCode = rCode.replace(/>إضافة</g, '>{t("contacts.add_btn")}<');
fs.writeFileSync('src/features/contacts/Contacts.tsx', rCode);

// Deals.tsx
let dCode = fs.readFileSync('src/features/deals/Deals.tsx', 'utf8');
dCode = dCode.replace(/title: 'الاكتشاف'/g, 'title: t("deals.discovery")');
dCode = dCode.replace(/title: 'تقديم العرض'/g, 'title: t("deals.proposal")');
dCode = dCode.replace(/title: 'التفاوض'/g, 'title: t("deals.negotiation")');
dCode = dCode.replace(/title: 'مكتملة \/ مغلقة'/g, 'title: t("deals.closed")');
dCode = dCode.replace(/>لوحة المبيعات</g, '>{t("deals.title")}<');
dCode = dCode.replace(/>تتبع الصفقات في مراحل المبيعات المختلفة\.</g, '>{t("deals.subtitle")}<');
dCode = dCode.replace(/>صفقة جديدة</g, '>{t("deals.new_deal")}<');
dCode = dCode.replace(/>إضافة صفقة جديدة</g, '>{t("deals.add_deal")}<');
dCode = dCode.replace(/>اسم الصفقة</g, '>{t("deals.deal_name")}<');
dCode = dCode.replace(/>الشركة</g, '>{t("contacts.company")}<');
dCode = dCode.replace(/>القيمة المتوقعة</g, '>{t("deals.expected_value")}<');
dCode = dCode.replace(/>الأهمية</g, '>{t("deals.priority")}<');
dCode = dCode.replace(/>متوسطة</g, '>{t("deals.priority_medium")}<');
dCode = dCode.replace(/>عالية</g, '>{t("deals.priority_high")}<');
dCode = dCode.replace(/>عاجلة</g, '>{t("deals.priority_urgent")}<');
dCode = dCode.replace(/>إلغاء</g, '>{t("contacts.cancel")}<');
dCode = dCode.replace(/>إضافة</g, '>{t("contacts.add_btn")}<');
dCode = dCode.replace(/'ربحت' : 'خسرت'/g, 't("deals.won") : t("deals.lost")');
fs.writeFileSync('src/features/deals/Deals.tsx', dCode);

// Tasks.tsx
let tCode = fs.readFileSync('src/features/tasks/Tasks.tsx', 'utf8');
tCode = tCode.replace(/>المهام اليومية</g, '>{t("tasks.title")}<');
tCode = tCode.replace(/>إدارة وتتبع مهامك الشخصية ومواعيدك\.</g, '>{t("tasks.subtitle")}<');
tCode = tCode.replace(/>مهمة جديدة</g, '>{t("tasks.new_task")}<');
tCode = tCode.replace(/>إضافة مهمة جديدة</g, '>{t("tasks.add_task")}<');
tCode = tCode.replace(/>مهام اليوم</g, '>{t("tasks.today_tasks")}<');
tCode = tCode.replace(/>العنوان</g, '>{t("tasks.title_label")}<');
tCode = tCode.replace(/>التاريخ والوقت</g, '>{t("tasks.datetime")}<');
tCode = tCode.replace(/placeholder="مثال: غداً, 10:00 ص"/g, 'placeholder={t("tasks.placeholder_date")}');
tCode = tCode.replace(/>الأولوية</g, '>{t("deals.priority")}<');
tCode = tCode.replace(/>عاجل</g, '>{t("deals.priority_urgent")}<');
tCode = tCode.replace(/>متوسط</g, '>{t("deals.priority_medium")}<');
tCode = tCode.replace(/>منخفض</g, '>{t("deals.priority_low")}<');
tCode = tCode.replace(/>إلغاء</g, '>{t("contacts.cancel")}<');
tCode = tCode.replace(/>إضافة</g, '>{t("contacts.add_btn")}<');
fs.writeFileSync('src/features/tasks/Tasks.tsx', tCode);

// Projects.tsx
let pCode = fs.readFileSync('src/features/projects/Projects.tsx', 'utf8');
pCode = pCode.replace(/>إدارة المشاريع</g, '>{t("projects.title")}<');
pCode = pCode.replace(/>إدارة وعرض المشاريع العقارية وتتبع تقدمها\.</g, '>{t("projects.subtitle")}<');
pCode = pCode.replace(/>إضافة مشروع</g, '>{t("projects.add_project")}<');
pCode = pCode.replace(/>الاسم</g, '>{t("contacts.name")}<');
pCode = pCode.replace(/>الموقع</g, '>{t("projects.location")}<');
pCode = pCode.replace(/>السعر</g, '>{t("projects.price")}<');
pCode = pCode.replace(/>عدد الوحدات</g, '>{t("projects.units")}<');
pCode = pCode.replace(/>إلغاء</g, '>{t("contacts.cancel")}<');
pCode = pCode.replace(/>إضافة</g, '>{t("contacts.add_btn")}<');
fs.writeFileSync('src/features/projects/Projects.tsx', pCode);

// ContactDetail.tsx
let cdCode = fs.readFileSync('src/features/contacts/ContactDetail.tsx', 'utf8');
cdCode = cdCode.replace(/>تفاصيل العميل \/ Lead Details</g, '>{t("contacts.details")}<');
cdCode = cdCode.replace(/>الاسم \/ Name</g, '>{t("contacts.name")}<');
cdCode = cdCode.replace(/>الهاتف \/ Phone</g, '>{t("contacts.phone")}<');
cdCode = cdCode.replace(/>البريد \/ Email</g, '>{t("contacts.email")}<');
cdCode = cdCode.replace(/>المشروع \/ Project</g, '>{t("contacts.project")}<');
cdCode = cdCode.replace(/>الشركة \/ Company</g, '>{t("contacts.company")}<');
cdCode = cdCode.replace(/>التاريخ \/ Date</g, '>{t("contacts.date")}<');
fs.writeFileSync('src/features/contacts/ContactDetail.tsx', cdCode);

// ProjectDetail.tsx
let pdCode = fs.readFileSync('src/features/projects/ProjectDetail.tsx', 'utf8');
pdCode = pdCode.replace(/>الاسم \/ Name</g, '>{t("contacts.name")}<');
pdCode = pdCode.replace(/>الموقع \/ Location</g, '>{t("projects.location")}<');
pdCode = pdCode.replace(/>السعر \/ Price</g, '>{t("projects.price")}<');
pdCode = pdCode.replace(/>الوحدات \/ Units</g, '>{t("projects.units")}<');
fs.writeFileSync('src/features/projects/ProjectDetail.tsx', pdCode);

