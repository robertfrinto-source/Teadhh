const fs = require('fs');

const arMore = `
    "marketplace.title": "السوق العقاري",
    "marketplace.subtitle": "تصفح جميع وحدات إعادة البيع والإيجار المتاحة.",
    "marketplace.all": "الكل",
    "marketplace.resale": "إعادة بيع",
    "marketplace.rent": "للإيجار",
    "marketplace.price": "السعر:",
    "marketplace.area": "المساحة:",
`;

const enMore = `
    "marketplace.title": "Real Estate Marketplace",
    "marketplace.subtitle": "Browse all available resale and rent units.",
    "marketplace.all": "All",
    "marketplace.resale": "Resale",
    "marketplace.rent": "Rent",
    "marketplace.price": "Price:",
    "marketplace.area": "Area:",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/g, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/g, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);

// Marketplace.tsx
let marketCode = fs.readFileSync('src/features/marketplace/Marketplace.tsx', 'utf8');

marketCode = marketCode.replace(/>السوق العقاري</g, '>{t("marketplace.title")}<');
marketCode = marketCode.replace(/>تصفح جميع وحدات إعادة البيع والإيجار المتاحة\.</g, '>{t("marketplace.subtitle")}<');
marketCode = marketCode.replace(/>الكل</g, '>{t("marketplace.all")}<');
marketCode = marketCode.replace(/>إعادة بيع</g, '>{t("marketplace.resale")}<');
marketCode = marketCode.replace(/>للإيجار</g, '>{t("marketplace.rent")}<');
marketCode = marketCode.replace(/>السعر:</g, '>{t("marketplace.price")}<');
marketCode = marketCode.replace(/>المساحة:</g, '>{t("marketplace.area")}<');

fs.writeFileSync('src/features/marketplace/Marketplace.tsx', marketCode);

