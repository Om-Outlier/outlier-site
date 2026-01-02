export type Service = {
  slug: string
  title: string
  description: string
  outcomes: string[]
  highlights: string[]
  category?: string
  bestFor?: string
  icon?: string
  cta?: string
}

export const services: Service[] = [
  {
    slug: 'custom-marketing-platforms',
    title: 'Custom Marketing & Commercial Platforms',
    description: 'When growth stalls because channels, data, and activations don’t work together.',
    category: 'Core Platforms & Data',
    bestFor: 'Brands with complex growth needs beyond campaigns or tools.',
    icon: '↗',
    cta: 'Explore when a custom platform makes sense →',
    outcomes: [
      'Faster launches without rebuilding each time',
      'Higher conversion from connected journeys'
    ],
    highlights: ['Composable architecture', 'Offer engines and wallets', 'Performance instrumentation']
  },
  {
    slug: 'line-mini-app-solutions',
    title: 'LINE & Mini App Solutions',
    description: 'When LINE is active but not driving measurable commercial impact.',
    category: 'Core Platforms & Data',
    bestFor: 'Teams using LINE as a core growth and loyalty channel.',
    icon: '☰',
    cta: 'See how LINE can become a revenue channel →',
    outcomes: [
      'More active members, not just followers',
      'Clear linkage between engagement and sales'
    ],
    highlights: ['Mini App UX and flows', 'E-commerce and couponing', 'Messaging automation']
  },
  {
    slug: 'crm-cdp-data-foundations',
    title: 'CRM/CDP & Data Foundations',
    description: 'When teams can’t activate data because there’s no single customer truth.',
    category: 'Core Platforms & Data',
    bestFor: 'Organizations struggling with fragmented customer data.',
    icon: '◆',
    cta: 'Understand what a usable data foundation looks like →',
    outcomes: [
      'Higher match rates across channels',
      'Faster, cleaner activation'
    ],
    highlights: ['Identity resolution', 'Data quality rules', 'Consent + privacy controls']
  },
  {
    slug: 'rag-genai-enablement',
    title: 'RAG / GenAI Enablement',
    description: 'When AI pilots exist but aren’t trusted, governed, or connected to real data.',
    category: 'Core Platforms & Data',
    bestFor: 'Teams exploring AI but needing control, safety, and real use cases.',
    icon: '◎',
    cta: 'See when AI copilots actually work →',
    outcomes: [
      'Faster answers with approved knowledge',
      'Productivity gains without compliance risk'
    ],
    highlights: ['Retrieval pipelines', 'Safety + governance', 'Human-in-the-loop tooling']
  },
  {
    slug: 'campaign-systems-activation-mechanics',
    title: 'Campaign Systems & Activation Mechanics',
    description: 'When every campaign is rebuilt from scratch and hard to govern.',
    category: 'Activation & Growth',
    bestFor: 'Teams running frequent campaigns across multiple channels.',
    icon: '↗',
    cta: 'Explore reusable activation systems →',
    outcomes: [
      'Faster rollout of new mechanics',
      'Better engagement without chaos'
    ],
    highlights: ['Offer and mission engines', 'Wallets, rewards, referrals', 'Governed campaign ops']
  },
  {
    slug: 'o2o-event-field-activation',
    title: 'O2O Event & Field Activation',
    description: 'When offline activity isn’t connected to data, rewards, or ROI.',
    category: 'Activation & Growth',
    bestFor: 'Brands running events, stores, or field teams.',
    icon: '◎',
    cta: 'See how offline connects to digital outcomes →',
    outcomes: [
      'Real attribution for offline actions',
      'Less fraud, smoother operations'
    ],
    highlights: [
      'QR / NFC / code-based participation at events, stores, and roadshows',
      'Staff-assisted validation flows (scan, approve, reward)',
      'Offline purchase or activity → online profile enrichment',
      'Real-time syncing into CRM/CDP and campaign systems',
      'Fraud prevention and audit logs for field execution'
    ]
  },
  {
    slug: 'data-activation',
    title: 'Data Activation (Manual + Automated)',
    description: 'When signals exist but don’t reliably turn into action.',
    category: 'Activation & Growth',
    bestFor: 'Teams with data but inconsistent execution.',
    icon: '↻',
    cta: 'Understand practical data activation →',
    outcomes: [
      'Higher activation throughput',
      'Better ROI from timely triggers'
    ],
    highlights: ['Audience building', 'Journey automation', 'Cross-channel orchestration']
  },
  {
    slug: 'growth-experimentation-commercial-optimization',
    title: 'Growth Experimentation & Commercial Optimization',
    description: 'When decisions are based on opinions instead of structured learning.',
    category: 'Optimization & Scale',
    bestFor: 'Teams serious about compounding growth, not one-off wins.',
    icon: '✦',
    cta: 'Learn how disciplined experimentation works →',
    outcomes: [
      'Faster learning cycles',
      'Measurable KPI lift'
    ],
    highlights: ['Experiment design + governance', 'Conversion rate optimization', 'Pricing, promo, and offer testing']
  },
  {
    slug: 'analytics-optimization-continuous-improvement',
    title: 'Analytics, Optimization & Continuous Improvement',
    description: 'When insights arrive too late to influence decisions.',
    category: 'Optimization & Scale',
    bestFor: 'Leaders who need visibility, not vanity dashboards.',
    icon: '◆',
    cta: 'See how we close the loop →',
    outcomes: [
      'Faster diagnosis of drop-offs',
      'Continuous KPI improvement'
    ],
    highlights: ['Product and marketing analytics', 'Attribution and performance reporting', 'Alerting and improvement cadences']
  },
  {
    slug: 'security-compliance-enterprise-readiness',
    title: 'Security, Compliance & Enterprise Readiness',
    description: 'When platforms can’t pass audits or enterprise approval.',
    category: 'Optimization & Scale',
    bestFor: 'Organizations with serious security and procurement requirements.',
    icon: '◆',
    cta: 'Understand enterprise-ready platforms →',
    outcomes: [
      'Faster approvals',
      'Lower operational risk'
    ],
    highlights: ['Access and key management', 'PII, consent, and retention controls', 'BCP/DR runbooks with monitoring']
  }
]

export type CaseStudy = {
  id: string
  title: string
  client: string
  industry: string
  impact: string
  metrics: string[]
  image?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fmcg-line-membership',
    title: 'LINE mini app overhaul readiness',
    client: 'Validated (Lab tested)',
    industry: 'LINE Platform',
    image: '/images/case-studies/line.jpg',
    impact:
      'Prepared a production-ready overhaul framework to migrate standard LINE LIFF experiences into a scalable LINE mini app — designed around habit loops, rewards, and partner activation.',
    metrics: [
      'End-to-end mini app architecture replacing standard LIFF flows',
      'Reward logic and habit loop mechanics tested in controlled environments',
      'Integration patterns for retail partner participation and campaign scaling',
      'Deployment playbook ready for brand rollout'
    ]
  },
  {
    id: 'genai-support',
    title: 'GenAI support copilot with RAG',
    client: 'Digital services company',
    industry: 'Services',
    image: '/images/case-studies/rag.webp',
    impact:
      'Designed an intelligent, on-brand GenAI copilot that turns internal knowledge into real-time, personalized support — learning continuously from customer behavior while operating within strict governance and legal guardrails.',
    metrics: [
      'Controlled RAG engine trained only on approved internal knowledge',
      'Built-in guardrails to ensure brand safety, accountability, and legal compliance',
      'Human-in-the-loop escalation for sensitive or high-impact interactions',
      'Self-learning feedback loop using real user input and behavior',
      'CRM-integrated intelligence to tailor responses by customer profile and context'
    ]
  },
  {
    id: 'fmcg-regional-qr-experience',
    title: 'Regional QR & experience engine at scale',
    client: 'Leading Ice Cream Brand in Southeast Asia',
    industry: 'FMCG | Regional (SEA)',
    image: '/images/case-studies/icecream_case_sea_qr.jpg',
    impact:
      'Designed and built a single QR-based system to serve millions of users across Southeast Asia, delivering localized customer experiences from one unified product code — while overcoming cross-country supply chain constraints.',
    metrics: [
      'One QR code across all SEA markets despite centralized manufacturing in Thailand',
      'Region-specific campaigns without changing packaging or logistics',
      'High-traffic architecture supporting millions of user interactions',
      'Faster regional rollouts with zero SKU fragmentation'
    ]
  },
  {
    id: 'fmcg-b2b-commerce-growth',
    title: 'B2B Customer Relationship & Growth Engine',
    client: 'National Retail Network in Thailand',
    industry: 'FMCG | B2B Commerce',
    image: '/images/case-studies/retail.jpg',
    impact:
      'Built a data-driven B2B relationship platform that transforms store-level data into tailored missions and actions — while enabling retail teams, brand teams, floor staff, third parties, and clients to work seamlessly together on one shared growth platform.',
    metrics: [
      '800+ Million THB in incremental revenue generated',
      'Increased basket size through targeted purchase missions',
      'Improved category penetration across existing outlets',
      'Accelerated NPD distribution with incentive-led execution',
      'Seamless collaboration across retail, brand, field, and partner teams',
      'Scalable platform adopted across a national store network'
    ]
  },
  {
    id: 'fmcg-data-activation-identity',
    title: 'Holistic data activation & identity engine',
    client: 'Leading Consumer Brand in Thailand',
    industry: 'FMCG | Data & Activation',
    image: '/images/case-studies/lazada_shopee_tiktok2.webp',
    impact:
      'Integrated eCommerce second-party data with first-party CRM to create a single customer identity — enabling enriched profiles and highly personalized activations across products, content, and promotions.',
    metrics: [
      'Single customer view across owned and partner data sources',
      'Tailored product, profile, and promotion by customer segment',
      'Higher relevance through behavior-based personalization',
      'Scalable activation framework across multiple channels',
      'Strong foundation for ongoing data enrichment and optimization'
    ]
  },
  {
    id: 'fmcg-live-commerce-engine',
    title: 'Closed-group live commerce revenue engine',
    client: 'National Distributor Network in Thailand',
    industry: 'FMCG | Live Commerce',
    image: '/images/case-studies/live_commerce.png',
    impact:
      'Designed and built a live commerce platform combining real-time broadcasting with full eCommerce capabilities — purpose-built for internal distributor networks to convert attention into immediate revenue.',
    metrics: [
      '80+ Million THB in revenue generated within 3 hours of live broadcast',
      'Seamless path from live viewing to instant order placement',
      'High conversion driven by exclusivity and real-time incentives',
      'Platform stable under peak concurrent usage',
      'Repeatable model for future live commerce events'
    ]
  },
  {
    id: 'fmcg-sales-route-to-market',
    title: 'Turning invisible outlets into visible growth opportunities',
    client: 'National Consumer Goods Business',
    industry: 'FMCG | Sales & Route-to-Market',
    image: '/images/case-studies/map.png',
    impact:
      'Designed a data-driven platform to identify retail whitespace by comparing the existing outlet universe against potential outlets using Google Maps data — enabling sales teams to spot, track, and act on growth opportunities directly from a mobile-first map interface.',
    metrics: [
      'Clear visibility of distribution gaps by area and retail format',
      'Sales teams able to discover new outlets directly from the field',
      'Real-time status tracking from opportunity to activation',
      'Map-based visualization replacing static reports and spreadsheets',
      'Mobile-first interface accelerating sales action and adoption'
    ]
  },
  {
    id: 'cv-mediapipe-pose-engagement',
    title: 'Motion-based engagement using MediaPipe Pose',
    client: 'Building',
    industry: 'Computer Vision',
    image: '/images/case-studies/mediapipe_pose.png',
    impact:
      'Validated a scalable interaction system using Google MediaPipe Pose to connect physical body movement with digital experiences — enabling users to trigger actions, rewards, and content through real-world motion.',
    metrics: [
      'Real-time body pose detection using MediaPipe Pose',
      'Motion-to-action mapping for interactive mechanics',
      'Offline-to-online (O2O) experience design',
      'Architecture tested for large-scale concurrent usage'
    ]
  },
  {
    id: 'fmcg-consumer-crm-engine',
    title: 'Consumer CRM built to drive repeat and growth',
    client: 'Real impact / Validated (Lab tested)',
    industry: 'FMCG | Consumer CRM',
    image: '/images/case-studies/hand_with_mobile_crm.png',
    impact:
      'Built a full-loop FMCG consumer CRM engine that connects brand strategy to execution — translating brand direction into targeted campaigns, missions, and mechanics designed to drive penetration, frequency, and loyalty.',
    metrics: [
      'CRM strategy mapped to brand and category role',
      'Tailored campaign mechanics by segment and behavior',
      'Mission-based engagement designed for repeat participation',
      'Data-driven optimization across every campaign cycle',
      'Built to scale across brands, SKUs, and channels'
    ]
  },
  {
    id: 'sustainability-platform-activation',
    title: 'Turning sustainability into action and engagement',
    client: 'Building',
    industry: 'Sustainability Platform',
    image: '/images/case-studies/esg.png',
    impact:
      'Designed a sustainability activation platform that connects verified third-party actions with brand-led engagement — helping brands communicate sustainability in a way that drives participation, loyalty, and conversion.',
    metrics: [
      'Credible sustainability claims backed by third-party systems',
      'Action-based engagement instead of passive messaging',
      'Seamless integration into CRM, loyalty, and campaign platforms',
      'Designed to scale across products, campaigns, and markets'
    ]
  },
  {
    id: 'dtc-commerce-platform',
    title: 'DTC Commerce Platform',
    client: 'Real impact',
    industry: 'DTC Commerce',
    image: '/images/case-studies/fmcg_ecommerce_online_dtc.png',
    impact:
      'Delivered a brand-owned DTC platform that combines commerce, incentives, and data — enabling brands to grow direct sales while keeping full ownership of customer relationships and margins.',
    metrics: [
      'Seamless integration with logistics and payment providers',
      'Brand-specific promotions and mission mechanics',
      'Built-in CRM and first-party data ownership',
      'Optimized for repeat purchase and loyalty',
      'Freedom from high marketplace fees'
    ]
  }
]

export type Insight = {
  slug: string
  title: string
  excerpt: string
  body: string
  date: string
}

export const insights: Insight[] = [
  {
    slug: 'making-data-activation-work',
    title: 'Making data activation work',
    excerpt: 'Effective data activation hinges on objective, workable data, and explicit triggers working together.',
    date: '2024-09-05',
    body: `Why effective data activation depends on aligning objective, data, and trigger, equally and deliberately.

Data activation works only when three elements are designed together: a clear objective, workable data, and a defined trigger. Weakness in any one of these breaks the system.

<strong>First,</strong> teams must be explicit about the <strong>objective.</strong>. This means defining the exact behavior or outcome to influence, such as increasing repeat purchase within 30 days, accelerating new product trial, or reducing drop-off after first use. Without a clear objective, activation becomes activity rather than impact.

<strong>Second,</strong> activation requires <strong>workable data.</strong> This is data that directly supports the objective and can be acted on at scale. It includes not only clean and timely data, but also meaningful segmentation, grouping customers by behavior, value, or intent rather than demographics alone. For example, identifying lapsed buyers versus high-frequency users enables differentiated actions tied to the same objective.

<strong>Third,</strong> data must be paired with a <strong>trigger.</strong> Triggers determine when activation happens, such as a missed purchase cycle, a completed action, or a change in engagement pattern. Effective triggers are explicit and repeatable, ensuring data consistently turns into action, not one-off campaigns.

When objective, data, and trigger are treated as equally critical, data activation becomes a dependable capability, rather than a recurring reinvention.`
  },
  {
    slug: 'designing-platforms-around-value',
    title: 'Designing platforms that perform from day 1',
    excerpt: 'Strong platforms start with a clear customer objective, not features or tech.',
    date: '2024-10-01',
    body: `Why the strongest platforms start with a clear customer objective, not features, journeys, or technology.

High-performing platforms begin by answering a more fundamental question: why would a customer choose to interact with this at all? Before defining features or flows, teams must be explicit about the value exchanged and the behavior the platform is meant to enable.

This means clarifying the real objective behind the platform. Is it to solve a short-term problem, trigger a specific action, or support an ongoing relationship? Platforms designed for one-off engagement require very different incentives, mechanics, and measurement than those built to sustain habits over time.

In practice, effective teams define the customer’s “reason to return” early, what’s in it for them today, and why it should still matter tomorrow. That clarity guides everything that follows: experience design, data capture, and success metrics, ensuring the platform earns attention rather than demands it.`
  },
  {
    slug: 'products-to-platforms',
    title: 'From Products to Platforms: The Next Shift in Brand Value Creation',
    excerpt: 'Brands are moving from selling products to building platforms that compound value over time.',
    date: '2025-01-02',
    body: `For decades, marketers have focused on refining products and sharpening propositions. That approach is no longer enough.

Leading brands are changing how they define what they sell, moving from products and services to platforms. This shift unlocks experiences that physical products alone can never deliver.

A platform reframes the role of a brand. It is no longer just a promise made at the point of purchase, but a system that continuously delivers that promise across time, context, and touchpoints. Through platforms, brands can personalize value, adapt to behavior, and deepen relationships well beyond the shelf or transaction.

Crucially, platforms allow brands to realize their propositions in multiple dimensions:

Functional: solving problems dynamically, not statically
Emotional: building habits, trust, and relevance over time
Behavioral: shaping how customers engage, return, and advocate

This is not about adding technology for its own sake. It is about creating an operating model where experience, data, and interaction work together to compound value, for both the brand and the customer.

In a market where products are increasingly easy to replicate, platforms are how brands create defensible differentiation, and sustained growth.`
  },
]

export const partnerships = ['ISO 27001 certified', 'LINE Partner', 'Google Cloud Partner', 'TikTok Partner']

export const stats = [
  { label: 'Avg. time-to-launch cut', value: '40-60%' },
  { label: 'Conversion uplift achieved', value: '12-25%' },
  { label: 'Data activation throughput', value: '2-3x' }
]

export type ClientLogo = {
  label: string
  image?: string
  className?: string
}

export const clientLogos: ClientLogo[] = [
  { label: 'Unilever', image: '/images/clients/unilever.png' },
  { label: 'Nestlé', image: '/images/clients/nestle.svg' },
  { label: 'Johnson & Johnson', image: '/images/clients/jnj.svg' },
  { label: 'Kimberly-Clark', image: '/images/clients/kimberlyclark.svg' },
  { label: 'Kao', image: '/images/clients/kao.webp' },
  { label: 'Castrol', image: '/images/clients/castrol.svg' },
  { label: 'PTT', image: '/images/clients/ptt.png', className: 'logo-image--extra-wide' },
  { label: 'Thai Union', image: '/images/clients/thaiunion.png' },
  { label: 'Breeze', image: '/images/clients/breeze.avif' },
  { label: 'Comfort', image: '/images/clients/comfort.png' },
  { label: 'Dove', image: '/images/clients/dove.avif' },
  { label: 'Sunsilk', image: '/images/clients/sunsilk.avif' },
  { label: 'Vaseline', image: '/images/clients/vaseline.avif' },
  { label: 'Tresemmé', image: '/images/clients/tresemme.avif' },
  { label: 'Clear', image: '/images/clients/clear.svg' },
  { label: 'Knorr', image: '/images/clients/knorr.avif' },
  { label: 'Milo', image: '/images/clients/milo.avif' },
  { label: 'Nescafé', image: '/images/clients/nescafe.jpg', className: 'logo-image--large' },
  { label: 'Beiersdorf', image: '/images/clients/beiersdorf.webp' },
  { label: 'Nestle Icecream', image: '/images/clients/nestle%20icecream.jpg' },
  { label: 'Hershey', image: '/images/clients/hershey.png' },
  { label: 'KitKat', image: '/images/clients/kitkat.avif' },
  { label: 'Purina', image: '/images/clients/purina.png' },
  { label: 'Pure Life', image: '/images/clients/purelife.avif' },
  { label: 'S-26', image: '/images/clients/s26.webp' },
  { label: 'Suntory Pepsi', image: '/images/clients/suntorypepsi.jpg', className: 'logo-image--large' },
  { label: 'S&P', image: '/images/clients/s%26p.webp' },
  { label: 'Canton Paradise', image: '/images/clients/cantonparadise.jpg' },
  { label: 'GetFresh', image: '/images/clients/getfresh.png', className: 'logo-image--large' },
  { label: 'Areeya', image: '/images/clients/areeya.png' },
  { label: 'The Mall Group', image: '/images/clients/the%20mall.png' },
  { label: 'WhiteStory', image: '/images/clients/whitestory.jpg' },
  { label: 'Chavana', image: '/images/clients/chavana.webp', className: 'logo-image--wide' },
  { label: 'Sino Pacific', image: '/images/clients/sinopacific.webp' },
  { label: 'Citra', image: '/images/clients/citra.avif' },
  { label: 'Hygiene', image: '/images/clients/hygiene.jpg' },
  { label: 'The Magnum Icecream Company', image: '/images/clients/the_magnum_icecream_company.avif' }
]
