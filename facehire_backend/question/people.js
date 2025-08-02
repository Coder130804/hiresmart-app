const peopleQuestions = [
  {
    id: 1,
    question: "How do you define 'people-centric development'?",
    keywords: ["inclusivity", "needs-driven", "empowerment"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "What makes TSF’s work people-first?",
    keywords: ["dignity", "trust", "community ownership"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "How would you identify the key stakeholders in a community?",
    keywords: ["mapping", "local leaders", "influencers"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "What approach would you use to build rapport with new communities?",
    keywords: ["listening", "respect", "dialogue"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "How do you ensure participation from all community segments?",
    keywords: ["diversity", "outreach", "inclusivity"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "Why is empathy important in development work?",
    keywords: ["understanding", "trust", "relationship"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "How would you handle cultural differences among communities?",
    keywords: ["sensitivity", "local customs", "non-judgmental"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "How do you create safe spaces for marginalized voices?",
    keywords: ["non-discrimination", "open forums", "facilitation"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "What’s the importance of trust-building in community development?",
    keywords: ["transparency", "long-term engagement", "reliability"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "How do you ensure transparency while working with people?",
    keywords: ["clear communication", "documentation", "open meetings"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "What are the basic needs you first assess in a new community?",
    keywords: ["health", "education", "livelihood", "WASH"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "How do you work with resistant or hesitant individuals?",
    keywords: ["patience", "understanding", "soft communication"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "What do you understand by 'social inclusion'?",
    keywords: ["equal opportunity", "non-exclusion", "equity"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "How can behavioral change communication be people-driven?",
    keywords: ["relatable messaging", "peer engagement"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "How do you manage power dynamics among community members?",
    keywords: ["neutrality", "facilitation", "conflict resolution"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "How would you involve youth in people-centric programs?",
    keywords: ["leadership", "volunteering", "peer networks"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "How do you ensure women’s participation in public platforms?",
    keywords: ["timing", "space", "childcare support"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "What is intersectionality and why is it relevant?",
    keywords: ["multiple identities", "layered discrimination"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "How do you adapt your programs for people with disabilities?",
    keywords: ["accessibility", "inclusion", "UDL (universal design)"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "What are the challenges in engaging tribal populations?",
    keywords: ["language", "remoteness", "trust deficit"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "How can people’s aspirations shape development priorities?",
    keywords: ["bottom-up", "goal alignment", "voice"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "What are community champions and how do you identify them?",
    keywords: ["proactive", "respected", "role models"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "How do you prevent elite capture in community development?",
    keywords: ["checks & balances", "broad representation"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "What does ethical engagement with communities look like?",
    keywords: ["informed consent", "transparency", "non-exploitation"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "How can storytelling help in people engagement?",
    keywords: ["emotions", "local relevance", "recall"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "Why is intergenerational dialogue important in rural development?",
    keywords: ["continuity", "wisdom", "shared learning"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "How do you handle emotional burnout in people-facing roles?",
    keywords: ["self-care", "boundaries", "team support"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "What are the signs of meaningful community participation?",
    keywords: ["ownership", "contribution", "leadership"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "How would you respond if a community refuses to cooperate initially?",
    keywords: ["listen", "build trust", "understand reasons"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "What methods can you use to understand community perceptions?",
    keywords: ["FGDs", "interviews", "informal chats"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "How do you engage people who are mobile or migrant?",
    keywords: ["flexible models", "touchpoints", "tech tools"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "What’s the importance of dignity in dealing with vulnerable groups?",
    keywords: ["respect", "empowerment", "voice"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "How do you involve people in monitoring and evaluation?",
    keywords: ["scorecards", "feedback loops", "joint review"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "What role do local languages play in people engagement?",
    keywords: ["accessibility", "comfort", "understanding"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "How do you identify hidden talents within the community?",
    keywords: ["observation", "events", "interactions"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "Why is feedback from community members critical?",
    keywords: ["improvement", "relevance", "responsiveness"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "How can cultural festivals be used for people engagement?",
    keywords: ["bonding", "visibility", "participation"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "What does 'do no harm' mean in community programming?",
    keywords: ["safeguard", "avoid disruption", "anticipate risks"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "How can social capital be strengthened through TSF projects?",
    keywords: ["trust networks", "collaboration", "shared identity"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "What’s your role as a development worker in people-led change?",
    keywords: ["facilitator", "enabler", "bridge"],
    scoreMode: "keyword"
  }
];

