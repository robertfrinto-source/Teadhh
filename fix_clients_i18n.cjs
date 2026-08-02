const fs = require('fs');

const arMore = `
    "clients.title": "إدارة العملاء",
    "clients.subtitle": "إدارة العملاء والصفقات المغلقة.",
    "clients.add_client": "إضافة عميل",
    "clients.add_client_closed": "إضافة عميل (صفقة مغلقة)",
    "clients.name": "اسم العميل",
    "clients.email": "البريد الإلكتروني",
    "clients.project": "المشروع / الوحدة",
    "clients.deal_value": "قيمة الصفقة",
    "clients.contract_date": "تاريخ التعاقد",
    "clients.table_name": "الاسم",
    "clients.table_value": "قيمة الصفقة",
    "clients.table_project": "المشروع / الوحدة",
    "clients.table_date": "تاريخ التعاقد",
`;

const enMore = `
    "clients.title": "Clients Management",
    "clients.subtitle": "Manage clients and closed deals.",
    "clients.add_client": "Add Client",
    "clients.add_client_closed": "Add Client (Closed Deal)",
    "clients.name": "Client Name",
    "clients.email": "Email",
    "clients.project": "Project / Unit",
    "clients.deal_value": "Deal Value",
    "clients.contract_date": "Contract Date",
    "clients.table_name": "Name",
    "clients.table_value": "Deal Value",
    "clients.table_project": "Project / Unit",
    "clients.table_date": "Contract Date",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);

// Clients.tsx
let rCode = fs.readFileSync('src/features/clients/Clients.tsx', 'utf8');

rCode = rCode.replace(/>إدارة العملاء</g, '>{t("clients.title")}<');
rCode = rCode.replace(/>إدارة العملاء والصفقات المغلقة\.</g, '>{t("clients.subtitle")}<');
rCode = rCode.replace(/>إضافة عميل \(صفقة مغلقة\)</g, '>{t("clients.add_client_closed")}<');
rCode = rCode.replace(/>إضافة عميل</g, '>{t("clients.add_client")}<');
rCode = rCode.replace(/>اسم العميل</g, '>{t("clients.name")}<');
rCode = rCode.replace(/>البريد الإلكتروني</g, '>{t("clients.email")}<');
rCode = rCode.replace(/>المشروع \/ الوحدة</g, '>{t("clients.project")}<');
rCode = rCode.replace(/>قيمة الصفقة</g, '>{t("clients.deal_value")}<');
rCode = rCode.replace(/>تاريخ التعاقد</g, '>{t("clients.contract_date")}<');

rCode = rCode.replace(/>الاسم</g, '>{t("clients.table_name")}<');

fs.writeFileSync('src/features/clients/Clients.tsx', rCode);

