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
  summary: "Fresh Graduate in Informatics Engineering from State University of Malang with a strong focus on Data Analytics, Data Science, and AI Engineering. Experienced in handling large-scale datasets through a professional role at NielsenIQ (NIQ), a certified Data Analyst internship at PLN Icon Plus, and currently spearheading AI solutions at TMMIN. Proven ability to build end-to-end data solutions, including data preprocessing, analytics, ETL pipelines, machine learning models, and LLM-based AI agents. Actively involved in leadership and research, a national finalist at LoGraK 2023, and highly proficient in Python, SQL, and Power BI. Passionate about leveraging data and AI to deliver actionable business insights.",
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
      { name: "LLM & Generative AI", value: 88 },
      { name: "Data Science", value: 85 },
      { name: "Data Engineering", value: 80 },
      { name: "MLOps & Deployment", value: 75 }
    ],
    tools: [
      "Python", "SQL", "PyTorch", "Hugging Face", "LangChain", "LangGraph",
      "LLMs", "VLMs", "RAG", "PaddleOCR", "FastAPI", "Streamlit",
      "Docker", "Apache Airflow", "Pandas", "NumPy", "Scikit-learn", "Power BI"
    ],
    experienceFocus: [
      { name: "AI/ML Engineering", value: 50 },
      { name: "Data Science", value: 30 },
      { name: "MLOps", value: 20 }
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
      title: "Crypto Intraday Research Agent",
      role: "AI Engineer & Data Scientist",
      date: "Apr 2026",
      description: "AI-powered decision support system for crypto intraday futures trading using real-time market data and sentiment analysis.",
      problem: "Retail crypto traders lack access to institutional-grade analysis tools that consolidate market data, news sentiment, and technical indicators into actionable intraday insights.",
      approach: "Built a modular pipeline integrating Binance Futures API for market data, RSS news feeds, and Fear & Greed Index, with Streamlit dashboard for interactive analysis.",
      tech: ["Python", "Streamlit", "Binance API", "BeautifulSoup", "Technical Analysis"],
      metrics: ["Real-time market data", "Multi-source sentiment", "Support/resistance levels"],
      contribution: "Developed the complete analysis pipeline and interactive dashboard for intraday trading decisions.",
      links: { repo: "https://github.com/zidanbrilliant/ai-reserach-agent" }
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
    },
    {
      title: "Machine Learning to Classify Breast Cancer",
      role: "Software Developer & Data Scientist",
      date: "Dec 2022",
      description: "Machine learning model for breast cancer classification using Forward Chaining inference method.",
      problem: "Early detection of breast cancer remains challenging, requiring accurate and interpretable classification systems to assist medical diagnosis.",
      approach: "Preprocessed medical datasets and trained a supervised learning model using Forward Chaining inference for improved classification accuracy.",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Data Preprocessing"],
      metrics: ["Early detection accuracy", "Forward Chaining inference"],
      contribution: "Developed the full ML pipeline from data preprocessing to model training and evaluation.",
      links: {}
    },
    {
      title: "Machine Learning to Predict Covid in Indonesia",
      role: "Software Developer & Data Scientist",
      date: "May 2022",
      description: "Predictive model to estimate recovery and mortality rates from COVID-19 cases in Indonesia.",
      problem: "Public health officials needed data-driven forecasts of COVID-19 recovery and mortality rates to allocate resources effectively.",
      approach: "Applied machine learning techniques to real-world pandemic data, enabling trend forecasting for public health analysis.",
      tech: ["Python", "Machine Learning", "Pandas", "Data Analysis"],
      metrics: ["Trend forecasting", "Public health insights"],
      contribution: "Built the predictive model and analyzed real-world pandemic data for actionable insights.",
      links: {}
    }
  ],
  experience: [
    {
      company: "PT Toyota Motor Manufacturing Indonesia (TMMIN)",
      role: "AI Engineer (Contract)",
      location: "North Jakarta, Indonesia",
      period: "May 2026 – Present",
      description: "World-class automotive manufacturing leader and primary production hub for Toyota's global and domestic markets.",
      responsibilities: [
        "Spearheading R&D of AI-powered solutions to accelerate digital transformation within manufacturing operations.",
        "Architecting end-to-end AI OCR solution for automating digitization of internal technical documentation and manufacturing records.",
        "Conducting deep research on Vision-Language Models (Qwen 2.5 VL, PaddleOCR) for high-accuracy handwriting recognition and document parsing.",
        "Managing the full lifecycle of AI research from large-scale data collection and pre-processing to model evaluation and deployment.",
        "Integrating agentic AI workflows to bridge raw data extraction with downstream business intelligence.",
        "Collaborating with cross-functional manufacturing teams to align AI solutions with operational quality standards."
      ]
    },
    {
      company: "NIQ (Nielsen IQ)",
      role: "Reference Data Analyst (Project Based)",
      location: "South Jakarta, Indonesia",
      period: "April 2025 – Oct 2025",
      description: "World's leading consumer intelligence company delivering complete understanding of consumer buying behavior.",
      responsibilities: [
        "Oversaw Consumer Insights E-commerce Project for precise data labeling across thousands of FMCG products.",
        "Managed processing of uncoded items, collaborating with cross-functional teams to improve item taxonomy.",
        "Conducted post-processing validation to maintain high standards of accuracy and consistency with NIQ's global classification system.",
        "Supervised image collection workflow for item creation, ensuring accurate and timely delivery of digital assets.",
        "Performed secondary data quality control to guarantee client-facing datasets met internal quality benchmarks.",
        "Actively participated in team reporting, documentation, and process refinement to optimize project performance.",
        "Contributed to a national-scale retail data intelligence initiative supporting strategic decisions for brands in Indonesia."
      ]
    },
    {
      company: "PLN Icon Plus",
      role: "Junior Technician Data Analyst (Intern)",
      location: "South Jakarta, Indonesia",
      period: "Feb 2024 – Jun 2024",
      description: "Subsidiary of PT PLN (Persero) specializing in telecommunications and IT services for digital connectivity across Indonesia.",
      responsibilities: [
        "Conducted data preprocessing and cleaning for retail and corporate PLN customer datasets.",
        "Performed geocoding of customer data and validated coordinate accuracy using ArcGIS Pro for geospatial analysis.",
        "Executed corporate customer classification based on business sectors to support strategic insights.",
        "Developed and ran web scraping scripts to collect supplementary business and market data.",
        "Contributed to ML object detection model development for safety equipment verification in PLN field operations.",
        "Participated in data center analysis, identifying factors for optimal temperature management.",
        "Collaborated closely with mentors and cross-functional teams for project planning and troubleshooting."
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
