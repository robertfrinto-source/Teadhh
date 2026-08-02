const fs = require('fs');
let code = fs.readFileSync('src/features/reports/Reports.tsx', 'utf8');

code = code.replace(/export function Reports\(\) \{/, `import { useI18n } from "../../contexts/I18nContext";\nexport function Reports() {\n  const { t } = useI18n();`);

code = code.replace(/>التقارير والإحصائيات</g, '>{t("reports.title")}<');
code = code.replace(/>تحليل شامل لأداء المبيعات والمؤشرات الرئيسية\.</g, '>{t("reports.subtitle")}<');
code = code.replace(/>أداء المبيعات</g, '>{t("reports.sales_performance")}<');
code = code.replace(/>هذا العام</g, '>{t("reports.this_year")}<');
code = code.replace(/>الإيرادات</g, '>{t("reports.revenue")}<');
code = code.replace(/>توزيع العملاء</g, '>{t("reports.client_distribution")}<');
code = code.replace(/>الإجمالي</g, '>{t("reports.total")}<');
code = code.replace(/>شركات كبرى</g, '>{t("reports.big_companies")}<');
code = code.replace(/>متوسطة</g, '>{t("reports.medium")}<');
code = code.replace(/>ناشئة</g, '>{t("reports.startup")}<');
code = code.replace(/>أداء مندوبي المبيعات</g, '>{t("reports.sales_reps_performance")}<');
code = code.replace(/>أعلى 4 مندوبين حسب الإيرادات</g, '>{t("reports.top_4")}<');

code = code.replace(/>السبت</g, '>{t("reports.saturday")}<');
code = code.replace(/>الأحد</g, '>{t("reports.sunday")}<');
code = code.replace(/>الإثنين</g, '>{t("reports.monday")}<');
code = code.replace(/>الثلاثاء</g, '>{t("reports.tuesday")}<');
code = code.replace(/>الأربعاء</g, '>{t("reports.wednesday")}<');
code = code.replace(/>الخميس</g, '>{t("reports.thursday")}<');
code = code.replace(/>الجمعة</g, '>{t("reports.friday")}<');

code = code.replace(/>أحمد محمود</g, '>{t("dashboard.ahmed_mahmoud")}<');
code = code.replace(/>سارة خالد</g, '>{t("dashboard.sara_khalil")}<');

fs.writeFileSync('src/features/reports/Reports.tsx', code);
