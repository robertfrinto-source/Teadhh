const fs = require('fs');

const arMore = `
    "reports.title": "التقارير والإحصائيات",
    "reports.subtitle": "تحليل شامل لأداء المبيعات والمؤشرات الرئيسية.",
    "reports.sales_performance": "أداء المبيعات",
    "reports.this_year": "هذا العام",
    "reports.revenue": "الإيرادات",
    "reports.client_distribution": "توزيع العملاء",
    "reports.total": "الإجمالي",
    "reports.big_companies": "شركات كبرى",
    "reports.medium": "متوسطة",
    "reports.startup": "ناشئة",
    "reports.sales_reps_performance": "أداء مندوبي المبيعات",
    "reports.top_4": "أعلى 4 مندوبين حسب الإيرادات",
    "reports.saturday": "السبت",
    "reports.sunday": "الأحد",
    "reports.monday": "الإثنين",
    "reports.tuesday": "الثلاثاء",
    "reports.wednesday": "الأربعاء",
    "reports.thursday": "الخميس",
    "reports.friday": "الجمعة",
`;

const enMore = `
    "reports.title": "Reports & Analytics",
    "reports.subtitle": "Comprehensive analysis of sales performance and key metrics.",
    "reports.sales_performance": "Sales Performance",
    "reports.this_year": "This Year",
    "reports.revenue": "Revenue",
    "reports.client_distribution": "Client Distribution",
    "reports.total": "Total",
    "reports.big_companies": "Enterprise",
    "reports.medium": "Medium",
    "reports.startup": "Startup",
    "reports.sales_reps_performance": "Sales Reps Performance",
    "reports.top_4": "Top 4 reps by revenue",
    "reports.saturday": "Sat",
    "reports.sunday": "Sun",
    "reports.monday": "Mon",
    "reports.tuesday": "Tue",
    "reports.wednesday": "Wed",
    "reports.thursday": "Thu",
    "reports.friday": "Fri",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);
