const fs = require('fs');

const arMore = `
    "search.title": "البحث الشامل",
    "search.subtitle": "ابحث في جميع جهات الاتصال، العملاء، وتاريخ نشاطهم.",
    "search.placeholder": "ابحث بالاسم، رقم الهاتف، أو البريد الإلكتروني...",
    "search.button": "بحث",
    "search.recent": "النتائج الأخيرة",
    "search.filter": "تصفية",
    "search.current_client": "عميل حالي",
    "search.last_activity": "آخر نشاط منذ يومين",
`;

const enMore = `
    "search.title": "Global Search",
    "search.subtitle": "Search all contacts, clients, and activity history.",
    "search.placeholder": "Search by name, phone, or email...",
    "search.button": "Search",
    "search.recent": "Recent Results",
    "search.filter": "Filter",
    "search.current_client": "Current Client",
    "search.last_activity": "Last activity 2 days ago",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);

// Search.tsx
let searchCode = fs.readFileSync('src/features/search/Search.tsx', 'utf8');

searchCode = searchCode.replace(/export function Search\(\) \{/, `import { useI18n } from "../../contexts/I18nContext";\nexport function Search() {\n  const { t } = useI18n();`);

searchCode = searchCode.replace(/>البحث الشامل</g, '>{t("search.title")}<');
searchCode = searchCode.replace(/>ابحث في جميع جهات الاتصال، العملاء، وتاريخ نشاطهم\.</g, '>{t("search.subtitle")}<');
searchCode = searchCode.replace(/placeholder="ابحث بالاسم، رقم الهاتف، أو البريد الإلكتروني\.\.\."/g, 'placeholder={t("search.placeholder")}');
searchCode = searchCode.replace(/>بحث</g, '>{t("search.button")}<');
searchCode = searchCode.replace(/>النتائج الأخيرة</g, '>{t("search.recent")}<');
searchCode = searchCode.replace(/>تصفية</g, '>{t("search.filter")}<');
searchCode = searchCode.replace(/>عميل حالي</g, '>{t("search.current_client")}<');
searchCode = searchCode.replace(/>آخر نشاط منذ يومين</g, '>{t("search.last_activity")}<');

fs.writeFileSync('src/features/search/Search.tsx', searchCode);

