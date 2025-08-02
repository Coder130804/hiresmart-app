const wecoQuestions = [
  {
    id: 1,
    question: "What does a positive workplace ecosystem mean to you?",
    keywords: ["collaboration", "inclusion", "trust"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "How would you describe a psychologically safe workplace?",
    keywords: ["openness", "no fear of judgment", "mental well-being"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "What are key elements of an inclusive workplace?",
    keywords: ["diversity", "equity", "gender sensitivity"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "How does TSF ensure a healthy work environment for its staff and field teams?",
    keywords: ["dignity", "respect", "zero tolerance"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "What is the importance of internal communication in an organization?",
    keywords: ["clarity", "feedback loop", "alignment"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "How would you handle workplace conflict?",
    keywords: ["mediation", "empathy", "resolution"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "What are the indicators of a toxic workplace culture?",
    keywords: ["blame", "stress", "lack of transparency"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "What practices promote gender equity at work?",
    keywords: ["equal opportunity", "sensitization", "PoSH"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "What is PoSH and why is it important in workplaces like TSF?",
    keywords: ["prevention", "redressal", "harassment"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "How can field staff be supported to maintain a good work-life balance?",
    keywords: ["flexibility", "wellbeing", "realistic workload"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "What do you understand by ‘employee engagement’?",
    keywords: ["motivation", "participation", "morale"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "How does leadership affect workplace culture?",
    keywords: ["role modeling", "values", "direction"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "Why are ethics important in the workplace?",
    keywords: ["integrity", "accountability", "fairness"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "How do you respond to feedback from peers or supervisors?",
    keywords: ["growth mindset", "learning", "openness"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "How should grievances be handled in a workplace setting?",
    keywords: ["formal mechanisms", "fairness", "confidentiality"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "How can team motivation be maintained in tough field conditions?",
    keywords: ["encouragement", "team bonding", "goal alignment"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "How do you see transparency in daily work interactions?",
    keywords: ["honest reporting", "clear communication"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "What role does emotional intelligence play in managing people?",
    keywords: ["empathy", "regulation", "social awareness"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "What are some ways to build team cohesion in cross-functional teams?",
    keywords: ["shared goals", "respect", "communication"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "How do you deal with bias or favoritism at work?",
    keywords: ["awareness", "fairness", "addressing issues"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "What is your understanding of a decentralized workplace?",
    keywords: ["autonomy", "distributed teams", "accountability"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "What mechanisms ensure accountability at TSF?",
    keywords: ["reporting structure", "MIS", "peer review"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "Why is documentation culture important?",
    keywords: ["knowledge management", "learning", "evidence"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "What is the significance of workplace diversity in rural contexts?",
    keywords: ["perspectives", "representation", "innovation"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "How would you handle burnout in yourself or a teammate?",
    keywords: ["boundaries", "workload sharing", "communication"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "Why is training important for junior staff or interns?",
    keywords: ["skill-building", "confidence", "capacity"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "How can performance appraisal be made more effective?",
    keywords: ["fair KPIs", "feedback", "clarity"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "What are some non-monetary ways to appreciate employees?",
    keywords: ["recognition", "growth opportunities", "appreciation"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "What values do you think every team should uphold?",
    keywords: ["integrity", "respect", "teamwork"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "How does TSF embed organizational values into daily work?",
    keywords: ["orientation", "leadership modeling", "feedback"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "What is peer learning and how does it help a workplace?",
    keywords: ["collaboration", "shared knowledge", "trust"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "How do you deal with miscommunication in remote settings?",
    keywords: ["clarity", "active listening", "follow-ups"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "How would you help new team members integrate smoothly?",
    keywords: ["onboarding", "buddy system", "open dialogue"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "How does the physical setup of a workplace affect productivity?",
    keywords: ["ergonomics", "access", "light/ventilation"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "What’s the role of leadership in times of change?",
    keywords: ["direction", "support", "transparency"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "What kind of reporting culture helps improve work outcomes?",
    keywords: ["timely", "structured", "solution-oriented"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "What is an example of good workplace ethics in the field?",
    keywords: ["honest data collection", "respect to community"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "How does a growth mindset influence team success?",
    keywords: ["adaptability", "positivity", "learning"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "Why is inclusive language important in communication?",
    keywords: ["respect", "sensitivity", "belonging"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "How can organizations like TSF support mental health?",
    keywords: ["counseling", "safe space", "awareness"],
    scoreMode: "keyword"
  }
];