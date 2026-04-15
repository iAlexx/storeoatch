"use client";

import { motion } from "framer-motion";
import { buildMrrProjection } from "@/lib/financialModel";

type SceneProps = {
  id: string;
  title: string;
  question: string;
  children: React.ReactNode;
};

const packages = [
  { name: "البداية", price: "$5", note: "دخول سريع بلا مخاطرة" },
  { name: "النمو", price: "$10", note: "الخيار الأساسي للتاجر النشط" },
  { name: "الاحتراف", price: "$20", note: "توسع أعلى مع أدوات متقدمة" }
];

const market = [
  { name: "إجمالي السوق", value: "$1.2B" },
  { name: "السوق الممكن", value: "$320M" },
  { name: "السوق المستهدف", value: "$25M" }
];

const opportunity = [
  { value: "120K", label: "تاجر يبيع دون متجر منظم" },
  { value: "78%", label: "يريدون متجرًا أسرع من الطرق اليدوية" },
  { value: "$8", label: "متوسط إنفاق شهري مناسب كبداية" }
];

const growthChannels = ["مجموعات فيسبوك", "مجتمعات تيليغرام", "نظام الإحالة"];

const yearlyMrr = buildMrrProjection().map((year) => ({
  ...year,
  year: year.year.replace("Year", "السنة")
}));

function Scene({ id, title, question, children }: SceneProps) {
  return (
    <motion.section
      id={id}
      className="scene glass-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="scene-question">{question}</p>
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}

export function InvestorPlatformContent() {
  return (
    <main className="deck-shell">
      <Scene id="scene-1" title="المشهد 1 — الغلاف" question="هل الفكرة واضحة فورًا؟">
        <h1>دكانك</h1>
        <p className="hero-line">منصة تبني متجر التاجر المحلي خلال دقائق.</p>
      </Scene>

      <Scene id="scene-2" title="المشهد 2 — المشكلة" question="ما الذي يؤلم التاجر اليوم؟">
        <div className="cards-grid">
          <article className="mini-card">الطلبات موزعة بين محادثات متعددة.</article>
          <article className="mini-card">لا يوجد تتبع واضح للطلبات والدفع.</article>
          <article className="mini-card">الإعداد الحالي بطيء ويستهلك وقت التاجر.</article>
        </div>
      </Scene>

      <Scene id="scene-3" title="المشهد 3 — الفرصة" question="هل حجم الفرصة واضح؟">
        <div className="cards-grid">
          {opportunity.map((item) => (
            <article key={item.label} className="mini-card stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </Scene>

      <Scene id="scene-4" title="المشهد 4 — الحل" question="كيف نحل المشكلة ببساطة؟">
        <ol className="steps-list">
          <li>إنشاء متجر جاهز في دقائق.</li>
          <li>إدارة الطلبات من لوحة واحدة واضحة.</li>
          <li>نشر رابط المتجر وبدء المبيعات فورًا.</li>
        </ol>
      </Scene>

      <Scene id="scene-5" title="المشهد 5 — المنتج" question="هل المنتج مفهوم بصريًا؟">
        <div className="mock-grid">
          <div className="mock-card">واجهة إنشاء المتجر</div>
          <div className="mock-card">واجهة إدارة الطلبات</div>
          <div className="mock-card">واجهة متابعة الأداء</div>
        </div>
      </Scene>

      <Scene id="scene-6" title="المشهد 6 — نموذج الربح" question="هل التسعير واضح ومقنع؟">
        <div className="cards-grid">
          {packages.map((plan) => (
            <article key={plan.name} className="mini-card stat-card">
              <strong>{plan.price}</strong>
              <span>{plan.name}</span>
              <small>{plan.note}</small>
            </article>
          ))}
        </div>
        <p className="short-note">نبدأ بسعر منخفض لتسريع الدخول ثم نرفع القيمة عبر مزايا إضافية للتجار النشطين.</p>
      </Scene>

      <Scene id="scene-7" title="المشهد 7 — السوق" question="هل السوق المستهدف محدد؟">
        <div className="bars-wrap">
          {market.map((item, index) => (
            <div key={item.name} className="bar-item">
              <p>{item.name}</p>
              <div className="bar-track">
                <span style={{ width: `${100 - index * 34}%` }} />
              </div>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </Scene>

      <Scene id="scene-8" title="المشهد 8 — النمو" question="هل خطة جذب العملاء مباشرة؟">
        <div className="cards-grid">
          {growthChannels.map((channel) => (
            <article key={channel} className="mini-card">
              {channel}
            </article>
          ))}
        </div>
      </Scene>

      <Scene id="scene-9" title="المشهد 9 — المالية" question="هل الإيراد الشهري مفهوم خلال ثوانٍ؟">
        <div className="bars-wrap">
          {yearlyMrr.map((year, index) => (
            <div key={year.year} className="bar-item">
              <p>{year.year}</p>
              <div className="bar-track">
                <span style={{ width: `${25 + index * 35}%` }} />
              </div>
              <strong>${year.mrr.toLocaleString()}</strong>
            </div>
          ))}
        </div>
      </Scene>

      <Scene id="scene-10" title="المشهد 10 — الاستثمار" question="هل طلب الاستثمار محدد؟">
        <div className="cards-grid">
          <article className="mini-card stat-card">
            <strong>$10,000</strong>
            <span>حجم الجولة الأولى</span>
          </article>
          <article className="mini-card">45% تطوير المنتج</article>
          <article className="mini-card">35% اكتساب العملاء</article>
          <article className="mini-card">20% التشغيل والدعم</article>
        </div>
      </Scene>

      <Scene id="scene-11" title="المشهد 11 — الخاتمة" question="هل الرسالة النهائية قوية؟">
        <p className="hero-line">نبني منصة التجارة المحلية الأسرع وصولًا للربح.</p>
        <button type="button">ابدأ الشراكة الآن</button>
      </Scene>
    </main>
  );
}
