const cdQuestions = [
  {
    id: 1,
    question: "What does community development mean to you?",
    keywords: ["empowerment", "participation", "sustainability"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "How do you identify the needs of a community?",
    keywords: ["baseline survey", "PRA", "community meetings"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "What is participatory development?",
    keywords: ["involvement", "decision-making", "ownership"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "How would you engage marginalized groups in development programs?",
    keywords: ["inclusion", "representation", "trust-building"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "Why is trust-building important in community work?",
    keywords: ["rapport", "transparency", "collaboration"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "How do you define a sustainable community initiative?",
    keywords: ["long-term", "self-reliance", "capacity-building"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "What role do Self Help Groups (SHGs) play in rural development?",
    keywords: ["microfinance", "collective action", "women empowerment"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "What is your understanding of CSR and how does TSF relate to it?",
    keywords: ["corporate responsibility", "social impact", "Tata Group"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "What are some tools for community mobilization?",
    keywords: ["street plays", "group discussions", "rallies"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "How do you evaluate the success of a community development program?",
    keywords: ["impact indicators", "feedback", "participation"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "What’s the difference between relief and development work?",
    keywords: ["short-term vs long-term", "reactive vs proactive"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "How do you prioritize among different needs in a community?",
    keywords: ["urgency", "resources", "participatory ranking"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "Why is it important to involve community leaders in projects?",
    keywords: ["influence", "acceptance", "facilitation"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "How can education lead to overall community upliftment?",
    keywords: ["awareness", "opportunities", "literacy"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "How would you handle resistance from a local community?",
    keywords: ["dialogue", "understanding concerns", "mediation"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "What is capacity building and why is it crucial?",
    keywords: ["skill enhancement", "empowerment", "sustainability"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "What role do youth play in community development?",
    keywords: ["energy", "innovation", "leadership"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "What are Village Development Committees (VDCs)?",
    keywords: ["representation", "decision-making", "monitoring"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "How do you ensure gender inclusivity in development plans?",
    keywords: ["equal participation", "safe spaces", "gender lens"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "What’s the importance of data in planning interventions?",
    keywords: ["evidence-based", "measurable", "tracking"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "How would you work in a tribal village with limited literacy?",
    keywords: ["visual tools", "oral communication", "cultural sensitivity"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "What is your understanding of livelihood mapping?",
    keywords: ["income sources", "skill inventory", "seasonal calendar"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "How do you promote ownership in community-led initiatives?",
    keywords: ["handholding", "training", "exit strategy"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "How can infrastructure improve community well-being?",
    keywords: ["water", "roads", "health centers"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "What is the role of NGOs in rural development?",
    keywords: ["service delivery", "advocacy", "facilitation"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "How do you build partnerships with government departments?",
    keywords: ["convergence", "MoUs", "schemes"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "What is a Gram Sabha and how does it contribute to planning?",
    keywords: ["transparency", "community voice", "planning"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "What challenges do women face in rural development work?",
    keywords: ["mobility", "time", "patriarchy"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "What is social audit and why is it important?",
    keywords: ["accountability", "community review", "transparency"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "How would you ensure your project aligns with TSF’s values?",
    keywords: ["dignity", "inclusiveness", "integrity", "trust"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "How does TSF approach long-term community transformation?",
    keywords: ["sustained engagement", "ecosystem approach"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "What’s the importance of preserving local culture in development work?",
    keywords: ["identity", "pride", "acceptance"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "How do you facilitate behavior change in a village context?",
    keywords: ["BCC", "community influencers", "demonstration"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "How can digital tools support rural community development?",
    keywords: ["access to info", "e-governance", "awareness"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "What’s the relevance of climate resilience in rural planning?",
    keywords: ["disaster readiness", "sustainable farming", "WASH"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "How do you deal with political interference in fieldwork?",
    keywords: ["neutrality", "stakeholder mapping", "community trust"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "What is asset-based community development?",
    keywords: ["local strengths", "capacity focus", "positive framing"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "Why is inter-generational dialogue important in rural communities?",
    keywords: ["continuity", "wisdom", "inclusion"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "What role do festivals and cultural events play in development?",
    keywords: ["bonding", "participation", "communication"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "Give an example of a successful TSF community initiative you admire.",
    keywords: ["Samvaad", "RISHTA", "Masti Ki Pathshala", "Nari Shakti"],
    scoreMode: "keyword"
  }
];
