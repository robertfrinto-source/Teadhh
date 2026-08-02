const fs = require('fs');

const arMore = `
    "employees.title": "إدارة الموظفين",
    "employees.subtitle": "إدارة موظفي الشركة، الصلاحيات، والهيكل التنظيمي.",
    "employees.add_employee": "إضافة موظف",
    "employees.add_new": "إضافة موظف جديد",
    "employees.name": "الاسم",
    "employees.email": "البريد الإلكتروني",
    "employees.job_title": "المسمى الوظيفي",
    "employees.status": "الحالة",
    "employees.active": "نشط",
    "employees.pending": "قيد الانتظار",
    "employees.cancel": "إلغاء",
    "employees.add": "إضافة",
    "employees.profile": "الملف الشخصي",
    "employees.role": "الدور",
    "employees.department": "القسم",
`;

const enMore = `
    "employees.title": "Employees Management",
    "employees.subtitle": "Manage company staff, permissions, and organizational structure.",
    "employees.add_employee": "Add Employee",
    "employees.add_new": "Add New Employee",
    "employees.name": "Name",
    "employees.email": "Email",
    "employees.job_title": "Job Title",
    "employees.status": "Status",
    "employees.active": "Active",
    "employees.pending": "Pending",
    "employees.cancel": "Cancel",
    "employees.add": "Add",
    "employees.profile": "Profile",
    "employees.role": "Role",
    "employees.department": "Department",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);

// Employees.tsx
let rCode = fs.readFileSync('src/features/employees/Employees.tsx', 'utf8');

rCode = rCode.replace(/>إدارة الموظفين</g, '>{t("employees.title")}<');
rCode = rCode.replace(/>إدارة موظفي الشركة، الصلاحيات، والهيكل التنظيمي\.</g, '>{t("employees.subtitle")}<');
rCode = rCode.replace(/>إضافة موظف</g, '>{t("employees.add_employee")}<');
rCode = rCode.replace(/>إضافة موظف جديد</g, '>{t("employees.add_new")}<');
rCode = rCode.replace(/>الاسم</g, '>{t("employees.name")}<');
rCode = rCode.replace(/>البريد الإلكتروني</g, '>{t("employees.email")}<');
rCode = rCode.replace(/>المسمى الوظيفي</g, '>{t("employees.job_title")}<');
rCode = rCode.replace(/>الحالة</g, '>{t("employees.status")}<');
rCode = rCode.replace(/>نشط</g, '>{t("employees.active")}<');
rCode = rCode.replace(/>قيد الانتظار</g, '>{t("employees.pending")}<');
rCode = rCode.replace(/>إلغاء</g, '>{t("employees.cancel")}<');
rCode = rCode.replace(/>إضافة</g, '>{t("employees.add")}<');
rCode = rCode.replace(/>الملف الشخصي</g, '>{t("employees.profile")}<');

fs.writeFileSync('src/features/employees/Employees.tsx', rCode);
