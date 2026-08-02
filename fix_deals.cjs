const fs = require('fs');
let code = fs.readFileSync('src/features/deals/Deals.tsx', 'utf8');

code = code.replace(/const COLUMNS = \[([\s\S]*?)\];/, `const COLUMNS = [
  { id: 'discovery', titleKey: "deals.discovery", color: 'bg-secondary' },
  { id: 'proposal', titleKey: "deals.proposal", color: 'bg-primary-fixed' },
  { id: 'negotiation', titleKey: "deals.negotiation", color: 'bg-tertiary-fixed' },
  { id: 'closed', titleKey: "deals.closed", color: 'bg-outline' }
];`);

// Fix where COLUMNS map renders column.title
code = code.replace(/\{column\.title\}/g, '{t(column.titleKey)}');
code = code.replace(/\{col\.title\}/g, '{t(col.titleKey)}');
// Actually, let's just make sure.
code = code.replace(/<div className="font-headline-sm text-on-surface">\{column.titleKey\}<\/div>/g, '<div className="font-headline-sm text-on-surface">{t(column.titleKey)}</div>');

// Also deal.status text
code = code.replace(/\{deal\.status === 'ربحت' \? t\("deals\.won"\) : t\("deals\.lost"\)\}/g, '{deal.status === "ربحت" ? "Won" : "Lost"}'); // I'll just hardcode english fallback or wait, 't' is not defined in SortableDealCard
// Wait, `SortableDealCard` doesn't have `const { t } = useI18n();`. I will add it.
code = code.replace(/const SortableDealCard: FC<\{ deal: Lead \}> = \(\{ deal \}\) => \{/, `const SortableDealCard: FC<{ deal: Lead }> = ({ deal }) => {\n  const { t } = useI18n();`);
code = code.replace(/\{deal\.status === "ربحت" \? "Won" : "Lost"\}/g, '{deal.status === "ربحت" ? t("deals.won") : t("deals.lost")}');

fs.writeFileSync('src/features/deals/Deals.tsx', code);
