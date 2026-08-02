import { Calendar, ChevronDown, Download, CircleDollarSign, Users, Handshake, TrendingUp, TrendingDown, MoreVertical } from "lucide-react";

import { useI18n } from "../../contexts/I18nContext";
export function Reports() {
  const { t } = useI18n();
  return (
    <div className="flex flex-col w-full">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-2">التقارير والتحليلات</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">نظرة عامة على أداء المبيعات والمؤشرات الرئيسية</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative bg-surface-container-highest rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-surface-variant transition-colors shadow-sm">
            <Calendar className="w-4 h-4 text-on-surface-variant" />
            <span className="font-label-md text-label-md text-on-surface">آخر 30 يوم</span>
            <ChevronDown className="w-4 h-4 text-on-surface-variant" />
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md shadow-md hover:shadow-lg transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            تصدير التقرير
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
              <CircleDollarSign className="w-5 h-5" />
            </div>
            <span className="flex items-center text-secondary font-label-sm text-label-sm bg-secondary/10 px-2 py-1 rounded-full gap-1">
              <TrendingUp className="w-4 h-4" /> 12.5%
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">إجمالي الإيرادات</h3>
            <p className="font-headline-lg text-headline-lg text-on-surface">$1,245,000</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="flex items-center text-secondary font-label-sm text-label-sm bg-secondary/10 px-2 py-1 rounded-full gap-1">
              <TrendingUp className="w-4 h-4" /> 8.2%
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">العملاء المحتملين</h3>
            <p className="font-headline-lg text-headline-lg text-on-surface">3,492</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <Handshake className="w-5 h-5" />
            </div>
            <span className="flex items-center text-error font-label-sm text-label-sm bg-error/10 px-2 py-1 rounded-full gap-1">
              <TrendingDown className="w-4 h-4" /> 2.1%
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">الصفقات المغلقة</h3>
            <p className="font-headline-lg text-headline-lg text-on-surface">428</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-inverse-primary/5 rounded-full blur-2xl group-hover:bg-inverse-primary/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-inverse-primary text-on-primary-container flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-on-primary-fixed" />
            </div>
            <span className="flex items-center text-secondary font-label-sm text-label-sm bg-secondary/10 px-2 py-1 rounded-full gap-1">
              <TrendingUp className="w-4 h-4" /> 15.3%
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">معدل التحويل</h3>
            <p className="font-headline-lg text-headline-lg text-on-surface">12.8%</p>
          </div>
        </div>
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Trend Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">اتجاه الإيرادات</h2>
              <p className="font-label-sm text-label-sm text-on-surface-variant">النمو مقارنة بالشهر السابق</p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
              <MoreVertical className="w-5 h-5 text-on-surface-variant" />
            </button>
          </div>
          <div className="flex-1 min-h-[300px] w-full relative flex items-end justify-between pt-10">
            {/* Abstract Bar Chart using CSS */}
            <div className="w-[8%] bg-primary/20 rounded-t-lg h-[30%] relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$45K</div>
            </div>
            <div className="w-[8%] bg-primary/40 rounded-t-lg h-[45%] relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$62K</div>
            </div>
            <div className="w-[8%] bg-primary/30 rounded-t-lg h-[35%] relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$50K</div>
            </div>
            <div className="w-[8%] bg-primary/60 rounded-t-lg h-[60%] relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$85K</div>
            </div>
            <div className="w-[8%] bg-primary/50 rounded-t-lg h-[55%] relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$75K</div>
            </div>
            <div className="w-[8%] bg-primary/80 rounded-t-lg h-[80%] relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$110K</div>
            </div>
            <div className="w-[8%] bg-primary rounded-t-lg h-[100%] shadow-[0_0_15px_rgba(45,91,255,0.4)] relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$140K</div>
            </div>
          </div>
          <div className="flex justify-between mt-4 border-t border-outline-variant/30 pt-4 px-2">
            <span className="font-label-sm text-on-surface-variant">{t("reports.saturday")}</span>
            <span className="font-label-sm text-on-surface-variant">{t("reports.sunday")}</span>
            <span className="font-label-sm text-on-surface-variant">{t("reports.monday")}</span>
            <span className="font-label-sm text-on-surface-variant">{t("reports.tuesday")}</span>
            <span className="font-label-sm text-on-surface-variant">{t("reports.wednesday")}</span>
            <span className="font-label-sm text-on-surface-variant">{t("reports.thursday")}</span>
            <span className="font-label-sm text-on-surface-variant text-primary font-bold">{t("reports.friday")}</span>
          </div>
        </div>

        {/* Doughnut Chart Area */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">{t("reports.client_distribution")}</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="w-48 h-48 rounded-full border-[16px] border-surface-container relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-r-transparent rotate-45"></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-secondary border-b-transparent border-l-transparent rotate-12"></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-tertiary border-b-transparent border-t-transparent border-r-transparent -rotate-12"></div>
              <div className="text-center">
                <span className="block font-headline-lg text-headline-lg text-on-surface">100%</span>
                <span className="block font-label-sm text-label-sm text-on-surface-variant">{t("reports.total")}</span>
              </div>
            </div>
            
            <div className="w-full mt-8 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="font-label-md text-label-md text-on-surface">{t("reports.big_companies")}</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="font-label-md text-label-md text-on-surface">{t("reports.medium")}</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                  <span className="font-label-md text-label-md text-on-surface">{t("reports.startup")}</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">{t("reports.sales_reps_performance")}</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant">{t("reports.top_4")}</p>
          </div>
        </div>
        <div className="space-y-6">
          {/* Rep 1 */}
          <div className="flex items-center gap-4">
            <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1wpzFvDI4JYOALgFiTId_0wiASzcXJjFaXQy7tCDfgy3OmF4QIqCMFO2S6sDzof5Dv20AuZkaJtKMcpX8Aoisey3puHj8iiDSyoF70NLUp4KFPEKTagoak_CvKiC6d4_C37lbVqo0--0EcV4HcpoNGo6olQQakmxuX5PVeZzIzQxq7aEC-jsdwck75NrwtFqgZCYD3WdALzyhuJcI5QSM8zmPe-Gg4eWZ6xN-929_wbf3rbWMLDGIg" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-label-md text-label-md text-on-surface">{t("dashboard.ahmed_mahmoud")}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">$125,000</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          {/* Rep 2 */}
          <div className="flex items-center gap-4">
            <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAlTZXTFeb0sJHIO7MQvimF_RE_x_ToSdcrMZNp9ytgcX1-zC2VdcRp4MoNXxmENuX5F9GfDidyZXjQTxaNyTwlRtjrUJWllUH6qFI4lxQCHHozzHSLTZxcVILKkgImuA83t7CcPTMyKQBWGORWCBkXjxDxjofxGV1_1Lo9GaSbZ_opTMteQJDS-eKmjlfTAtoo-DxIczEgznCagnDsAsMBD-hrXIRKROfmFCvhhQGtzhsYXWVs_2APw" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-label-md text-label-md text-on-surface">{t("dashboard.sara_khalil")}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">$98,500</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          {/* Rep 3 */}
          <div className="flex items-center gap-4">
            <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdTPQrrLEHQkhCAoGLI7-LGIJMPPVQ-3lMQi3QKh_s_OyhHStFj4c1FirGMxKcdlgiAzKrjtHto1pBj42QJ0JJTkp8S2KFIpY8Ja4wZQ4tvh5uI-m1BX4T_FgeQEanHcej4dlFOKsb09--l1_VaOI8IdJf7EpQdwXSmxomDD9NXMH-OcGr00ZF-aMSKfL38pgZRxIuPHeMmFfF3-OCWHlkJJA1FPpNz0GcmbaYm9tSsSNqZBMzsLAtsw" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-label-md text-label-md text-on-surface">عمر حسن</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">$75,200</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
