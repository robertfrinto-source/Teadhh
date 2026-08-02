const fs = require('fs');

const arMore = `
    "common.under_development": "تحت التطوير ⏳",
    "common.under_development_desc": "هذه الصفحة قيد التطوير حالياً، وسيتم إضافة المزيد من التفاصيل قريباً.",
`;

const enMore = `
    "common.under_development": "Under Development ⏳",
    "common.under_development_desc": "This page is currently under development, more details will be added soon.",
`;

let code = fs.readFileSync('src/contexts/I18nContext.tsx', 'utf8');

code = code.replace(/"settings\.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",/, '"settings.dark_mode_desc": "تفعيل مظهر واجهة المستخدم الداكن",' + arMore);
code = code.replace(/"settings\.dark_mode_desc": "Enable dark user interface appearance",/, '"settings.dark_mode_desc": "Enable dark user interface appearance",' + enMore);

fs.writeFileSync('src/contexts/I18nContext.tsx', code);
