const financeQuestions = [
  {
    id: 1,
    question: "What is the role of finance in a non-profit organization like TSF?",
    keywords: ["budgeting", "compliance", "fund utilization"],
    scoreMode: "keyword"
  },
  {
    id: 2,
    question: "How do you ensure proper fund utilization in development projects?",
    keywords: ["tracking", "MIS reports", "approvals"],
    scoreMode: "keyword"
  },
  {
    id: 3,
    question: "What is CSR budget allocation and how does it work?",
    keywords: ["2% rule", "Companies Act", "project head"],
    scoreMode: "keyword"
  },
  {
    id: 4,
    question: "How do you handle multiple donor fund accounts?",
    keywords: ["segregation", "fund tracking", "ledger"],
    scoreMode: "keyword"
  },
  {
    id: 5,
    question: "What is financial reporting in NGO sector?",
    keywords: ["utilization certificates", "balance sheets", "quarterly reports"],
    scoreMode: "keyword"
  },
  {
    id: 6,
    question: "What are key components of an NGO balance sheet?",
    keywords: ["assets", "liabilities", "grants received"],
    scoreMode: "keyword"
  },
  {
    id: 7,
    question: "How is a financial audit conducted in NGOs?",
    keywords: ["statutory audit", "internal audit", "vouchers"],
    scoreMode: "keyword"
  },
  {
    id: 8,
    question: "How do you maintain transparency in accounts?",
    keywords: ["documentation", "audits", "stakeholder reporting"],
    scoreMode: "keyword"
  },
  {
    id: 9,
    question: "What software/tools are commonly used for NGO accounting?",
    keywords: ["Tally", "Excel", "Zoho Books"],
    scoreMode: "keyword"
  },
  {
    id: 10,
    question: "What is fund flow management?",
    keywords: ["inflow-outflow", "tracking", "forecasting"],
    scoreMode: "keyword"
  },
  {
    id: 11,
    question: "What are FCRA regulations and why are they important?",
    keywords: ["foreign funds", "registration", "compliance"],
    scoreMode: "keyword"
  },
  {
    id: 12,
    question: "What is a utilization certificate (UC)?",
    keywords: ["fund use", "certified", "mandatory"],
    scoreMode: "keyword"
  },
  {
    id: 13,
    question: "What are the steps involved in processing a project expense?",
    keywords: ["approval", "bills", "ledger entry"],
    scoreMode: "keyword"
  },
  {
    id: 14,
    question: "What is the difference between capex and opex in development finance?",
    keywords: ["capital expense", "operational expense"],
    scoreMode: "keyword"
  },
  {
    id: 15,
    question: "What are the essentials of monthly financial reconciliation?",
    keywords: ["bank statement", "ledger", "mismatch"],
    scoreMode: "keyword"
  },
  {
    id: 16,
    question: "What is the importance of internal financial controls?",
    keywords: ["fraud prevention", "checks", "accountability"],
    scoreMode: "keyword"
  },
  {
    id: 17,
    question: "How do you manage vendor payments in rural operations?",
    keywords: ["bills", "approvals", "transfer"],
    scoreMode: "keyword"
  },
  {
    id: 18,
    question: "What is petty cash and how is it managed?",
    keywords: ["small expenses", "imprest system", "record"],
    scoreMode: "keyword"
  },
  {
    id: 19,
    question: "How do you handle delayed reimbursements?",
    keywords: ["escalation", "follow-up", "documentation"],
    scoreMode: "keyword"
  },
  {
    id: 20,
    question: "What are CSR Schedule VII activities relevant to TSF?",
    keywords: ["education", "health", "livelihoods"],
    scoreMode: "keyword"
  },
  {
    id: 21,
    question: "What is the role of Finance in Monitoring & Evaluation (M&E)?",
    keywords: ["budget tracking", "fund-performance link"],
    scoreMode: "keyword"
  },
  {
    id: 22,
    question: "How are budgets prepared for community development projects?",
    keywords: ["need-based", "activity-wise", "head-wise"],
    scoreMode: "keyword"
  },
  {
    id: 23,
    question: "How do you ensure compliance with GST in NGO operations?",
    keywords: ["invoice", "filing", "exemptions"],
    scoreMode: "keyword"
  },
  {
    id: 24,
    question: "What is the purpose of a finance MIS in TSF projects?",
    keywords: ["real-time data", "budget vs actuals"],
    scoreMode: "keyword"
  },
  {
    id: 25,
    question: "How do you track project-wise expenditures?",
    keywords: ["coding system", "ledger separation"],
    scoreMode: "keyword"
  },
  {
    id: 26,
    question: "What is a donor agreement and its financial implications?",
    keywords: ["terms", "fund use", "reporting"],
    scoreMode: "keyword"
  },
  {
    id: 27,
    question: "What is the importance of timely fund disbursal?",
    keywords: ["implementation", "credibility", "vendor relations"],
    scoreMode: "keyword"
  },
  {
    id: 28,
    question: "What are common financial risks in grassroots development work?",
    keywords: ["cash handling", "delays", "audit gaps"],
    scoreMode: "keyword"
  },
  {
    id: 29,
    question: "What is a cost-benefit analysis in development finance?",
    keywords: ["outcomes", "efficiency", "impact"],
    scoreMode: "keyword"
  },
  {
    id: 30,
    question: "How do you handle multi-year project accounting?",
    keywords: ["opening balance", "carried forward", "reporting"],
    scoreMode: "keyword"
  },
  {
    id: 31,
    question: "What is zero-based budgeting?",
    keywords: ["fresh planning", "need-driven"],
    scoreMode: "keyword"
  },
  {
    id: 32,
    question: "How do you ensure financial discipline across field teams?",
    keywords: ["SOPs", "training", "checks"],
    scoreMode: "keyword"
  },
  {
    id: 33,
    question: "What are earmarked vs unrestricted funds?",
    keywords: ["designated purpose", "general use"],
    scoreMode: "keyword"
  },
  {
    id: 34,
    question: "What are audit red flags in NGO finance?",
    keywords: ["unapproved bills", "late entries", "mismatched UC"],
    scoreMode: "keyword"
  },
  {
    id: 35,
    question: "How do you close books at the end of financial year?",
    keywords: ["final entry", "reconciliation", "audit prep"],
    scoreMode: "keyword"
  },
  {
    id: 36,
    question: "What role does finance play in partnership proposals?",
    keywords: ["costing", "viability", "co-funding"],
    scoreMode: "keyword"
  },
  {
    id: 37,
    question: "How do you handle advances given to field staff?",
    keywords: ["acknowledgment", "settlement", "documentation"],
    scoreMode: "keyword"
  },
  {
    id: 38,
    question: "What financial documents must be maintained for CSR scrutiny?",
    keywords: ["invoices", "UC", "audit report"],
    scoreMode: "keyword"
  },
  {
    id: 39,
    question: "What are key sections of the Income Tax Act applicable to NGOs?",
    keywords: ["12A", "80G", "10(23C)"],
    scoreMode: "keyword"
  },
  {
    id: 40,
    question: "How do you align financial decisions with TSF’s mission and values?",
    keywords: ["ethical spending", "transparency", "impact focus"],
    scoreMode: "keyword"
  }
];

