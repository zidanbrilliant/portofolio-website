import { LucideIcon, Github, Linkedin, Mail, FileText, ExternalLink, Database, Brain, Code, BarChart, Layers, Terminal } from 'lucide-react';

export interface Project {
  title: string;
  role: string;
  date: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  metrics: string[];
  contribution: string;
  links: {
    repo?: string;
    demo?: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
}

export const CONTENT = {
  name: "Muhammad Zidan Brilliant",
  role: "AI Engineer & Data Scientist",
  headline: "Building Intelligent Data Solutions & LLM-Powered Agents",
  summary: "Fresh Graduate in Informatics Engineering with a strong focus on Data Analytics, Data Science, and AI Engineering. Proven ability to build end-to-end data solutions, including data preprocessing, analytics, ETL pipelines, machine learning models, and LLM-based AI agents.",
  valueProp: "Transforming complex data into actionable business intelligence through advanced AI and robust engineering.",
  metrics: [
    { label: "GPA", value: "3.86/4.00" },
    { label: "ML Accuracy", value: "94-100%" },
    { label: "Projects", value: "7+" },
    { label: "Competition", value: "National Finalist" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/zidanbrilliant", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/zidanbrilliant", icon: Linkedin },
    { name: "Email", url: "mailto:zidanbrilliant@gmail.com", icon: Mail },
    { name: "Resume", url: "/resume.pdf", icon: FileText }
  ],
  skills: {
    categories: [
      { name: "Machine Learning", value: 90 },
      { name: "Data Engineering", value: 80 },
      { name: "Data Analytics", value: 95 },
      { name: "Backend Dev", value: 75 },
      { name: "UI/UX Design", value: 75 }
    ],
    tools: [
      "Python", "SQL", "Power BI", "Pandas", "NumPy", "LangChain", 
      "LLMs", "Prophet", "FastAPI", "Apache Airflow", "Docker", "Figma"
    ],
    experienceFocus: [
      { name: "ML/AI", value: 40 },
      { name: "Data Eng", value: 30 },
      { name: "Analytics", value: 30 }
    ]
  },
  projects: [
    {
      title: "AI Business Agent",
      role: "AI Engineer & Data Scientist",
      date: "Jan 2026",
      description: "Real-time AI-driven analytics system combining time-series forecasting and GenAI.",
      problem: "Businesses needed a way to interact with complex sales data and get predictive insights without technical SQL knowledge.",
      approach: "Integrated Prophet for forecasting and LangChain agents for natural language querying.",
      tech: ["Python", "LangChain", "Prophet", "OpenAI", "FastAPI"],
      metrics: ["Real-time data processing", "Natural language interface"],
      contribution: "Built the end-to-end system from data ingestion to the chat interface.",
      links: { demo: "https://ai-business-agent-brilliant.streamlit.app/" }
    },
    {
      title: "SQL AI Agent",
      role: "AI Engineer & Data Scientist",
      date: "Jan 2026",
      description: "LLM-powered SQL assistant for non-technical users.",
      problem: "Non-technical stakeholders struggled to extract specific data from relational databases.",
      approach: "Developed a FastAPI backend that translates natural language to validated SQL queries.",
      tech: ["FastAPI", "LLMs", "SQLAlchemy", "React"],
      metrics: ["Safe query execution", "Transparent results"],
      contribution: "Implemented schema validation and the web UI for query visualization.",
      links: { repo: "https://github.com/zidanbrilliant/sql-ai-agent" }
    },
    {
      title: "Automated Crypto Data Pipeline",
      role: "Data Engineer",
      date: "Jan 2026",
      description: "Robust ETL pipeline for real-time cryptocurrency data extraction.",
      problem: "Manual data collection for crypto trends was inefficient and prone to errors.",
      approach: "Engineered an ETL pipeline using Apache Airflow and Docker for automation.",
      tech: ["Apache Airflow", "Docker", "Pandas", "Python"],
      metrics: ["Automated daily extraction", "Secure CSV storage"],
      contribution: "Developed Python-based DAGs to handle API requests and transformations.",
      links: { repo: "https://github.com/zidanbrilliant/airflow-crypto-etl" }
    },
    {
      title: "Predicting Short-Term Bitcoin Prices",
      role: "Undergraduate Thesis / Data Scientist",
      date: "Aug 2024",
      description: "Developed a machine learning model to predict short-term Bitcoin price movements.",
      problem: "Bitcoin price volatility makes short-term prediction challenging for investors.",
      approach: "Applied various machine learning algorithms to historical price data and sentiment analysis.",
      tech: ["Python", "Machine Learning", "Time Series", "Data Analysis"],
      metrics: ["Publication in JUTIF"],
      contribution: "Conducted the full research, from data collection to model evaluation and publication.",
      links: { demo: "https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/4773" }
    }
  ],
  experience: [
    {
      company: "NIQ (Nielsen IQ)",
      role: "Reference Data Analyst (Project Based)",
      location: "Jakarta, Indonesia",
      period: "April 2025 – Oct 2025",
      description: "Leading consumer intelligence company delivering insights on consumer behavior.",
      responsibilities: [
        "Oversaw Consumer Insights E-commerce Project for precise data labeling across FMCG products.",
        "Managed processing of uncoded items and improved item taxonomy.",
        "Conducted post-processing validation to maintain high accuracy standards.",
        "Supervised image collection workflow for digital assets."
      ]
    },
    {
      company: "PLN Icon Plus",
      role: "Junior Technician Data Analyst (Intern)",
      location: "Jakarta, Indonesia",
      period: "Feb 2024 – Jun 2024",
      description: "Telecommunications and IT services subsidiary of PT PLN.",
      responsibilities: [
        "Conducted data preprocessing for retail and corporate customer datasets.",
        "Performed geocoding and geospatial analysis using ArcGIS Pro.",
        "Developed web scraping scripts for market data collection.",
        "Contributed to ML object detection model for field safety verification."
      ]
    }
  ],
  education: [
    {
      school: "State University of Malang",
      degree: "Bachelor of Informatics Engineering",
      period: "2021 – 2025",
      gpa: "3.86 / 4.00",
      location: "Malang, Indonesia"
    }
  ],
  achievements: [
    "Finalist of National Ideas and Creative Design Competition (LoGraK 2023)"
  ]
};
