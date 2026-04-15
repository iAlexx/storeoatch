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
import { buildFinancialSnapshots, unitEconomics } from "@/lib/financialModel";

const snapshots = buildFinancialSnapshots();
const economics = unitEconomics();

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="glass-card"
    >
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
    <main className="page-shell">
      <header className="hero glass-card hero-3d">
        <p className="badge">Unicorn SaaS • Spatial Investor Experience</p>
        <h1>دكانك | SyriaStore Builder</h1>
        <p>
          منصة SaaS عالمية بتجربة Vision Pro ثلاثية الأبعاد، مصممة للهاتف أولًا، وتربط بين النمو
          الفيروسي والنموذج المالي الواقعي من أول يوم.
        </p>
        <div className="cta-row">
          <button>ابدأ الجولة التفاعلية</button>
          <button className="ghost">تحميل Investor Brief</button>
        </div>
      </header>

      <SectionCard title="1) Core Experience — Apple Vision Pro 3D System">
        <ul>
          <li>Floating UI layers مع عمق Z حقيقي عبر transforms وmotion.</li>
          <li>Galaxy background متحرك + fog + neon orbs + cinematic gradients.</li>
          <li>Glassmorphism Ultra: blur من 20 إلى 50px وحدود متوهجة.</li>
          <li>GSAP + Framer Motion لسيناريوهات scroll cinematic وmicro-interactions.</li>
        </ul>
      </SectionCard>

      <SectionCard title="2) Mobile-First Engine (Critical)">
        <ul>
          <li>تصميم mobile-first بالكامل مع stacks عمودية للبطاقات.</li>
          <li>Swipe-like section snapping على الشاشات الصغيرة.</li>
          <li>لا overflow أفقي، وتحسين أداء motion للوصول إلى 60fps.</li>
          <li>Touch-first controls للعناصر التفاعلية والرسوم البيانية.</li>
        </ul>
      </SectionCard>

      <SectionCard title="3) Interactive Investor Pitch Deck">
        <div className="grid-2">
          <ul>
            <li>Problem: فوضى البيع عبر WhatsApp/Facebook بدون نظام.</li>
            <li>Market: آلاف التجار المحليين القابلين للتحول الرقمي.</li>
            <li>Solution: Store Builder + Payment/COD + automation funnels.</li>
            <li>Demo: SaaS simulation لرحلة التاجر من onboarding إلى checkout.</li>
            <li>Go-To-Market + funnel acquisition + first 100 merchants.</li>
          </ul>
          <ul>
            <li>Business Model: اشتراك شهري متعدد الطبقات + add-ons.</li>
            <li>Unit Economics: هامش مرتفع وتكلفة خدمة منخفضة.</li>
            <li>3-Year Financial Projection مع churn وexpansion.</li>
            <li>Competitive Moat: سرعة، توطين، بساطة، تكلفة.</li>
            <li>Investment Ask: جولة Seed صغيرة 5K–10K للاختراق الأول.</li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard title="4) Business Model + Psychology Pricing">
        <div className="pricing-grid">
          <article>
            <h3>Starter — $5</h3>
            <p>سعر دخول منخفض لإزالة مقاومة البداية وزيادة التحويل.</p>
          </article>
          <article>
            <h3>Growth — $10</h3>
            <p>الخطة الأساسية للقيمة اليومية والأكثر قابلية للتوسع.</p>
          </article>
          <article>
            <h3>Pro — $20</h3>
            <p>للتجار النشطين مع مزايا automation وتكاملات متقدمة.</p>
          </article>
        </div>
        <p>
          الاستراتيجية: البداية بسعر منخفض لتسريع adoption ثم رفع ARPU تدريجيًا عبر add-ons ورفع
          tiers بعد إثبات القيمة، مع حماية churn عبر onboarding سريع ودعم مباشر.
        </p>
      </SectionCard>

      <SectionCard title="5) Unit Economics Engine (Realistic)">
        <div className="kpi-grid">
          <div>
            <h3>ARPU</h3>
            <p>${economics.arpu}</p>
          </div>
          <div>
            <h3>Cost / Merchant</h3>
            <p>${economics.cogs}</p>
          </div>
          <div>
            <h3>Gross Margin</h3>
            <p>{economics.margin}%</p>
          </div>
          <div>
            <h3>LTV</h3>
            <p>${economics.ltv}</p>
          </div>
          <div>
            <h3>CAC</h3>
            <p>${economics.cac}</p>
          </div>
          <div>
            <h3>LTV/CAC</h3>
            <p>{economics.ltvCac}x</p>
          </div>
        </div>
        <p>Break-even التشغيلي يتحقق تقريبًا عند {economics.breakEvenMerchants} تاجر نشط.</p>
      </SectionCard>

      <SectionCard title="6) Financial Model — 3 Year Simulation">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Merchants</th>
                <th>MRR</th>
                <th>ARR</th>
                <th>Gross Profit</th>
                <th>Gross Margin</th>
              </tr>
            </thead>
            <tbody>
              {snapshots.map((s) => (
                <tr key={s.year}>
                  <td>{s.year}</td>
                  <td>{s.merchants.toLocaleString()}</td>
                  <td>${s.mrr.toLocaleString()}</td>
                  <td>${s.arr.toLocaleString()}</td>
                  <td>${s.grossProfit.toLocaleString()}</td>
                  <td>{s.grossMargin}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          الافتراضات تشمل churn يتناقص من 4.5% إلى 3%، وexpansion revenue يرتفع من 8% إلى 17%
          مع توسع الميزات.
        </p>
      </SectionCard>

      <SectionCard title="7) Go-To-Market + Viral Loop">
        <ul>
          <li>Facebook groups + Telegram communities للوصول المباشر للتجار.</li>
          <li>Influencer partnerships مع creators في التجارة المحلية.</li>
          <li>Referral engine: دعوة تاجر جديد = شهر مجاني.</li>
          <li>Viral loop: merchant launches store → shares link → attracts merchants.</li>
        </ul>
      </SectionCard>

      <SectionCard title="8) First 100 Customers Strategy">
        <ul>
          <li>Manual onboarding مع white-glove setup.</li>
          <li>Direct support على WhatsApp/Telegram.</li>
          <li>حملات micro-community في مدن مستهدفة.</li>
          <li>Success stories مصورة لتحفيز social proof.</li>
        </ul>
      </SectionCard>

      <SectionCard title="9) Risk Analysis + Mitigation">
        <div className="grid-2">
          <ul>
            <li>خطر: تبني ضعيف في البداية.</li>
            <li>الحل: UX مبسط جدًا + onboarding خلال 10 دقائق.</li>
            <li>خطر: مشاكل الدفع الإلكتروني.</li>
            <li>الحل: COD-first + بوابات دفع تدريجية.</li>
          </ul>
          <ul>
            <li>خطر: منافسة منصات عالمية.</li>
            <li>الحل: Local-first localization + تكلفة أقل.</li>
            <li>خطر: ضغط البنية التحتية مع النمو.</li>
            <li>الحل: Node horizontal scaling + managed Postgres.</li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard title="10) Competitive Analysis">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Speed</th>
                <th>Localization</th>
                <th>Simplicity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shopify</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Facebook Commerce</td>
                <td>Medium</td>
                <td>High</td>
                <td>Low</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Manual WhatsApp Selling</td>
                <td>Low</td>
                <td>High</td>
                <td>Low</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>دكانك</td>
                <td>High</td>
                <td>Very High</td>
                <td>Very High</td>
                <td>Very Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="11) Product Roadmap">
        <ul>
          <li>Month 1: MVP (store builder + checkout + analytics).</li>
          <li>Month 3: Beta launch + referral engine.</li>
          <li>Month 6: 100–500 merchants + growth loops.</li>
          <li>Year 1: Scaling infra + partnerships.</li>
          <li>Year 2: AI automation for catalog, campaigns, support.</li>
        </ul>
      </SectionCard>

      <SectionCard title="12-15) Stack, Deployment & Final Investment CTA">
        <ul>
          <li>Frontend: Next.js + React + Framer Motion + GSAP + Three.js-ready layers.</li>
          <li>Backend: Node.js/Express + PostgreSQL architecture plan.</li>
          <li>Deployment: GitHub + Vercel-ready + typed codebase.</li>
          <li>Final Ask: Seed check $5K–$10K لتمويل GTM وتفعيل أول wave نمو.</li>
        </ul>
        <div className="cta-final">Ready to Build the Region’s First 3D Commerce Operating System.</div>
      </SectionCard>
    </main>
  );
}
