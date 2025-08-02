const grassQuestions = [
  {
    id: 1,
    question: "What is decentralised planning?",
    keywords: ["bottom-up approach", "local needs", "people’s participation"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "How does the Panchayati Raj system support grassroot governance?",
    keywords: ["3-tier system", "Gram Panchayat", "local governance"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "What are Gram Sabhas and why are they important?",
    keywords: ["village assembly", "decision-making", "accountability"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "What role does a Village Development Plan (VDP) play?",
    keywords: ["roadmap", "community needs", "planning tool"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "How would you involve community members in local planning?",
    keywords: ["participatory rural appraisal (PRA)", "focus groups"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "What are the key functions of a Gram Panchayat?",
    keywords: ["service delivery", "infrastructure", "local disputes"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "How does TSF support decentralised governance in rural areas?",
    keywords: ["capacity building", "convergence", "local institutions"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "What is the difference between Gram Sabha and Gram Panchayat?",
    keywords: ["citizens vs elected body", "approval vs implementation"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "Why is community participation critical in local development?",
    keywords: ["ownership", "relevance", "sustainability"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "How do you ensure transparency in village-level planning?",
    keywords: ["social audit", "wall paintings", "open meetings"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "What is convergence in the context of local governance?",
    keywords: ["integration", "multiple schemes", "collective impact"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "How can SHGs contribute to grassroots governance?",
    keywords: ["leadership", "voice", "community mobilisation"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "What is the role of traditional tribal councils in governance?",
    keywords: ["customary laws", "community leadership", "respect"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "How can village youth be involved in governance processes?",
    keywords: ["youth clubs", "awareness drives", "representation"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "What are some common challenges in grassroots planning?",
    keywords: ["lack of awareness", "fund delay", "power imbalance"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "How would you facilitate a participatory planning session?",
    keywords: ["mapping tools", "seasonal calendars", "visioning"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "How are funds allocated at the Gram Panchayat level?",
    keywords: ["15th Finance Commission", "state schemes", "own revenue"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "What role do women play in decentralised governance?",
    keywords: ["reserved seats", "Mahila Sabhas", "SHG leaders"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "What is the significance of the 73rd Constitutional Amendment?",
    keywords: ["decentralisation", "PRI", "constitutional status"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "What is e-Governance in rural development?",
    keywords: ["digital tools", "MIS", "online grievance redressal"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "What are standing committees in Panchayats?",
    keywords: ["health", "education", "finance – local planning"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "How can digital literacy strengthen grassroots governance?",
    keywords: ["informed citizens", "better access", "online services"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "Why is social accountability important in local governance?",
    keywords: ["feedback", "monitoring", "transparency"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "What tools can be used for village-level monitoring?",
    keywords: ["scorecards", "community tracker", "mobile apps"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "How do tribal governance systems differ from PRI?",
    keywords: ["customary norms", "parallel structures", "inclusion"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "How can you train elected representatives effectively?",
    keywords: ["capacity building", "role clarity", "handholding"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "What is the role of NGOs in promoting local governance?",
    keywords: ["facilitation", "technical support", "community link"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "How can you mobilize communities to attend Gram Sabhas?",
    keywords: ["door-to-door campaigns", "cultural events", "reminders"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "What are the components of a micro-plan?",
    keywords: ["resource mapping", "need assessment", "prioritization"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "What is wall-writing and why is it used in rural planning?",
    keywords: ["information dissemination", "transparency"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "What does “inclusive governance” mean in rural areas?",
    keywords: ["SC/ST/women participation", "no discrimination"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "How do development schemes like MGNREGA support decentralised planning?",
    keywords: ["job cards", "village-level plans", "assets creation"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "How can village institutions ensure inter-departmental coordination?",
    keywords: ["convergence meetings", "shared goals", "documentation"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "What is the significance of citizen charters in Panchayats?",
    keywords: ["service standards", "accountability", "awareness"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "What role do frontline workers (e.g., AWWs, ASHAs) play in grassroots governance?",
    keywords: ["service delivery", "data collection", "community bridge"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "How can you address corruption at the Panchayat level?",
    keywords: ["vigilance committees", "transparency", "grievance redress"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "How can social equity be ensured in local planning?",
    keywords: ["marginalized groups focus", "equal access"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "What role does TSF play in supporting Gram Sabha planning?",
    keywords: ["facilitation", "tools", "IEC material"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "How would you evaluate a Panchayat’s performance?",
    keywords: ["indicators", "report cards", "citizen feedback"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "Share an example of a successful grassroots initiative supported by TSF.",
    keywords: ["Samvaad", "RISHTA", "RISHTA Fellowship", "model village"],
    scoreMode: "keyword"
  }
];
