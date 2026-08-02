const fs = require('fs');
let code = fs.readFileSync('src/features/dashboard/Dashboard.tsx', 'utf8');

// replace hardcoded arabic strings with translation keys
// I will just use regex to replace specific strings.

code = code.replace(/import { ([^}]+) } from "lucide-react";/, `import { $1 } from "lucide-react";\nimport { useI18n } from "../../contexts/I18nContext";`);
code = code.replace(/export function Dashboard\(\) {/, `export function Dashboard() {\n  const { t } = useI18n();`);

// Simple replacements:
code = code.replace(/"مكالمة مع شركة الأفق"/g, '{t("dashboard.activity_1_title")}');
code = code.replace(/"تمت مناقشة شروط العقد الجديد ومراجعة التسعير\."/g, '{t("dashboard.activity_1_desc")}');
code = code.replace(/"منذ ساعتين"/g, '{t("dashboard.time_2h")}');
code = code.replace(/"إغلاق صفقة مشروع النور"/g, '{t("dashboard.activity_2_title")}');
code = code.replace(/"تم التوقيع على العقد بنجاح بقيمة \$45,000\."/g, '{t("dashboard.activity_2_desc")}');
code = code.replace(/"أمس, 14:30"/g, '{t("dashboard.time_yesterday_1430")}');
code = code.replace(/"إرسال مقترح لـ مجموعة المدار"/g, '{t("dashboard.activity_3_title")}');
code = code.replace(/"تم إرسال العرض المبدئي لتطوير المنصة\."/g, '{t("dashboard.activity_3_desc")}');
code = code.replace(/"أمس, 09:15"/g, '{t("dashboard.time_yesterday_0915")}');

code = code.replace(/>النشاط الأخير</g, '>{t("dashboard.recent_activity")}<');
code = code.replace(/>أحدث الصفقات</g, '>{t("dashboard.latest_deals")}<');
code = code.replace(/عرض الكل/g, '{t("dashboard.view_all")}');

code = code.replace(/>العميل \/ الشركة</g, '>{t("dashboard.client_company")}<');
code = code.replace(/>المرحلة</g, '>{t("dashboard.stage")}<');
code = code.replace(/>القيمة</g, '>{t("dashboard.value")}<');
code = code.replace(/>تاريخ الإغلاق المتوقع</g, '>{t("dashboard.expected_close_date")}<');

code = code.replace(/>شركة التقنية المتقدمة</g, '>{t("dashboard.tech_company")}<');
code = code.replace(/>أحمد محمود</g, '>{t("dashboard.ahmed_mahmoud")}<');
code = code.replace(/>تفاوض</g, '>{t("dashboard.negotiation")}<');
code = code.replace(/>15 أكتوبر, 2023</g, '>{t("dashboard.date_oct_15")}<');

code = code.replace(/>مجموعة البناء الحديث</g, '>{t("dashboard.build_group")}<');
code = code.replace(/>سارة خليل</g, '>{t("dashboard.sara_khalil")}<');
code = code.replace(/>مقترح</g, '>{t("dashboard.proposal")}<');
code = code.replace(/>22 أكتوبر, 2023</g, '>{t("dashboard.date_oct_22")}<');

code = code.replace(/>وكالة الإبداع</g, '>{t("dashboard.creative_agency")}<');
code = code.replace(/>خالد عمر</g, '>{t("dashboard.khaled_omar")}<');
code = code.replace(/>تأهيل</g, '>{t("dashboard.qualified")}<');
code = code.replace(/>05 نوفمبر, 2023</g, '>{t("dashboard.date_nov_05")}<');

fs.writeFileSync('src/features/dashboard/Dashboard.tsx', code);
