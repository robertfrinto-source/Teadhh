const fs = require('fs');
let code = fs.readFileSync('src/components/layout/TopBar.tsx', 'utf8');

code = code.replace(/placeholder="ابحث في السجلات، الصفقات\.\.\."/g, 'placeholder={t("topbar.search")}');
code = code.replace(/>مدير حسابات</g, '>{t("topbar.role")}<');

fs.writeFileSync('src/components/layout/TopBar.tsx', code);
