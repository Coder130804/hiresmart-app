const supplyQuestions = [
  {
    id: 1,
    question: "What is supply chain management (SCM)?",
    keywords: ["sourcing", "production", "distribution"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "How does SCM support rural entrepreneurship?",
    keywords: ["procurement", "market linkage", "value chain"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "What do you understand by value chain optimization?",
    keywords: ["efficiency", "cost reduction", "integration"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "How does local procurement benefit community development?",
    keywords: ["livelihood", "empowerment", "inclusiveness"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "What are the key components of a rural supply chain?",
    keywords: ["raw materials", "logistics", "delivery"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "How would you ensure timely delivery in remote areas?",
    keywords: ["last-mile delivery", "local networks", "route planning"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "What is reverse logistics and how can it apply in village projects?",
    keywords: ["returns", "waste collection", "recycling"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "What are the challenges of working with informal suppliers?",
    keywords: ["quality", "consistency", "documentation"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "How can digital tools improve supply chain efficiency?",
    keywords: ["inventory tracking", "dashboards", "mobile apps"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "What role does warehousing play in rural supply chains?",
    keywords: ["storage", "buffer stock", "cold chain"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "How would you create a supply chain for a women-led SHG producing handicrafts?",
    keywords: ["raw material sourcing", "packaging", "logistics"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "What is demand forecasting and why is it important?",
    keywords: ["planning", "stock management", "market analysis"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "What are some key supply chain KPIs?",
    keywords: ["lead time", "order accuracy", "cost per unit"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "How can TSF ensure ethical sourcing in its supply chain?",
    keywords: ["fair trade", "compliance", "audits"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "What’s the difference between centralized and decentralized supply chains?",
    keywords: ["flexibility", "scale", "autonomy"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "How would you handle supply chain disruptions in rural areas?",
    keywords: ["contingency planning", "local sourcing"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "What is the bullwhip effect and how can it be avoided?",
    keywords: ["demand fluctuation", "communication", "inventory control"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "What do you mean by Just-in-Time (JIT) delivery?",
    keywords: ["minimal inventory", "efficiency", "coordination"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "How can training local youth improve supply chain operations?",
    keywords: ["skilling", "employment", "capacity building"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "How do logistics costs impact product pricing for village-level enterprises?",
    keywords: ["affordability", "transportation", "margins"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "What’s the significance of supply chain mapping?",
    keywords: ["visibility", "risk management", "optimization"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "How can SHGs be part of a larger supply chain?",
    keywords: ["aggregation", "production", "partnerships"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "What are green supply chains and how do they apply to TSF work?",
    keywords: ["sustainability", "eco-friendly", "carbon footprint"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "How does seasonality affect rural supply chains?",
    keywords: ["crop cycles", "festivals", "availability"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "How do you manage quality control in decentralized production?",
    keywords: ["SOPs", "training", "monitoring"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "What’s the role of a supply chain coordinator in the field?",
    keywords: ["liaison", "scheduling", "troubleshooting"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "How do you design a supply chain that is both efficient and inclusive?",
    keywords: ["local sourcing", "fair pricing", "training"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "How can community enterprises partner with private players?",
    keywords: ["vendor development", "supply agreements"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "What role does inventory management play in rural supply chains?",
    keywords: ["stock visibility", "wastage reduction"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "What software tools are commonly used in SCM?",
    keywords: ["SAP", "ERP", "Tally", "SCM software"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "What is cold chain and when is it required?",
    keywords: ["perishable goods", "temperature control"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "How can cooperatives build better supply chains?",
    keywords: ["collective bargaining", "bulk orders", "distribution"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "What are the risks in rural supply chains?",
    keywords: ["weather", "road connectivity", "supplier dependency"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "How does government policy impact supply chain in rural sectors?",
    keywords: ["MSP", "subsidies", "regulations"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "What is logistics clustering?",
    keywords: ["hub-and-spoke", "cost optimization"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "How can gender equity be promoted in supply chains?",
    keywords: ["women producers", "SHG involvement", "fair wages"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "What KPIs would you use to monitor a community supply chain project?",
    keywords: ["delivery time", "stock turnover", "stakeholder feedback"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "How can local artisans be integrated into national-level supply chains?",
    keywords: ["e-commerce", "branding", "quality standards"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "How would you handle vendor delays in a community project?",
    keywords: ["buffer time", "alternative suppliers", "escalation"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "Give an example of a successful community-based supply chain model.",
    keywords: ["Amul", "FabIndia", "TSF SHG products"],
    scoreMode: "keyword"
  }
];

