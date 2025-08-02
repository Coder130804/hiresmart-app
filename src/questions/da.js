const daQuestions = [
  {
    id: 1,
    question: "What is the role of data in community development?",
    keywords: ["evidence-based", "planning", "impact measurement"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "How can digital tools improve outreach in rural areas?",
    keywords: ["mobile apps", "awareness", "access"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "What is MIS (Management Information System)?",
    keywords: ["data collection", "monitoring", "decision-making"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "How can GIS mapping support rural development programs?",
    keywords: ["geolocation", "planning", "resource allocation"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "How would you design a data collection tool for a livelihood project?",
    keywords: ["forms", "indicators", "mobile-friendly"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "What are the key components of a digital dashboard?",
    keywords: ["real-time", "visualization", "KPIs"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "How can you use data to improve beneficiary targeting?",
    keywords: ["segmentation", "demographics", "need assessment"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "What do you understand by data-driven decision-making?",
    keywords: ["analytics", "patterns", "better planning"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "How can IoT be applied in agriculture or water management?",
    keywords: ["sensors", "efficiency", "automation"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "What are some challenges of using tech in rural areas?",
    keywords: ["connectivity", "digital literacy", "acceptance"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "How can mobile-based surveys improve data accuracy?",
    keywords: ["real-time", "skip logic", "photos", "GPS"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "What is data validation and why is it important?",
    keywords: ["accuracy", "integrity", "clean data"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "How would you ensure data privacy in a rural tech project?",
    keywords: ["consent", "encryption", "secure storage"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "What is the importance of baseline data?",
    keywords: ["comparison", "impact assessment", "benchmarking"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "What are common indicators used in WASH/health data?",
    keywords: ["access", "hygiene", "awareness", "usage"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "How would you monitor the progress of a digital literacy campaign?",
    keywords: ["metrics", "pre-post comparison", "outreach data"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "What is Power BI or Tableau used for?",
    keywords: ["data visualization", "dashboarding", "reports"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "How do you choose indicators for social impact analytics?",
    keywords: ["relevance", "measurable", "SMART"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "How can chatbots or IVRS be used in community engagement?",
    keywords: ["two-way communication", "accessibility", "automation"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "What is a heat map and how can it be useful in planning?",
    keywords: ["visual tool", "hotspot analysis"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "How can digital storytelling support TSF initiatives?",
    keywords: ["engagement", "awareness", "multimedia"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "What are the advantages of cloud storage for field data?",
    keywords: ["access", "security", "sharing"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "What is real-time data and why is it useful?",
    keywords: ["quick decisions", "live updates", "monitoring"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "How do you ensure data consistency across programs?",
    keywords: ["standard formats", "templates", "training"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "How do APIs help in integrating different tech platforms?",
    keywords: ["automation", "interoperability", "data flow"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "What is data triangulation in MER practice?",
    keywords: ["cross-validation", "sources", "reliability"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "How do QR codes support program delivery or tracking?",
    keywords: ["attendance", "verification", "monitoring"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "What is a digital beneficiary management system?",
    keywords: ["records", "history", "services tracking"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "How would you present data insights to a non-technical audience?",
    keywords: ["charts", "storytelling", "summary"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "How can drones support development or infra planning?",
    keywords: ["aerial mapping", "monitoring", "construction"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "How can you use Excel for rural development data analysis?",
    keywords: ["pivot tables", "charts", "formulas"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "What is data literacy and why is it important for field staff?",
    keywords: ["interpretation", "usage", "empowerment"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "What is your experience with Python, SQL, or R in analysis?",
    keywords: ["automation", "analytics", "dashboards"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "How does TSF use analytics in its flagship programs?",
    keywords: ["Samvaad data", "health insights", "school attendance"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "What is a Theory of Change and how is it linked to data?",
    keywords: ["assumptions", "outcomes", "impact metrics"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "How do you ensure inclusivity in digital program design?",
    keywords: ["local language", "gender-aware", "offline mode"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "How can SMS campaigns help in behavioral change programs?",
    keywords: ["reminders", "nudges", "reach"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "What kind of training do field staff need to go digital?",
    keywords: ["app usage", "reporting", "troubleshooting"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "How can facial recognition or biometric tech support schemes?",
    keywords: ["authentication", "identity", "security"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "Give an example of a tech-based TSF project you admire.",
    keywords: ["RISHTA", "Darpan", "MIS portals", "WADI mapping"],
    scoreMode: "keyword"
  }
];