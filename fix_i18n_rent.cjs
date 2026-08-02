const fs = require('fs');

const arMore = `
    "rent.title": "وحدات الإيجار",
    "rent.subtitle": "إدارة وعرض الوحدات المتاحة للإيجار.",
    "rent.add_unit": "إضافة وحدة إيجار",
    "rent.type": "النوع",
    "rent.project": "المشروع",
    "rent.price": "السعر (شهري)",
    "rent.rooms": "الغرف",
    "rent.owner": "المالك",
    "rent.area": "المساحة",
    "rent.furnish": "الفرش / المساحة",
    "rent.cancel": "إلغاء",
    "rent.add": "إضافة",
    "rent.placeholder_type": "شقة، فيلا، الخ",
`;

const enMore = `
    "rent.title": "Rent Units",
    "rent.subtitle": "Manage and view units available for rent.",
    "rent.add_unit": "Add Rent Unit",
    "rent.type": "Type",
    "rent.project": "Project",
    "rent.price": "Price (Monthly)",
    "rent.rooms": "Rooms",
    "rent.owner": "Owner Name",
    "rent.area": "Area",
    "rent.furnish": "Furnish / Area",
    "rent.cancel": "Cancel",
    "rent.add": "Add",
    "rent.placeholder_type": "Apartment, Villa, etc.",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);

// Rent.tsx
let rCode = fs.readFileSync('src/features/rent/Rent.tsx', 'utf8');

rCode = rCode.replace(/>وحدات الإيجار</g, '>{t("rent.title")}<');
rCode = rCode.replace(/>إدارة وعرض الوحدات المتاحة للإيجار\.</g, '>{t("rent.subtitle")}<');
rCode = rCode.replace(/>إضافة وحدة إيجار</g, '>{t("rent.add_unit")}<');
rCode = rCode.replace(/>النوع</g, '>{t("rent.type")}<');
rCode = rCode.replace(/>المشروع</g, '>{t("rent.project")}<');
rCode = rCode.replace(/>الإيجار \(شهري\)</g, '>{t("rent.price")}<');
rCode = rCode.replace(/>السعر</g, '>{t("rent.price")}<');
rCode = rCode.replace(/>عدد الغرف</g, '>{t("rent.rooms")}<');
rCode = rCode.replace(/>الغرف</g, '>{t("rent.rooms")}<');
rCode = rCode.replace(/>اسم المالك</g, '>{t("rent.owner")}<');
rCode = rCode.replace(/>المالك</g, '>{t("rent.owner")}<');
rCode = rCode.replace(/>المساحة</g, '>{t("rent.area")}<');
rCode = rCode.replace(/>الفرش \/ المساحة</g, '>{t("rent.furnish")}<');
rCode = rCode.replace(/>إلغاء</g, '>{t("rent.cancel")}<');
rCode = rCode.replace(/>إضافة</g, '>{t("rent.add")}<');
rCode = rCode.replace(/placeholder="شقة، فيلا، الخ"/g, 'placeholder={t("rent.placeholder_type")}');
rCode = rCode.replace(/placeholder="مثال: مفروشة بالكامل"/g, 'placeholder={t("rent.furnish")}');

fs.writeFileSync('src/features/rent/Rent.tsx', rCode);

