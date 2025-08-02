const pnaQuestions = [
  {
    id: 1,
    question: "What does planning mean in a development context?",
    keywords: ["roadmap", "goal setting", "resource allocation"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "Why is analytics important for foundations like TSF?",
    keywords: ["data-driven decisions", "impact assessment", "strategy"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "How would you create a project plan for a rural initiative?",
    keywords: ["objectives", "timeline", "milestones", "budget"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "What are Key Performance Indicators (KPIs)?",
    keywords: ["measurable", "monitoring", "outcomes"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "What’s the difference between output and outcome?",
    keywords: ["activities vs. impact", "short-term vs. long-term"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "How do you ensure your plans are aligned with community needs?",
    keywords: ["participatory planning", "needs assessment"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "What is the role of baseline data in project planning?",
    keywords: ["comparison", "benchmarking", "impact measurement"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "How do you handle incomplete or inaccurate data?",
    keywords: ["validation", "triangulation", "cleaning"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "What is a logical framework or logframe?",
    keywords: ["goal", "purpose", "outputs", "indicators"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "How can data visualizations help in reporting?",
    keywords: ["clarity", "insights", "decision support"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "What types of data are useful in community development?",
    keywords: ["demographic", "socio-economic", "qualitative"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "How would you prioritize projects with limited resources?",
    keywords: ["impact", "feasibility", "urgency"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "How do you ensure time-bound delivery of community programs?",
    keywords: ["Gantt charts", "monitoring", "accountability"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "What is a Theory of Change?",
    keywords: ["assumptions", "pathways", "impact logic"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "How would you track progress over time?",
    keywords: ["baseline", "midline", "endline", "dashboards"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "How do you analyze gender-disaggregated data?",
    keywords: ["equity", "inclusion", "separate indicators"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "Why is evidence-based planning important in development?",
    keywords: ["efficiency", "relevance", "informed decisions"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "How do you handle outliers in your dataset?",
    keywords: ["analysis", "removal", "explanation"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "How do you build a performance dashboard for a project?",
    keywords: ["real-time", "indicators", "user-friendly"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "What is data triangulation?",
    keywords: ["cross-verification", "reliability", "multiple sources"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "How do you present data to a non-technical audience?",
    keywords: ["visuals", "infographics", "simplified language"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "How do you estimate the budget for a project plan?",
    keywords: ["cost estimation", "unit costing", "contingencies"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "What role does GIS mapping play in planning?",
    keywords: ["location data", "resource allocation", "reach analysis"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "How do you ensure data quality in field surveys?",
    keywords: ["training", "supervision", "digital tools"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "How can planning help scale successful projects?",
    keywords: ["replication", "standardization", "adaptability"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "What are some common tools used in development analytics?",
    keywords: ["Excel", "Power BI", "Tableau", "KoboToolbox"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "What is a situation analysis and how is it conducted?",
    keywords: ["current status", "gaps", "SWOT"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "How do you evaluate the cost-effectiveness of a project?",
    keywords: ["cost-benefit", "efficiency", "impact per rupee"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "Why is regular monitoring important?",
    keywords: ["corrective actions", "accountability"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "What is the difference between monitoring and evaluation?",
    keywords: ["real-time vs. post-assessment", "process vs. impact"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "How do you create SMART objectives in a plan?",
    keywords: ["Specific", "Measurable", "Achievable", "Relevant", "Time-bound"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "How does TSF ensure transparency in its planning process?",
    keywords: ["community involvement", "documentation", "social audit"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "What is community scorecard and how is it used?",
    keywords: ["citizen feedback", "rating", "improvement"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "How can digital tools help in analytics at TSF?",
    keywords: ["efficiency", "accuracy", "real-time updates"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "What do you understand by predictive analytics?",
    keywords: ["forecasting", "trends", "proactive planning"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "How do you integrate feedback into future plans?",
    keywords: ["lessons learned", "review", "adaptive strategy"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "What is impact forecasting?",
    keywords: ["future outcomes", "scenario planning"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "How do you evaluate the sustainability of a program?",
    keywords: ["long-term impact", "community ownership", "resource use"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "Why is stakeholder mapping important in planning?",
    keywords: ["roles", "influence", "coordination"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "Give an example of how TSF used data for strategic decisions.",
    keywords: ["Samvaad impact", "skill gaps", "dropout analysis"],
    scoreMode: "keyword"
  }
];