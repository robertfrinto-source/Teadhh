const fs = require('fs');

const arMore = `
    "resale.title": "وحدات إعادة البيع",
    "resale.subtitle": "إدارة وعرض الوحدات المتاحة لإعادة البيع في السوق.",
    "resale.add_unit": "إضافة وحدة",
    "resale.type_unit": "الوحدة والمشروع",
    "resale.type": "النوع",
    "resale.price": "السعر",
    "resale.owner": "المالك",
    "resale.rooms": "غرف نوم",
    
    "marketplace.for_sale": "للبيع",
    "marketplace.for_rent": "للإيجار",
    "marketplace.unit": "وحدة -",
    "marketplace.rent_unit": "وحدة إيجار -",
    
    "rent.rooms_suffix": "غرف نوم",
    "rent.unit_project": "الوحدة والمشروع",
`;

const enMore = `
    "resale.title": "Resale Units",
    "resale.subtitle": "Manage and view units available for resale in the market.",
    "resale.add_unit": "Add Unit",
    "resale.type_unit": "Unit & Project",
    "resale.type": "Type",
    "resale.price": "Price",
    "resale.owner": "Owner",
    "resale.rooms": "Bedrooms",
    
    "marketplace.for_sale": "For Sale",
    "marketplace.for_rent": "For Rent",
    "marketplace.unit": "Unit -",
    "marketplace.rent_unit": "Rent Unit -",
    
    "rent.rooms_suffix": "Bedrooms",
    "rent.unit_project": "Unit & Project",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);

// Marketplace.tsx
let marketCode = fs.readFileSync('src/features/marketplace/Marketplace.tsx', 'utf8');
marketCode = marketCode.replace(/'للبيع'/g, 't("marketplace.for_sale")');
marketCode = marketCode.replace(/'للإيجار'/g, 't("marketplace.for_rent")');
marketCode = marketCode.replace(/`وحدة - \$\{u\.project\}`/g, '`${t("marketplace.unit")} ${u.project}`');
marketCode = marketCode.replace(/`وحدة إيجار - \$\{u\.project\}`/g, '`${t("marketplace.rent_unit")} ${u.project}`');
fs.writeFileSync('src/features/marketplace/Marketplace.tsx', marketCode);

// Rent.tsx
let rentCode = fs.readFileSync('src/features/rent/Rent.tsx', 'utf8');
rentCode = rentCode.replace(/>الوحدة والمشروع</g, '>{t("rent.unit_project")}<');
rentCode = rentCode.replace(/>إدارة وحدات الإيجار المعروضة في السوق\.</g, '>{t("rent.subtitle")}<');
rentCode = rentCode.replace(/>تصفية</g, '>{t("search.filter")}<');
rentCode = rentCode.replace(/>إضافة وحدة</g, '>{t("rent.add_unit")}<');
rentCode = rentCode.replace(/>نوع الوحدة</g, '>{t("rent.type")}<');
rentCode = rentCode.replace(/>غرف نوم</g, '> {t("rent.rooms_suffix")}<');
rentCode = rentCode.replace(/\{unit\.type\} - \{unit\.rooms\} /g, '{unit.type} - {unit.rooms}');
fs.writeFileSync('src/features/rent/Rent.tsx', rentCode);

// Resale.tsx
let resaleCode = fs.readFileSync('src/features/resale/Resale.tsx', 'utf8');
resaleCode = resaleCode.replace(/>وحدات إعادة البيع</g, '>{t("resale.title")}<');
resaleCode = resaleCode.replace(/>إدارة وعرض الوحدات المتاحة لإعادة البيع في السوق\.</g, '>{t("resale.subtitle")}<');
resaleCode = resaleCode.replace(/>تصفية</g, '>{t("search.filter")}<');
resaleCode = resaleCode.replace(/>إضافة وحدة</g, '>{t("resale.add_unit")}<');
resaleCode = resaleCode.replace(/>الوحدة والمشروع</g, '>{t("resale.type_unit")}<');
resaleCode = resaleCode.replace(/>نوع الوحدة</g, '>{t("resale.type")}<');
resaleCode = resaleCode.replace(/>غرف نوم</g, '> {t("resale.rooms")}<');
resaleCode = resaleCode.replace(/\{unit\.type\} - \{unit\.rooms\} /g, '{unit.type} - {unit.rooms}');
resaleCode = resaleCode.replace(/>السعر</g, '>{t("resale.price")}<');
resaleCode = resaleCode.replace(/>المالك</g, '>{t("resale.owner")}<');
resaleCode = resaleCode.replace(/>المساحة</g, '>{t("rent.area")}<');
resaleCode = resaleCode.replace(/>عدد الغرف</g, '>{t("rent.rooms")}<');
resaleCode = resaleCode.replace(/>إلغاء</g, '>{t("rent.cancel")}<');
resaleCode = resaleCode.replace(/>إضافة</g, '>{t("rent.add")}<');
resaleCode = resaleCode.replace(/>المشروع</g, '>{t("rent.project")}<');
fs.writeFileSync('src/features/resale/Resale.tsx', resaleCode);
