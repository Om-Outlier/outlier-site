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

export type JobDetailSection = {
  title: string
  body?: string[]
  items?: string[]
  subsections?: JobDetailSection[]
}

export type JobListing = {
  slug: string
  title: string
  type: string
  location: string
  summary: string
  responsibilities?: string[]
  requirements?: string[]
  niceToHave?: string[]
  detailSections?: JobDetailSection[]
}

export const jobListings: JobListing[] = [
  {
    slug: 'marketing-manager',
    title: 'Marketing Manager',
    type: 'Full-time',
    location: 'Bangkok, Thailand',
    summary: 'Build and scale OUTLIER’s marketing capability while driving growth from existing clients across on-ground activation, digital performance, platform commerce marketing, and commercial expansion.',
    detailSections: [
      {
        title: 'About OUTLIER',
        body: [
          'OUTLIER is a transformation company that builds and operates end-to-end commercial systems spanning data, technology, marketing, and operations.',
          'We work with leading brands to implement platforms such as CDPs, eCommerce, AI solutions, and digital infrastructure, and extend these capabilities into full-scale marketing and growth execution.',
          'Our focus is simple: turn systems into revenue, and marketing into a scalable growth engine.'
        ]
      },
      {
        title: 'About the Role',
        body: [
          'We are looking for a Marketing Manager who will play a key role in building and scaling our marketing capability, while driving growth from existing clients.',
          'This is not a traditional marketing role. You will be responsible for turning marketing into a revenue-driving engine, not just campaign execution.'
        ],
        items: [
          'On-ground activation across events, retail, and offline environments',
          'Digital marketing and performance',
          'Platform and commerce marketing across KOL, content, live, and short video',
          'Client growth and commercial expansion'
        ]
      },
      {
        title: 'What You’ll Own',
        subsections: [
          {
            title: 'Build & Lead the Marketing Function',
            items: [
              'Build and scale a high-performing marketing team across internal and external resources',
              'Define structure, roles, and workflows across offline, digital, and platform marketing',
              'Establish standards for execution quality, speed, and performance',
              'Develop capabilities aligned with business and revenue growth'
            ]
          },
          {
            title: 'Grow Marketing Business from Clients',
            items: [
              'Identify opportunities to extend current transformation projects into marketing engagements',
              'Work closely with internal teams to translate client needs into actionable marketing initiatives',
              'Support client discussions and proposals for marketing execution',
              'Drive long-term client value through continuous engagement'
            ]
          },
          {
            title: 'Integrated Campaign Leadership',
            items: [
              'Plan and execute end-to-end campaigns across on-ground activations, digital channels, and platform-related marketing',
              'Lead activations across events, roadshows, retail, ads, content, CRM, LINE, KOL, live, short video, and traffic driving to eCommerce campaigns',
              'Ensure seamless integration across all touchpoints',
              'Maintain consistency in messaging, branding, and the customer journey'
            ]
          },
          {
            title: 'Digital Marketing & Performance',
            items: [
              'Oversee digital channels, both organic and paid, including Meta, Google, TikTok, and LINE OA',
              'Work with teams to develop high-performing creatives and content',
              'Monitor key performance metrics and continuously optimize campaigns',
              'Apply data-driven thinking to improve efficiency and results'
            ]
          },
          {
            title: 'Platform & Commerce Marketing',
            items: [
              'Support marketing initiatives on commerce platforms such as Shopee, Lazada, and TikTok Shop in collaboration with internal or client-side teams',
              'Drive traffic and engagement into platform campaigns through marketing activities',
              'Plan and execute KOL/influencer campaigns, live commerce, and short video content',
              'Develop clear KOL and content briefs aligned with campaign objectives',
              'Coordinate with creators, influencers, and production teams to deliver high-performing content',
              'Ensure platform-related marketing is integrated with broader campaign strategy',
              'Monitor and optimize performance of content, KOL, and live initiatives'
            ]
          },
          {
            title: 'Campaign Operations & Execution Excellence',
            items: [
              'Own the full campaign lifecycle from planning to execution, reporting, and optimization',
              'Manage timelines, budgets, and cross-functional coordination',
              'Ensure high-quality, efficient, and scalable delivery'
            ]
          },
          {
            title: 'Partner & Stakeholder Management',
            items: [
              'Collaborate with internal Transformation and Operation teams to deliver integrated solutions',
              'Manage external partners, agencies, and vendors',
              'Align stakeholders around campaign goals and business outcomes'
            ]
          }
        ]
      },
      {
        title: 'Experience',
        items: [
          '4-7 years in marketing, with exposure to both offline and digital channels',
          'Experience managing campaigns end-to-end',
          'Experience in agency or client-facing roles is a strong advantage'
        ]
      },
      {
        title: 'Skills',
        items: [
          'Strong understanding of at least two of these areas: digital marketing, on-ground activation and event execution, or platform marketing',
          'Hands-on knowledge of digital marketing across Meta, Google, TikTok, and LINE',
          'Understanding of platform marketing across TikTok, Shopee, and Lazada, especially KOL, live, and short video',
          'Experience working with influencers, creators, and content teams',
          'Strong project management and ability to handle multiple initiatives',
          'Data-driven mindset with ability to translate performance into action',
          'Ability to identify opportunities and turn them into executable plans'
        ]
      },
      {
        title: 'Mindset',
        items: [
          'Hands-on and execution-driven, able to move between strategy and doing',
          'Ownership mindset, accountable for outcomes and not just tasks',
          'Commercial awareness and understanding of how marketing drives business results',
          'Comfortable working across both field execution and digital environments'
        ]
      },
      {
        title: 'Why This Role is Different',
        items: [
          'You will help build a marketing function, not just join one',
          'You will work across offline, online, and platform end-to-end',
          'You will contribute to growing revenue from existing clients',
          'You will operate at the intersection of marketing, technology, and business'
        ]
      },
      {
        title: 'Why Join OUTLIER',
        items: [
          'Work on high-impact projects across leading brands',
          'Be part of a team combining marketing, data, and technology',
          'High ownership, fast growth, and real business exposure'
        ]
      }
    ]
  },
  {
    slug: 'transformation-associate-junior-senior',
    title: 'Transformation Associate (Junior / Senior)',
    type: 'Full-time',
    location: 'Bangkok, Thailand',
    summary: 'Own transformation work that bridges business strategy, marketing, technology, data, and system-level solutions into practical outcomes that drive measurable business impact.',
    detailSections: [
      {
        title: 'About OUTLIER',
        body: [
          'At OUTLIER, we solve real business problems through transformation, integrating marketing, technology, data, and commercial thinking into practical, measurable solutions.',
          'We do not build platforms for the sake of technology. We build solutions that drive business results.',
          'This role sits at the core of how OUTLIER operates. It is a hands-on role for people who can lead transformation work by bridging business strategy and system-level solutions, not narrow specialists.'
        ]
      },
      {
        title: 'About the Role',
        body: [
          'The Transformation Associate role is an execution and ownership role. You are expected to frame problems, design solutions, own client relationships, and drive work to measurable commercial outcomes.',
          'You will work across System Solutions such as CRM, AI-enabled systems, eCommerce, and other business platforms, defining how they should work and ensuring they deliver real adoption and business impact.',
          'You are not expected to code, but you must think like a system and product designer. Senior-level candidates are expected to own client relationships directly and make independent decisions to ensure solutions meet both client requirements and business goals.',
          'High performers progress into transformation leadership. This role is demanding, by design.'
        ]
      },
      {
        title: 'Why This Role Is Different',
        items: [
          'Client Ownership: you are the trusted point of contact, lead client conversations, manage expectations, and are accountable for the relationship, not just the deliverable',
          'Independent Decision-Making: you analyze requirements, solve problems independently, and determine the right path forward to deliver what the business actually needs',
          'Multi-Disciplinary Mastery: you operate across business strategy, marketing, system solutions, data, and AI, and connect them into one coherent solution',
          'Commercial Accountability: success is measured by results, including growth, efficiency, adoption, and impact'
        ]
      },
      {
        title: "What You'll Do",
        subsections: [
          {
            title: 'Work hands-on across business, marketing, technology, and data',
            items: [
              'Operate directly across disciplines to solve real-world transformation problems',
              'Focus on driving measurable business and commercial results, not just building platforms or tools'
            ]
          },
          {
            title: 'Design and execute end-to-end solutions',
            items: [
              'Frame problems and strategy, then drive execution, performance tracking, and optimization',
              'Own the full lifecycle of system solutions such as CRM, AI-enabled systems, eCommerce, and similar platforms',
              'Define requirements, user flows, logic, and architecture so solutions are practical, scalable, and adopted',
              'Ensure solutions align with both client expectations and technical requirements throughout the process'
            ]
          },
          {
            title: 'Apply marketing and commercial thinking',
            items: [
              'Ensure every solution supports growth, revenue, efficiency, or operational impact',
              'Translate business problems into clear, user-centered digital experiences that drive real usage and adoption'
            ]
          },
          {
            title: 'Collaborate with developers, designers, and clients',
            items: [
              'Own the client relationship directly by leading discussions, managing expectations, aligning stakeholders, and ensuring project requirements are met',
              'Work closely with technical and design teams to ensure solutions are practical, scalable, adopted, and commercially impactful'
            ]
          },
          {
            title: 'Conduct hands-on data analysis',
            items: [
              'Generate insights, evaluate performance, and measure whether solutions are delivering intended business outcomes',
              'Use Generative AI tools effectively to accelerate research, ideation, analysis, and solution design'
            ]
          },
          {
            title: 'Take ownership of solution adoption and impact',
            items: [
              'Own not just delivery, but real-world results',
              'Ensure solutions are used, scaled, and continuously improved against commercial targets'
            ]
          },
          {
            title: 'Mentor junior team members',
            items: [
              'Review deliverables, give structured feedback, and help raise the team’s problem-solving and execution standards'
            ]
          }
        ]
      },
      {
        title: "What We're Looking For",
        subsections: [
          {
            title: 'Required',
            items: [
              '3-5+ years of experience in transformation, consulting, product management, marketing, business development, technology, or a related field',
              'Degree in Business, Marketing, Economics, Engineering, Technology, or any field emphasizing problem-solving and analytical thinking',
              'Proven ability to own deliverables end-to-end with minimal supervision',
              'Demonstrated experience managing client relationships and communicating directly with stakeholders',
              'Strong strategic and commercial judgment, with the ability to make sound decisions and connect solutions to business outcomes while fulfilling requirements',
              'Ability to work with ambiguity, structure complex problems, and make decisions under pressure',
              'High ownership mentality, resilience, and drive'
            ]
          },
          {
            title: 'Nice to Have',
            items: [
              'Hands-on experience with system solutions such as CRM, AI-enabled platforms, or eCommerce',
              'Familiarity with design tools, analytics tools, or AI tools in a practical workflow',
              'Experience owning high-stakes projects, startup initiatives, or entrepreneurial ventures'
            ]
          }
        ]
      },
      {
        title: 'Career Growth & Progression',
        body: [
          'This is a performance-based role with a clear path into transformation leadership.'
        ],
        items: [
          'Progression is based on capability, impact, and ownership, not tenure',
          'High performers gain greater client responsibility and decision-making scope early',
          'You will be developed into a transformation leader capable of bridging business, marketing, and technology'
        ]
      },
      {
        title: 'Who Will Thrive Here',
        body: ['You are likely to succeed if you:'],
        items: [
          'Want real ownership of clients and outcomes, not just task execution',
          'Are confident making independent decisions and driving projects to meet requirements',
          'Solve complex, ambiguous problems independently',
          'Are comfortable with high expectations and direct feedback',
          'Think commercially and care deeply about whether the solution actually works for the business',
          'Aspire to become a transformation leader, not a narrow specialist'
        ]
      }
    ]
  },
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer',
    type: 'Full-time',
    location: 'Bangkok, Thailand',
    summary: 'Create practical, on-brand visual assets for online and offline marketing campaigns, FMCG activations, customer touchpoints, platforms, and real campaign execution.',
    detailSections: [
      {
        title: "What you'll do",
        items: [
          'Design online and offline artwork for marketing campaigns, including social media content, digital ads, campaign banners, POSM, event materials, and customer touchpoints',
          'Create and adapt visual assets for applications, websites, CRM campaigns, loyalty platforms, and on-ground activations',
          'Support FMCG campaign execution through artwork for brand activations, retail touchpoints, product launches, and event displays',
          'Prepare final artwork files for digital channels, print production, vendors, and real campaign implementation',
          'Take ownership of assigned design tasks from brief to final delivery',
          'Manage end-to-end creative execution, including brief understanding, design development, artwork adaptation, revision, and final file preparation',
          'Ensure all creative outputs are on-brand, accurate, practical, and aligned with campaign objectives',
          'Work closely with Marketing, Account Management, Project Management, Technology, and external vendors when needed',
          'Use AI tools to support idea generation, image creation, layout exploration, and faster creative production',
          'Manage multiple projects and deadlines in a fast-paced campaign environment',
          'Support simple short-form video editing, AI-generated video content, motion graphics, or 3D booth/event display when required. Skills in these areas will be considered a plus'
        ]
      },
      {
        title: 'What We’re Looking For',
        items: [
          'Fast, hands-on, and adaptable',
          'Able to manage multiple projects at the same time',
          'Able to execute work from brief to final delivery with minimal supervision',
          'Comfortable working in a fast-paced campaign environment',
          'Curious about AI, MarTech, and new creative workflows',
          'Able to work well with cross-functional teams',
          'Able to balance creativity with business needs, timelines, and execution quality',
          'Interested in growing beyond traditional graphic design into campaign, platform, and customer engagement work'
        ]
      }
    ]
  },
  {
    slug: 'senior-ecommerce-executive',
    title: 'Senior eCommerce Executive',
    type: 'Full-time',
    location: 'Bangkok, Thailand',
    summary: 'Drive eCommerce performance for consumer brands across marketplace and DTC channels. You will manage end-to-end eCommerce execution — from storefront optimization and promotions to data activation and conversion improvement — working closely with brand and technology teams.',
    responsibilities: [
      'Manage day-to-day eCommerce operations across marketplaces (Lazada, Shopee, TikTok Shop) and DTC channels',
      'Plan and execute promotional campaigns, flash sales, and platform-specific activations',
      'Analyze sales and traffic data to identify performance gaps and optimization opportunities',
      'Coordinate with creative, logistics, and brand teams to ensure seamless execution',
      'Monitor competitor activity and recommend tactical responses',
      'Report on KPIs and contribute to eCommerce strategy planning'
    ],
    requirements: [
      '3–5 years of experience in eCommerce, digital marketing, or category management',
      'Hands-on experience managing storefronts on Lazada, Shopee, or TikTok Shop',
      'Strong data literacy — comfortable pulling and interpreting platform analytics',
      'Detail-oriented with strong project management skills',
      'Good written and verbal communication in Thai and English'
    ],
    niceToHave: [
      'Experience with DTC commerce platforms or brand-owned online stores',
      'Familiarity with CRM or first-party data activation',
      'Background in FMCG or consumer goods'
    ]
  },
  {
    slug: 'talent-acquisition-branding-intern',
    title: 'Talent Acquisition & Branding Intern',
    type: 'Internship',
    location: 'Bangkok, Thailand',
    summary: 'We are looking for a Talent Acquisition & Branding Intern who wants to grow in recruitment, employer branding, candidate engagement, and AI-driven HR. This internship offers hands-on experience in how companies attract, engage, and hire top talent while learning how AI can support the future of recruitment.',
    responsibilities: [
      'Support end-to-end recruitment activities',
      'Help source and screen potential candidates',
      'Assist with employer branding and recruitment marketing content',
      'Support candidate engagement and candidate experience initiatives',
      'Learn how to use AI tools to improve recruitment workflows',
      'Work closely with the People & Talent Manager on real recruitment and branding projects'
    ],
    requirements: [
      'Passion for recruitment, branding, business, technology, or marketing',
      'Strong communication and interpersonal skills',
      'Creative mindset with attention to detail',
      'Willingness to learn, grow, and take ownership',
      'Interest in AI literacy and how AI can support modern HR'
    ]
  }
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
