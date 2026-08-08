export interface ServiceItem {
  slug: string
  title: string
  shortDesc: string
  fullDesc: string
  iconName: string
  badge?: string
  features: string[]
  techStack: string[]
  processSteps: { title: string; desc: string }[]
}

export interface TechCategory {
  slug: string
  title: string
  shortDesc: string
  items: { name: string; desc: string; icon: string; highlight?: boolean }[]
}

export interface IndustryItem {
  slug: string
  title: string
  shortDesc: string
  fullDesc: string
  iconName: string
  solutions: string[]
  stats: { value: string; label: string }[]
}

export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: string
  description: string
  image: string
  metrics: string[]
  technologies: string[]
}

export interface CareerItem {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: { name: string; role: string; avatar: string }
  category: string
  image: string
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Fast, SEO-ready web platforms built with Next.js & React, including PWAs & headless CMS.",
    fullDesc: "We craft modern, high-performance web applications engineered for security, speed, and conversion. From enterprise web portals to interactive web apps, we deliver solutions tailored to your growth goals.",
    iconName: "Globe",
    badge: "Popular",
    features: [
      "Custom Frontend & Single-Page Apps (React / Next.js)",
      "Headless CMS Integration (Sanity, Strapi, Contentful)",
      "Progressive Web Apps (PWA) with Offline Capability",
      "API First Development & GraphQL / REST Integration",
      "Search Engine Optimization (SEO) & Web Vitals Optimization"
    ],
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "GraphQL"],
    processSteps: [
      { title: "Architecture & Discovery", desc: "Defining technical spec, user flow, and system architecture." },
      { title: "UI/UX & Design Systems", desc: "Interactive wireframes and responsive UI components." },
      { title: "Agile Development", desc: "Sprint-based releases with automated code testing." },
      { title: "Deployment & Optimization", desc: "CI/CD setup with performance tuning for 99.9% uptime." }
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Native iOS & Android apps plus cross-platform solutions in Flutter & React Native.",
    fullDesc: "Deliver delightful mobile experiences on iOS and Android. Whether building a native app or cross-platform Flutter/React Native application, we take your product from concept to App Store feature.",
    iconName: "Smartphone",
    badge: "Core Service",
    features: [
      "Cross-Platform Apps (Flutter, React Native)",
      "Native iOS (Swift) & Android (Kotlin) App Development",
      "App Store & Google Play Publishing",
      "Biometric Authentication & In-App Purchases",
      "Offline-First Data Sync & Push Notifications"
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite"],
    processSteps: [
      { title: "Product Strategy", desc: "Target audience mapping and feature prioritization." },
      { title: "Mobile UI Design", desc: "Platform-specific design guidelines (Human Interface & Material Design)." },
      { title: "Core App Build", desc: "Feature integration, local DB setup, and third-party APIs." },
      { title: "Store Submission", desc: "Complete store deployment, compliance, and post-launch monitoring." }
    ]
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDesc: "Custom, SaaS, startup, enterprise, and CRM software engineered to scale.",
    fullDesc: "We build bespoke software tailored to solve complex operational challenges. Our custom software products scale reliably from early-stage MVPs to enterprise-grade architectures.",
    iconName: "Code2",
    features: [
      "Custom SaaS Product Development",
      "Enterprise Resource Planning (ERP) & CRM Systems",
      "Legacy Code Refactoring & Modernization",
      "Microservices Architecture & API Gateways",
      "Role-Based Access Control & Multi-Tenant Security"
    ],
    techStack: ["Node.js", "Python", ".NET", "PostgreSQL", "Docker", "AWS"],
    processSteps: [
      { title: "Business Analysis", desc: "Uncovering bottleneck areas and scoping product requirements." },
      { title: "System Blueprint", desc: "Designing database schemas, domain models, and API interfaces." },
      { title: "Full-Stack Build", desc: "Backend logic, database migrations, and intuitive admin dashboards." },
      { title: "Quality Assurance", desc: "Load testing, vulnerability scans, and user acceptance testing." }
    ]
  },
  {
    slug: "vibe-coding-development",
    title: "Vibe Coding Development",
    shortDesc: "Ship faster with AI-assisted development and modern developer workflows.",
    fullDesc: "Accelerate your product launch with cutting-edge AI developer tools, rapid prototyping, and automated code generation without compromising on code quality, security, or maintainability.",
    iconName: "Zap",
    badge: "Trending",
    features: [
      "AI-Driven Rapid MVP Prototyping",
      "Automated Code Synthesis & Refactoring",
      "Instant Specs to Code Generation",
      "Accelerated Feature Delivery Sprints",
      "AI-Enhanced Testing & Code Review"
    ],
    techStack: ["Claude", "OpenAI", "Next.js", "TypeScript", "TailwindCSS", "Copilot"],
    processSteps: [
      { title: "Prompt & Architecture Spec", desc: "Defining high-level intent, domain models, and design tokens." },
      { title: "Rapid AI Generation", desc: "Generating functional component scaffolding and initial API layers." },
      { title: "Human Engineering Review", desc: "Validating logic, security boundaries, and performance." },
      { title: "Continuous Delivery", desc: "Instant iteration cycles with live feedback loops." }
    ]
  },
  {
    slug: "ai-development-services",
    title: "AI Development Services",
    shortDesc: "Build intelligent AI-powered products, custom LLM solutions & predictive tools.",
    fullDesc: "Transform your product with custom artificial intelligence solutions, machine learning models, retrieval-augmented generation (RAG), and domain-specific AI agents.",
    iconName: "Cpu",
    badge: "AI Powered",
    features: [
      "Custom LLM Fine-Tuning & Prompt Engineering",
      "Retrieval-Augmented Generation (RAG) Systems",
      "Predictive Analytics & Recommendation Engines",
      "Computer Vision & Natural Language Processing (NLP)",
      "Autonomous AI Agents & Workflow Automation"
    ],
    techStack: ["Python", "PyTorch", "OpenAI", "Pinecone", "LangChain", "FastAPI"],
    processSteps: [
      { title: "Data Assessment", desc: "Evaluating dataset readiness, privacy policies, and AI feasibility." },
      { title: "Model Engineering", desc: "Fine-tuning foundational models or building custom RAG pipelines." },
      { title: "API & Backend Integration", desc: "Embedding AI endpoints into existing web and mobile frontends." },
      { title: "Model Monitoring", desc: "Tracking accuracy, latency, guardrails, and token expenditure." }
    ]
  },
  {
    slug: "ai-integration-services",
    title: "AI Integration Services",
    shortDesc: "Layer intelligence onto what you run — connect OpenAI, Claude & custom models.",
    fullDesc: "Seamlessly integrate generative AI features, smart chatbots, and intelligent search directly into your existing web, mobile, or enterprise applications.",
    iconName: "Bot",
    features: [
      "Enterprise Chatbot & Virtual Assistant Integration",
      "Automated Document Processing & Extraction",
      "Smart Search & Vector Database Setup",
      "Third-Party AI API Connectors (OpenAI, Anthropic, Gemini)",
      "Guardrails & AI Safety Compliance"
    ],
    techStack: ["OpenAI API", "Anthropic API", "Vector DBs", "LangChain", "Node.js", "Python"],
    processSteps: [
      { title: "Integration Audit", desc: "Reviewing existing software stack and data flow." },
      { title: "API Gateway Setup", desc: "Securing AI API keys, setting token limits, and fallback layers." },
      { title: "Interface Embedding", desc: "Adding smart conversational UI, search bars, or summary widgets." },
      { title: "Testing & Tuning", desc: "Testing edge cases, prompt optimization, and user feedback." }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Research-led, conversion-focused design systems, wireframes & prototypes.",
    fullDesc: "We combine user research, intuitive design patterns, and modern visual aesthetics to build interfaces users love and retain. Design systems that ensure consistency as you grow.",
    iconName: "Layout",
    features: [
      "User Research & Journey Mapping",
      "Wireframing & Interactive Prototyping (Figma)",
      "Design Systems & Component Libraries",
      "Usability Testing & Accessibility (WCAG)",
      "Brand Identity & Visual Design"
    ],
    techStack: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Storybook", "TailwindCSS"],
    processSteps: [
      { title: "Empathize & Research", desc: "User interviews, persona building, and competitor teardowns." },
      { title: "Wireframe & Flow", desc: "Mapping user journeys and low-fidelity prototypes." },
      { title: "High-Fidelity UI", desc: "Crafting pixel-perfect screens and dynamic interactions." },
      { title: "Design System Handoff", desc: "Providing clean Figma tokens, components, and specs for developers." }
    ]
  },
  {
    slug: "qa-testing",
    title: "QA & Testing Services",
    shortDesc: "Ship with confidence — automated, manual, performance & security testing.",
    fullDesc: "Prevent bugs from reaching production with comprehensive quality assurance. We integrate automated test suites and rigorous manual QA directly into your CI/CD pipeline.",
    iconName: "CheckCircle2",
    features: [
      "Automated End-to-End Testing (Cypress, Playwright)",
      "Manual Functional & Regression Testing",
      "API Testing & Integration Scenarios (Postman)",
      "Performance & Stress Testing (JMeter)",
      "Vulnerability Scans & Penetration Testing"
    ],
    techStack: ["Playwright", "Cypress", "Selenium", "Postman", "JMeter", "GitHub Actions"],
    processSteps: [
      { title: "Test Plan & Strategy", desc: "Defining test coverage, acceptance criteria, and edge cases." },
      { title: "Scripting & Suite Build", desc: "Writing resilient automated end-to-end and API tests." },
      { title: "CI/CD Pipeline Integration", desc: "Running test suites automatically on every pull request." },
      { title: "Bug Reporting & Retesting", desc: "Detailed regression logs with reproduction steps." }
    ]
  },
  /*
  {
    slug: "cloud-devops-security",
    title: "Cloud, DevOps & Security",
    shortDesc: "Resilient infrastructure, automated delivery pipelines & cloud migration.",
    fullDesc: "Optimize cloud infrastructure for performance, cost efficiency, and zero-downtime deployments. We manage AWS, Azure, GCP setups with Infrastructure as Code.",
    iconName: "Shield",
    features: [
      "Cloud Infrastructure Setup (AWS, Azure, GCP)",
      "CI/CD Pipeline Automation (GitHub Actions, GitLab)",
      "Kubernetes & Docker Container Orchestration",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Cloud Security, Monitoring & Incident Response"
    ],
    techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Datadog"],
    processSteps: [
      { title: "Infrastructure Audit", desc: "Reviewing server health, security posture, and cloud cost." },
      { title: "IaC & Pipeline Design", desc: "Codifying infrastructure and deployment pipelines." },
      { title: "Zero-Downtime Migration", desc: "Migrating workloads with blue-green or canary releases." },
      { title: "24/7 Monitoring Setup", desc: "Alerting, log aggregation, and automated recovery." }
    ]
  },
  */
  {
    slug: "data-analytics",
    title: "Data Analytics",
    shortDesc: "Turn raw data into actionable insights, executive dashboards & ETL pipelines.",
    fullDesc: "Unlock business growth with data-driven decision making. We build scalable data pipelines, automated ETL workflows, and real-time visualization dashboards.",
    iconName: "BarChart3",
    features: [
      "Data Warehouse & Lakehouse Architecture",
      "ETL / ELT Data Pipeline Engineering",
      "Executive BI Dashboards (Power BI, Tableau)",
      "Product Analytics & User Behavior Tracking",
      "Data Governance & Privacy Protection"
    ],
    techStack: ["Python", "PostgreSQL", "Snowflake", "BigQuery", "PowerBI", "Metabase"],
    processSteps: [
      { title: "Data Source Mapping", desc: "Identifying transactional databases, APIs, and analytics events." },
      { title: "Pipeline Build", desc: "Building automated data aggregation and cleansing pipelines." },
      { title: "Dashboard Creation", desc: "Visualizing key metrics with real-time refresh rates." },
      { title: "Insights & Handoff", desc: "Training teams to leverage self-serve reporting." }
    ]
  },
  {
    slug: "dedicated-development-team",
    title: "Dedicated Development Team",
    shortDesc: "A full software development team, exclusively focused on your product.",
    fullDesc: "Scale your engineering capacity instantly with handpicked full-time developers, QA leads, and project managers working directly under your leadership.",
    iconName: "Users",
    features: [
      "Fully Dedicated Full-Stack Software Engineers",
      "Seamless Integration into Your Slack & Jira",
      "Flexible Team Scaling (Up or Down)",
      "Direct Communication & Daily Standups",
      "Complete IP Ownership & NDA Protection"
    ],
    techStack: ["React", "Next.js", "Node.js", "Python", "Flutter", "DevOps"],
    processSteps: [
      { title: "Requirement Matching", desc: "Defining skill profiles, tech stack, and timezone preference." },
      { title: "Developer Vetting & Interview", desc: "You interview and select candidate developers." },
      { title: "Onboarding & Integration", desc: "Granting repository access and joining daily scrums." },
      { title: "Ongoing Execution & Review", desc: "Dedicated account management and weekly sprint demos." }
    ]
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    shortDesc: "Extend your team on demand with vetted domain specialists and senior talent.",
    fullDesc: "Fill key skill gaps in your existing team quickly. Access senior frontend, backend, DevOps, or mobile engineering experts on flexible monthly engagements.",
    iconName: "UserPlus",
    features: [
      "Senior Engineer Onboarding within 48 Hours",
      "Zero Recruitment or Overhead Costs",
      "Flexible Short-term or Long-term Contracts",
      "Timezone-Aligned Work Hours",
      "Transparent Hourly or Monthly Rates"
    ],
    techStack: ["Senior Devs", "Tech Leads", "QA Specialists", "UI/UX Designers", "Cloud Experts"],
    processSteps: [
      { title: "Skill Gap Analysis", desc: "Pinpointing exact technical requirements and project timeline." },
      { title: "Talent Matching", desc: "Presenting pre-screened senior developer profiles." },
      { title: "Rapid Onboarding", desc: "Integrating developer directly into your project tasks." },
      { title: "Agile Extension", desc: "Flexible scaling as workload demands change." }
    ]
  }
]

export const TECH_CATEGORIES: TechCategory[] = [
  {
    slug: "front-end",
    title: "Front-End Development",
    shortDesc: "Modern, responsive, and blazing-fast user interfaces built with leading JavaScript frameworks.",
    items: [
      { name: "React", desc: "Component-driven web applications", icon: "https://cdn.simpleicons.org/react/61DAFB", highlight: true },
      { name: "Next.js", desc: "Full-stack React with SSR & Turbopack", icon: "https://cdn.simpleicons.org/nextdotjs/000000", highlight: true },
      { name: "Vue.js", desc: "Progressive JavaScript framework", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
      { name: "Angular", desc: "Enterprise-grade web framework", icon: "https://cdn.simpleicons.org/angular/DD0031" },
      { name: "TypeScript", desc: "Strongly typed JavaScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", highlight: true },
      { name: "HTML5 / CSS3", desc: "Semantic markup & Tailwind styling", icon: "https://cdn.simpleicons.org/html5/E34F26" }
    ]
  },
  {
    slug: "back-end",
    title: "Back-End & API Engineering",
    shortDesc: "Robust server-side logic, microservices, and database layers designed for high concurrency.",
    items: [
      { name: "Node.js", desc: "Event-driven asynchronous server runtime", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", highlight: true },
      { name: "NestJS", desc: "Scalable TypeScript backend framework", icon: "https://cdn.simpleicons.org/nestjs/E0234E", highlight: true },
      { name: "Python", desc: "FastAPI, Django & AI integration", icon: "https://cdn.simpleicons.org/python/3776AB", highlight: true },
      { name: "Express.js", desc: "Minimalist web framework for Node", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: ".NET", desc: "High-performance enterprise backends", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
      { name: "GraphQL", desc: "Flexible query language for APIs", icon: "https://cdn.simpleicons.org/graphql/E10098" }
    ]
  },
  {
    slug: "database",
    title: "Database & Storage",
    shortDesc: "Relational, document, and vector databases optimized for speed, reliability, and security.",
    items: [
      { name: "PostgreSQL", desc: "Advanced open-source relational database", icon: "https://cdn.simpleicons.org/postgresql/4169E1", highlight: true },
      { name: "MongoDB", desc: "NoSQL document database for flex data", icon: "https://cdn.simpleicons.org/mongodb/47A248", highlight: true },
      { name: "MySQL", desc: "Reliable relational database engine", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Firebase", desc: "Real-time backend as a service", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Supabase", desc: "Open-source Firebase alternative with Postgres", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", highlight: true },
      { name: "SQLite", desc: "Lightweight embedded database engine", icon: "https://cdn.simpleicons.org/sqlite/003B57" }
    ]
  },
  {
    slug: "mobile",
    title: "Mobile Technologies",
    shortDesc: "Cross-platform and native frameworks delivering high frame rates and native device access.",
    items: [
      { name: "Flutter", desc: "Dart-powered native apps from single codebase", icon: "https://cdn.simpleicons.org/flutter/02569B", highlight: true },
      { name: "React Native", desc: "Cross-platform mobile apps with React", icon: "https://cdn.simpleicons.org/react/61DAFB", highlight: true },
      { name: "Swift", desc: "Native iOS & iPadOS app development", icon: "https://cdn.simpleicons.org/swift/F05138" },
      { name: "Kotlin", desc: "Modern native Android app development", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
      { name: "Android SDK", desc: "Deep Android hardware integration", icon: "https://cdn.simpleicons.org/android/34A853" }
    ]
  },
  {
    slug: "cloud-services",
    title: "Cloud & DevOps Infrastructure",
    shortDesc: "Cloud hosting, containerization, and continuous delivery platforms.",
    items: [
      { name: "AWS", desc: "EC2, S3, Lambda, DynamoDB & ECS", icon: "https://cdn.simpleicons.org/amazonaws/232F3E", highlight: true },
      { name: "Microsoft Azure", desc: "Enterprise cloud compute & app services", icon: "https://cdn.simpleicons.org/microsoftazure/0089D6" },
      { name: "Google Cloud (GCP)", desc: "BigQuery, Kubernetes & Vertex AI", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "Docker", desc: "Containerized application deployments", icon: "https://cdn.simpleicons.org/docker/2496ED", highlight: true },
      { name: "Kubernetes", desc: "Container orchestration at scale", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Design Tools",
    shortDesc: "Industry-standard design tools powering research, wireframes, and production UI assets.",
    items: [
      { name: "Figma", desc: "Collaborative interface design & prototyping", icon: "https://cdn.simpleicons.org/figma/F24E1E", highlight: true },
      { name: "Adobe XD", desc: "Vector design and interactive prototypes", icon: "https://cdn.simpleicons.org/adobexd/FF61F6" },
      { name: "Photoshop", desc: "Advanced asset editing & raster graphics", icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
      { name: "Sketch", desc: "Digital design app for macOS", icon: "https://cdn.simpleicons.org/sketch/F7B500" }
    ]
  }
]

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "healthcare-medtech",
    title: "Healthcare & MedTech",
    shortDesc: "HIPAA-compliant EHR systems, telemedicine apps, and digital health software.",
    fullDesc: "We build secure healthcare software solutions that streamline patient care, protect sensitive health records (HIPAA & GDPR compliant), and connect providers with patients remotely.",
    iconName: "HeartPulse",
    solutions: ["Electronic Health Records (EHR / EMR)", "Telemedicine & Video Consultation", "Patient Portal & Appointment Booking", "Medical Device IoT Data Sync"],
    stats: [{ value: "99.9%", label: "HIPAA Security Score" }, { value: "10k+", label: "Patients Served" }]
  },
  {
    slug: "fintech-banking",
    title: "Fintech & Banking",
    shortDesc: "Payment gateways, digital wallets, stock trading, and loan management platforms.",
    fullDesc: "Powering modern financial software with bank-grade security, instant transactions, PCI-DSS compliance, and automated fraud prevention.",
    iconName: "Landmark",
    solutions: ["Digital Wallets & Payment Gateways", "Loan Origination & Risk Scoring", "Algorithmic Stock Trading Apps", "Neobanking & Multi-Currency Accounts"],
    stats: [{ value: "$5M+", label: "Transactions Processed" }, { value: "PCI-DSS", label: "Certified Security" }]
  },
  {
    slug: "ecommerce-retail",
    title: "E-commerce & Retail",
    shortDesc: "Headless commerce, multi-vendor marketplaces, inventory & checkout optimization.",
    fullDesc: "Transform retail operations with high-converting online storefronts, omnichannel inventory management, and custom checkout flows.",
    iconName: "ShoppingBag",
    solutions: ["Headless E-commerce Storefronts", "Multi-Vendor Marketplace Platforms", "Inventory & Warehouse Management", "Personalized Recommendation Engine"],
    stats: [{ value: "2x", label: "Average Conversion Uplift" }, { value: "500+", label: "Orders Daily" }]
  },
  {
    slug: "education-edtech",
    title: "Education & EdTech",
    shortDesc: "Interactive LMS, online learning platforms, virtual classrooms, and testing engines.",
    fullDesc: "Empower educators and learners with interactive learning management systems, AI tutoring assistants, and gamified online courses.",
    iconName: "GraduationCap",
    solutions: ["Learning Management Systems (LMS)", "Virtual Live Classroom Software", "AI Test Generator & Automated Grading", "Gamified Student Learning Apps"],
    stats: [{ value: "5k+", label: "Students Active" }, { value: "85%", label: "Course Completion" }]
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    shortDesc: "Booking engines, hotel PMS, itinerary planners, and flight aggregator platforms.",
    fullDesc: "Drive bookings and simplify guest experiences with real-time reservation engines, hotel property management, and travel itinerary software.",
    iconName: "Plane",
    solutions: ["Online Booking & Reservation Engine", "Hotel Property Management System (PMS)", "AI Travel Itinerary Planner", "Loyalty & Rewards Program Portal"],
    stats: [{ value: "50k+", label: "Booked Nights" }, { value: "<500ms", label: "Search Latency" }]
  },
  {
    slug: "real-estate-proptech",
    title: "Real Estate & PropTech",
    shortDesc: "Property listing portals, tenant CRMs, virtual tours, and lease management software.",
    fullDesc: "Modernizing real estate transactions with interactive property listings, automated tenant screening, and digital contract signing.",
    iconName: "Building2",
    solutions: ["Property Search & Listing Portals", "Tenant & Property Manager CRM", "3D Virtual Tour Integration", "Automated Lease & Rent Collection"],
    stats: [{ value: "500+", label: "Properties Listed" }, { value: "30%", label: "Faster Closing" }]
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    shortDesc: "Fleet GPS tracking, warehouse management (WMS), and last-mile delivery software.",
    fullDesc: "Gain end-to-end visibility across your supply chain with real-time GPS fleet tracking, automated dispatching, and warehouse inventory control.",
    iconName: "Truck",
    solutions: ["Real-Time Fleet GPS Tracking", "Warehouse Management Systems (WMS)", "Driver Mobile App & Route Optimization", "Freight Rate & Cargo Management"],
    stats: [{ value: "15%", label: "Fuel Cost Saved" }, { value: "95%", label: "On-Time Deliveries" }]
  },
  {
    slug: "media-entertainment",
    title: "Media & Entertainment",
    shortDesc: "Video streaming platforms (OTT), digital asset management, and content portals.",
    fullDesc: "Deliver high-definition video and audio streaming with DRM content protection, multi-device sync, and subscription monetization models.",
    iconName: "Clapperboard",
    solutions: ["Video-on-Demand (VOD) & OTT Platforms", "Live Event Streaming & Chat", "Digital Asset Management (DAM)", "Subscription & Pay-Per-View Monetization"],
    stats: [{ value: "4K", label: "Ultra HD Streaming" }, { value: "50k+", label: "Stream Hours" }]
  },
  {
    slug: "fitness-wellness",
    title: "Fitness & Wellness",
    shortDesc: "Workout tracking apps, wearable IoT integration, diet planners, and gym management.",
    fullDesc: "Engage fitness enthusiasts with custom workout tracking, Apple Watch / Fitbit IoT sync, and virtual personal trainer coaching apps.",
    iconName: "Dumbbell",
    solutions: ["Workout & Macro Tracking Apps", "Wearable Device Data Integration", "Gym & Studio Membership Software", "Virtual Personal Coaching Video Portal"],
    stats: [{ value: "70%", label: "User Retention" }, { value: "100+", label: "Workouts Logged" }]
  },
  {
    slug: "food-restaurant",
    title: "Food & Restaurant",
    shortDesc: "Online food ordering apps, restaurant POS systems, and kitchen display portals.",
    fullDesc: "Streamline restaurant operations with direct-ordering food web apps, POS integrations, and kitchen display systems (KDS).",
    iconName: "UtensilsCrossed",
    solutions: ["Custom Food Delivery Mobile Apps", "Restaurant POS & Kitchen Display System", "Table QR Ordering & Digital Menus", "Inventory & Ingredient Tracker"],
    stats: [{ value: "0%", label: "Third-Party Commission" }, { value: "45min", label: "Avg Delivery Time" }]
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Industrial",
    shortDesc: "IoT equipment monitoring, ERP integration, predictive maintenance, and quality control.",
    fullDesc: "Digitize factory floors with industrial IoT sensors, automated inventory tracking, and predictive machine maintenance alerts.",
    iconName: "Factory",
    solutions: ["Industrial IoT Sensor Monitoring", "Factory Inventory & Order ERP", "Predictive Machine Maintenance", "Quality Inspection Mobile Dashboards"],
    stats: [{ value: "20%", label: "Downtime Reduction" }, { value: "ISO 9001", label: "Compliant Systems" }]
  },
  {
    slug: "on-demand-marketplace",
    title: "On-Demand Marketplace",
    shortDesc: "Two-sided service marketplaces, booking apps, and service provider portals.",
    fullDesc: "Launch scalable multi-provider service platforms connecting buyers and sellers with escrow payments, rating systems, and live tracking.",
    iconName: "Store",
    solutions: ["Two-Sided Service Platforms", "Real-Time Provider Matching & Escrow", "In-App Chat & Dispute Management", "Review & Verification Systems"],
    stats: [{ value: "$500k+", label: "GMV Handled" }, { value: "4.5/5", label: "User Satisfaction" }]
  }
]

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "shapentic",
    title: "Shapentic — AI Website Builder",
    client: "Shapentic",
    category: "AI / SaaS",
    description: "An AI-powered platform that lets users create modern, fully functional websites simply by entering prompts — no coding or design expertise needed.",
    image: "/case-studies/shapentic.png",
    metrics: ["Prompt-to-Website in Seconds", "No-Code Required", "Production-Ready Output"],
    technologies: ["React.js", "Next.js", "Node.js", "OpenAI APIs", "MongoDB", "AWS"]
  },
  {
    id: "myticketpass",
    title: "MyTicketPass — Smart Ticket Booking",
    client: "MyTicketPass",
    category: "Event Tech",
    description: "A modern digital platform for seamless ticket booking and live event management — helping users discover events and organizers manage ticket sales efficiently.",
    image: "/case-studies/myticketpass.png",
    metrics: ["Real-Time Seat Selection", "Multi-Event Support", "Secure Payment Gateways"],
    technologies: ["React.js", "Next.js", "Node.js", "PostgreSQL", "AWS", "Payment Gateways"]
  },
  {
    id: "ai-face-detection",
    title: "AI Face Detection & Recognition",
    client: "Ornitech Internal",
    category: "AI / Computer Vision",
    description: "An AI-powered face detection and recognition system for real-time video — detects faces, counts individuals, and identifies known persons using advanced ML models.",
    image: "/case-studies/face-detection.png",
    metrics: ["Real-Time Detection", "Multi-Face Tracking", "High Accuracy ML Models"],
    technologies: ["Python", "OpenCV", "TensorFlow", "FaceNet", "MongoDB", "Cloud Integration"]
  }
]

export const CAREER_OPENINGS: CareerItem[] = [
  {
    id: "senior-fullstack-dev",
    title: "Senior Full-Stack Engineer (Next.js / Node.js)",
    department: "Engineering",
    location: "Remote / Surat / Kitchener",
    type: "Full-Time",
    experience: "0-1 Years",
    description: "We are seeking a seasoned Full-Stack Engineer to architect and build high-scale web platforms for global clients.",
    responsibilities: [
      "Develop responsive frontends using Next.js, React, and TypeScript.",
      "Architect RESTful APIs and GraphQL services in Node.js / NestJS.",
      "Optimize database queries and system performance.",
      "Mentor junior developers and participate in code reviews."
    ],
    requirements: [
      "4+ years of professional full-stack development experience.",
      "Expert knowledge of React, Next.js, TypeScript, and Node.js.",
      "Strong proficiency with relational databases (PostgreSQL/MySQL).",
      "Experience with cloud deployments on AWS or Vercel."
    ]
  },
  {
    id: "senior-mobile-dev",
    title: "Senior Mobile Engineer (Flutter / React Native)",
    department: "Engineering",
    location: "Remote / Surat",
    type: "Full-Time",
    experience: "0-1 Years",
    description: "Looking for an expert Mobile Developer to create sleek cross-platform iOS and Android applications.",
    responsibilities: [
      "Build native-performing cross-platform mobile apps.",
      "Integrate complex REST APIs, biometric authentication, and push notifications.",
      "Publish and manage applications on App Store & Google Play Console.",
      "Ensure unit test coverage and UI responsiveness across devices."
    ],
    requirements: [
      "3+ years building production mobile apps using Flutter or React Native.",
      "Understanding of iOS/Android native APIs and lifecycle.",
      "Proven track record of published apps with high user ratings."
    ]
  },
  {
    id: "ai-ml-engineer",
    title: "AI / ML Integration Specialist",
    department: "AI & Data Solutions",
    location: "Remote / Kitchener",
    type: "Full-Time",
    experience: "0-1 Years",
    description: "Join our core AI team to engineer RAG systems, LLM fine-tuning, and intelligent automation agents.",
    responsibilities: [
      "Design RAG architectures using vector databases (Pinecone, Qdrant).",
      "Integrate OpenAI, Anthropic, and open-source models (Llama 3).",
      "Build scalable Python FastAPI backend endpoints for AI services."
    ],
    requirements: [
      "Strong Python programming skills and ML framework experience.",
      "Hands-on experience with LangChain, LlamaIndex, and OpenAI APIs.",
      "Solid understanding of vector embeddings and prompt engineering."
    ]
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-scalable-nextjs-16-apps",
    title: "Building High-Scale Next.js 16 Web Applications in 2026",
    excerpt: "Discover best practices for Turbopack, Server Actions, and dynamic streaming to build lightning-fast web applications.",
    content: "Next.js 16 brings powerful enhancements to full-stack web development...",
    date: "August 2, 2026",
    readTime: "6 min read",
    author: { name: "Ankit Patel", role: "Principal Architect", avatar: "/avatars/sophia.png" },
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "ai-rag-architecture-guide",
    title: "Enterprise RAG Architecture: Combining Vector Search with LLMs",
    excerpt: "A technical guide to implementing Retrieval-Augmented Generation for proprietary enterprise datasets with zero data leaks.",
    content: "Generative AI is revolutionizing enterprise knowledge management...",
    date: "July 28, 2026",
    readTime: "8 min read",
    author: { name: "David Miller", role: "AI Solutions Lead", avatar: "/avatars/a1.png" },
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "flutter-vs-react-native-2026",
    title: "Flutter vs React Native in 2026: Which Framework Should You Choose?",
    excerpt: "Comparing performance, developer experience, third-party ecosystem, and native platform integration for cross-platform apps.",
    content: "When launching a new cross-platform mobile application...",
    date: "July 15, 2026",
    readTime: "7 min read",
    author: { name: "Sarah Jenkins", role: "Lead Mobile Developer", avatar: "/avatars/a2.png" },
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  }
]
