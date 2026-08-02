import { Wallet, ArrowRightLeft, Users, ArrowUpRight, ArrowDownRight, Plus, Phone, CheckSquare, Mail, ArrowLeft } from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";

export function Dashboard() {
  const { t } = useI18n();
  return (
    <div className="flex flex-col w-full rtl:text-right">
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">نظرة عامة</h1>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-surface-container-highest text-on-surface font-label-md hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm">
            تصدير التقرير
          </button>
          <button className="px-6 py-3 rounded-xl bg-primary text-on-primary font-label-md hover:opacity-90 transition-all shadow-md shadow-primary/20 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            صفقة جديدة
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">الإيرادات الكلية</span>
              <Wallet className="text-primary/80 bg-primary/10 p-2 rounded-lg w-10 h-10" />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-display-lg text-display-lg text-on-surface font-bold">$124,500</span>
              <span className="font-label-md text-label-md text-secondary bg-secondary/10 px-2 py-1 rounded-md flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                +14.5%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">معدل التحويل</span>
              <ArrowRightLeft className="text-secondary/80 bg-secondary/10 p-2 rounded-lg w-10 h-10" />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-display-lg text-display-lg text-on-surface font-bold">28.4%</span>
              <span className="font-label-md text-label-md text-secondary bg-secondary/10 px-2 py-1 rounded-md flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                +2.1%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors duration-500"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">العملاء النشطين</span>
              <Users className="text-tertiary/80 bg-tertiary/10 p-2 rounded-lg w-10 h-10" />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-display-lg text-display-lg text-on-surface font-bold">1,482</span>
              <span className="font-label-md text-label-md text-error bg-error/10 px-2 py-1 rounded-md flex items-center">
                <ArrowDownRight className="w-3.5 h-3.5 ml-1" />
                -0.5%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">نمو المبيعات</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">تحليل الأداء للربع الحالي</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-sm hover:bg-primary/10 transition-colors">شهري</button>
              <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-sm shadow-sm">أسبوعي</button>
            </div>
          </div>
          <div className="relative h-[300px] w-full">
            <svg className="w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 1000 300">
              <defs>
                <linearGradient id="primaryGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0040df" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#0040df" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <g className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1">
                <line x1="0" x2="1000" y1="50" y2="50"></line>
                <line x1="0" x2="1000" y1="125" y2="125"></line>
                <line x1="0" x2="1000" y1="200" y2="200"></line>
                <line x1="0" x2="1000" y1="275" y2="275"></line>
              </g>
              <g className="text-on-surface-variant/50 font-label-sm text-[12px]">
                <text x="10" y="45">$100k</text>
                <text x="10" y="120">$75k</text>
                <text x="10" y="195">$50k</text>
                <text x="10" y="270">$25k</text>
              </g>
              <path d="M 50 250 C 150 220, 250 180, 350 150 C 450 120, 550 160, 650 100 C 750 40, 850 80, 950 50 L 950 275 L 50 275 Z" fill="url(#primaryGradient)"></path>
              <path className="drop-shadow-[0_4px_8px_rgba(0,64,223,0.3)]" d="M 50 250 C 150 220, 250 180, 350 150 C 450 120, 550 160, 650 100 C 750 40, 850 80, 950 50" fill="none" stroke="#0040df" strokeLinecap="round" strokeWidth="3"></path>
              <circle className="cursor-pointer hover:r-8 transition-all" cx="650" cy="100" fill="#ffffff" r="6" stroke="#0040df" strokeWidth="2"></circle>
            </svg>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)] flex flex-col">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">{t("dashboard.recent_activity")}</h2>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            <div className="flex gap-4 relative group">
              <div className="absolute right-5 top-10 bottom-[-24px] w-[2px] bg-surface-container-highest group-last:hidden"></div>
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 z-10 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-label-md text-label-md text-on-surface mb-1">مكالمة مع شركة الأفق</div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-2">تمت مناقشة شروط العقد الجديد ومراجعة التسعير.</p>
                <span className="font-label-sm text-label-sm text-outline">منذ ساعتين</span>
              </div>
            </div>
            
            <div className="flex gap-4 relative group">
              <div className="absolute right-5 top-10 bottom-[-24px] w-[2px] bg-surface-container-highest group-last:hidden"></div>
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 z-10 shadow-sm">
                <CheckSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="font-label-md text-label-md text-on-surface mb-1">إغلاق صفقة مشروع النور</div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-2">تم التوقيع على العقد بنجاح بقيمة $45,000.</p>
                <span className="font-label-sm text-label-sm text-outline">أمس, 14:30</span>
              </div>
            </div>

            <div className="flex gap-4 relative group">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 z-10 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-label-md text-label-md text-on-surface mb-1">إرسال مقترح لـ مجموعة المدار</div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-2">تم إرسال العرض المبدئي لتطوير المنصة.</p>
                <span className="font-label-sm text-label-sm text-outline">أمس, 09:15</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">{t("dashboard.latest_deals")}</h2>
          <button className="text-primary hover:text-on-primary-fixed-variant font-label-md transition-colors flex items-center">
            {t("dashboard.view_all")}
            <ArrowLeft className="w-5 h-5 mr-1" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="text-on-surface-variant font-label-sm uppercase tracking-wider border-b border-surface-container-highest">
                <th className="pb-4 font-semibold w-1/3">{t("dashboard.client_company")}</th>
                <th className="pb-4 font-semibold">{t("dashboard.stage")}</th>
                <th className="pb-4 font-semibold">{t("dashboard.value")}</th>
                <th className="pb-4 font-semibold">{t("dashboard.expected_close_date")}</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md">
              <tr className="border-b border-surface-container-lowest hover:bg-surface-container-low/50 transition-colors group">
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-bold">
                      ت
                    </div>
                    <div>
                      <div className="font-label-md text-on-surface group-hover:text-primary transition-colors">{t("dashboard.tech_company")}</div>
                      <div className="text-sm text-on-surface-variant">{t("dashboard.ahmed_mahmoud")}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary ml-2"></span>
                    تفاوض
                  </span>
                </td>
                <td className="py-5 font-semibold text-on-surface">$120,000</td>
                <td className="py-5 text-on-surface-variant">{t("dashboard.date_oct_15")}</td>
              </tr>
              <tr className="border-b border-surface-container-lowest hover:bg-surface-container-low/50 transition-colors group">
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-bold">
                      م
                    </div>
                    <div>
                      <div className="font-label-md text-on-surface group-hover:text-primary transition-colors">{t("dashboard.build_group")}</div>
                      <div className="text-sm text-on-surface-variant">{t("dashboard.sara_khalil")}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary ml-2"></span>
                    مقترح
                  </span>
                </td>
                <td className="py-5 font-semibold text-on-surface">$85,000</td>
                <td className="py-5 text-on-surface-variant">{t("dashboard.date_oct_22")}</td>
              </tr>
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-bold">
                      و
                    </div>
                    <div>
                      <div className="font-label-md text-on-surface group-hover:text-primary transition-colors">{t("dashboard.creative_agency")}</div>
                      <div className="text-sm text-on-surface-variant">{t("dashboard.khaled_omar")}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary ml-2"></span>
                    تأهيل
                  </span>
                </td>
                <td className="py-5 font-semibold text-on-surface">$45,000</td>
                <td className="py-5 text-on-surface-variant">{t("dashboard.date_nov_05")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
