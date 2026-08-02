const fs = require('fs');
let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

const arAdditions = `
    "dashboard.activity_1_title": "مكالمة مع شركة الأفق",
    "dashboard.activity_1_desc": "تمت مناقشة شروط العقد الجديد ومراجعة التسعير.",
    "dashboard.time_2h": "منذ ساعتين",
    "dashboard.activity_2_title": "إغلاق صفقة مشروع النور",
    "dashboard.activity_2_desc": "تم التوقيع على العقد بنجاح بقيمة $45,000.",
    "dashboard.time_yesterday_1430": "أمس, 14:30",
    "dashboard.activity_3_title": "إرسال مقترح لـ مجموعة المدار",
    "dashboard.activity_3_desc": "تم إرسال العرض المبدئي لتطوير المنصة.",
    "dashboard.time_yesterday_0915": "أمس, 09:15",
    "dashboard.latest_deals": "أحدث الصفقات",
    "dashboard.client_company": "العميل / الشركة",
    "dashboard.stage": "المرحلة",
    "dashboard.value": "القيمة",
    "dashboard.expected_close_date": "تاريخ الإغلاق المتوقع",
    "dashboard.tech_company": "شركة التقنية المتقدمة",
    "dashboard.ahmed_mahmoud": "أحمد محمود",
    "dashboard.negotiation": "تفاوض",
    "dashboard.date_oct_15": "15 أكتوبر, 2023",
    "dashboard.build_group": "مجموعة البناء الحديث",
    "dashboard.sara_khalil": "سارة خليل",
    "dashboard.proposal": "مقترح",
    "dashboard.date_oct_22": "22 أكتوبر, 2023",
    "dashboard.creative_agency": "وكالة الإبداع",
    "dashboard.khaled_omar": "خالد عمر",
    "dashboard.qualified": "تأهيل",
    "dashboard.date_nov_05": "05 نوفمبر, 2023",
`;

const enAdditions = `
    "dashboard.activity_1_title": "Call with Horizon Co",
    "dashboard.activity_1_desc": "Discussed new contract terms and reviewed pricing.",
    "dashboard.time_2h": "2 hours ago",
    "dashboard.activity_2_title": "Closed deal for Al Noor Project",
    "dashboard.activity_2_desc": "Successfully signed contract worth $45,000.",
    "dashboard.time_yesterday_1430": "Yesterday, 14:30",
    "dashboard.activity_3_title": "Proposal sent to Al Madar Group",
    "dashboard.activity_3_desc": "Initial offer for platform development sent.",
    "dashboard.time_yesterday_0915": "Yesterday, 09:15",
    "dashboard.latest_deals": "Latest Deals",
    "dashboard.client_company": "Client / Company",
    "dashboard.stage": "Stage",
    "dashboard.value": "Value",
    "dashboard.expected_close_date": "Expected Close Date",
    "dashboard.tech_company": "Advanced Tech Co",
    "dashboard.ahmed_mahmoud": "Ahmed Mahmoud",
    "dashboard.negotiation": "Negotiation",
    "dashboard.date_oct_15": "Oct 15, 2023",
    "dashboard.build_group": "Modern Build Group",
    "dashboard.sara_khalil": "Sara Khalil",
    "dashboard.proposal": "Proposal",
    "dashboard.date_oct_22": "Oct 22, 2023",
    "dashboard.creative_agency": "Creative Agency",
    "dashboard.khaled_omar": "Khaled Omar",
    "dashboard.qualified": "Qualified",
    "dashboard.date_nov_05": "Nov 05, 2023",
`;

code = code.replace(/"dashboard\.vs_last_month": "مقارنة بالشهر السابق",/, '"dashboard.vs_last_month": "مقارنة بالشهر السابق",' + arAdditions);
code = code.replace(/"dashboard\.vs_last_month": "vs last month",/, '"dashboard.vs_last_month": "vs last month",' + enAdditions);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);
