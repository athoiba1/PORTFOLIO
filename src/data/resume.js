export const sections = [
  { id: 'hero', name: 'Home', component: null },
  { id: 'about', name: 'About', component: null },
  { id: 'skills', name: 'Skills', component: null },
  { id: 'experience', name: 'Experience', component: null },
  { id: 'projects', name: 'Projects', component: null },
  { id: 'contact', name: 'Contact', component: null },
]

export const resumeData = {
  name: 'Nambram Athoiba Khuman',
  title: 'Systems Engineer & Cloud-Native Developer',
  tagline: 'Building resilient, scalable infrastructure at the intersection of systems, cloud, and security.',
  email: 'singharajdeep59@gmail.com',
  phone: '+91 69011 81955',
  github: 'https://github.com/athoiba1',
  linkedin: 'https://linkedin.com/in/athoiba',
  location: 'Kanchipuram, India',
  summary: 'Meticulously organized and highly observant Computer Science and Engineering graduate with verified internship experience in systems engineering, containerization, and full-stack automation. Proven success deploying cloud-native web architectures, programming multi-protocol synthetic network simulations, and authoring peer-reviewed deterministic systems safety research. Demonstrates deep server-side development fluency in Java and Python alongside extensive cloud specialization within AWS environments.',

  skills: {
    languages: ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
    frameworks: ['Spring Boot', 'Bootstrap', 'Scapy', 'TensorFlow', 'Machine Learning', 'NLP', 'Data Mining', 'CNN Architectures'],
    cloudDevOps: ['AWS', 'EKS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'IaC', 'Cloud-Native Architecture'],
    csFundamentals: ['DSA', 'OOP', 'RDBMS', 'Operating Systems', 'Network Architecture', 'RESTful APIs', 'Git/GitHub'],
    systemsSecurity: ['IoT', 'Wireless Protocol Simulation (Wi-Fi, 3G, 4G, 5G)', 'FortiGate Security Operations', 'Cybersecurity Analysis', 'Antivirus Ecosystems'],
    dataDesign: ['Data Collection', 'Data Processing', 'Data Analysis', 'Data Visualization', 'UI Design Patterns', 'UI/UX Engineering'],
    leadership: ['Technical Talent Acquisition', 'Personnel Recruitment', 'Team Leadership', 'Technical Resource Alignment'],
  },

  experience: [
    {
      company: 'Reflow Tech',
      location: 'Kanchipuram, India',
      role: 'IoT Engineering Intern',
      period: 'March 2024 – August 2024',
      bullets: [
        'Accomplished systematic migration of legacy, localized IoT microservices into enterprise-grade scalable clusters, improving development-to-deployment alignment across cross-functional engineering pods by executing end-to-end Docker containerization and CI/CD pipelines.',
        'Streamlined corporate talent acquisition strategies and multi-project resource scaling as measured by immediate operational onboarding velocity, by directing technical personnel recruitment and technical skill profiling matrices.',
        'Architectured high-efficiency data collection pipelines spanning physical sensor layers to application endpoints, ensuring 100% structural integration with back-end database schemas and telemetry monitors.',
      ],
    },
  ],

  projects: [
    {
      name: 'Vidya Rakshak: Cloud-Native Full Stack & DevOps Application',
      period: 'October 2025 – November 2025',
      description: 'Secure, automated full-stack blogging application with CI/CD pipelines, self-healing cloud infrastructure, and responsive presentation tier.',
      tech: ['Jenkins', 'Docker', 'Terraform', 'AWS EKS', 'Java Spring Boot', 'Bootstrap'],
      highlights: [
        'Deployed secure, automated full-stack application minimizing human intervention errors and deployment overhead via CI/CD pipelines in Jenkins and Docker.',
        'Engineered self-healing cloud infrastructure measured by seamless multi-node target provisioning using Terraform and AWS EKS.',
        'Optimized data interaction interfaces and server throughput with responsive HTML/Bootstrap presentation tier driven by Java Spring Boot backend.',
      ],
      link: 'https://github.com/athoiba1/vidya-rakshak',
    },
    {
      name: 'Wireless Protocol Simulation & Cellular Tunneling Architecture Using Scapy',
      period: 'September 2025 – November 2025',
      description: 'Comparative network analysis across Wi-Fi, 3G, 4G, and 5G with custom GTP encapsulations in Scapy.',
      tech: ['Scapy', 'Python', 'TensorFlow', 'GTP', 'UMTS', 'LTE', '5G NR'],
      highlights: [
        'Achieved 100% packet delivery confirmation without structural data degradation over multi-hop proxy nodes across Wi-Fi (802.11), 3G (UMTS), 4G (LTE), and 5G (NR).',
        'Engineered custom GPRS Tunneling Protocol (GTP) header encapsulations natively in Scapy packet manipulation framework.',
        'Structured multi-layer synthetic network traffic datasets preprocessed into TensorFlow-ready arrays for deep-learning classification models.',
      ],
      link: 'https://github.com/athoiba1/wireless-simulation',
    },
    {
      name: 'Proof-Carrying Medical Legal Right Advisor (PC-MLRA)',
      period: 'January 2026 – May 2026',
      description: 'Zero-stochastic-inference framework for structured compliance tracking of patient rights with 100% reproducible system tracing.',
      tech: ['Python', 'NLP', 'Legal Informatics', 'Deterministic Systems'],
      highlights: [
        'Accomplished completely safe, zero-stochastic-inference framework for structured compliance tracking of patient rights.',
        'Mapped unstructured natural language user requests to legally grounded records via fixed, deterministic rule-based parsing pipeline without hidden states or ML black-box layers.',
        'Published in International Journal of Advance Research, Ideas and Innovations in Technology (Vol-12, Issue-2).',
      ],
      link: 'https://github.com/NKrockstar1008/pc-mira',
    },
    {
      name: 'UAV-Based Crop Differentiation via CNN',
      period: 'October 2024 – November 2024',
      description: 'High-accuracy automated crop classification across complex environments using CNN topologies.',
      tech: ['Python', 'TensorFlow', 'CNN', 'Computer Vision', 'Precision Agriculture'],
      highlights: [
        'Improved resource utilization parameters for precision agriculture systems across changing illumination and mixed-soil features.',
        'Modeled deep learning pipelines using CNN topologies generating farm management insights for agricultural policymakers.',
      ],
      link: '#',
    },
    {
      name: 'Autonomous Machine-Learning Machine Billing System',
      period: 'July 2024 – September 2024',
      description: 'Automated multi-modal retail checkout with real-time ML pipelines for weight, price, and product classification.',
      tech: ['Python', 'ML', 'Computer Vision', 'Database Systems', 'UI Design'],
      highlights: [
        'Implemented ML pipelines parsing weight, unit price, and product classifications in real-time, significantly reducing processing lag.',
        'Designed optimized user-facing console profile reducing standard data-entry friction through clean UI patterns and efficient DB queries.',
      ],
      link: '#',
    },
    {
      name: 'Advanced Cloud-Integrated Patient Monitoring System (PMS)',
      period: 'January 2024 – February 2024',
      description: 'Emergency medical telemetry linking ambulances to hospitals via GSM microcontrollers and cloud storage.',
      tech: ['IoT', 'GSM', 'Cloud', 'Embedded Systems', 'Real-time Data Sync'],
      highlights: [
        'Accomplished emergency medical telemetry transmission channels linking active ambulances directly to base hospitals.',
        'Integrated hardware and software unifying GSM communication microcontrollers with cloud storage for real-time vital health data synchronization.',
      ],
      link: '#',
    },
    {
      name: 'Soil Moisture Automation & Optimized Sensor System',
      period: 'October 2023',
      description: 'Fully automated closed-loop agricultural irrigation control with Arduino-based sensor arrays.',
      tech: ['Arduino', 'IoT', 'Embedded C', 'Sensor Networks', 'Automation'],
      highlights: [
        'Reduced unnecessary environmental water waste by engineering Arduino-based soil moisture array linked to real-time pump relay loops.',
      ],
      link: '#',
    },
  ],

  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      period: 'June 2022 – May 2026',
      gpa: '8.03 / 10.00',
      details: 'EQF Level 6. Core: Machine Learning, NLP, AI, IoT, Leadership Principles, UI/UX Architecture, Mobile App Development, Generative AI.',
    },
  ],

  publications: [
    {
      title: 'A Proof-Carrying Medical Legal Right Advisor where natural language generation is intentionally non-intelligent',
      authors: 'Khuman, N. A., Sharma, N. K., & Joshi, S.',
      venue: 'International Journal of Advance Research, Ideas and Innovations in Technology',
      year: 2026,
      volume: 'Volume-12, Issue-2',
      description: 'Documented verified method to map queries to static legal structures derived from NHRC Charter of Patients\' Rights (2019) and IMC Ethics Regulations (2002) using reproducible normalized proof traces.',
      link: 'https://github.com/NKrockstar1008/pc-mira',
    },
  ],

  certifications: [
    { name: 'Fortinet Certified Associate (FCA) – Cybersecurity', issuer: 'Fortinet', date: 'June 2025', detail: 'Expert-level proficiency in high-level routing, firewalls, and security policies on physical and cloud FortiGate architectures.' },
    { name: 'AWS Academy Graduate – Machine Learning Foundations', issuer: 'AWS Academy', date: 'February 2024', detail: 'Deep structural understanding of cloud infrastructure, model deployment, and ML pipelines in AWS.' },
    { name: 'Google Specialist – Introduction to Generative AI Concepts', issuer: 'Google', date: 'March 2024', detail: 'Foundational LLM architecture, generative paradigms, and prompt vector execution workflows.' },
    { name: 'Reflow Tech – Industrial IoT Specialization Certificate', issuer: 'Reflow Tech', date: 'June 2024', detail: 'Enterprise deployment protocols, edge logic, and machine telemetry patterns.' },
    { name: 'First Place Champion – SRMIST Generative AI Ideathon', issuer: 'SRMIST', date: 'March 2024', detail: 'Top classification for original technical system prototyping and architecture design.' },
    { name: 'Advanced Multilingual Vertical Core Delegate – SRM ACM Health Conclave', issuer: 'SRM ACM', date: '2024', detail: '' },
  ],
}