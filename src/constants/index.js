export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "achievements",
        title: "Achievements",
    },
    {
        id: "certifications",
        title: "Certifications",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        description: "Building scalable web apps with React, Spring Boot, Node.js, and modern databases.",
        icon: "fullstack",
    },
    {
        title: "App Developer",
        description: "Cross-platform mobile apps with Flutter, Dart, and Firebase integration.",
        icon: "mobile",
    },
    {
        title: "Data Science & AI",
        description: "ML/DL models with PyTorch, TensorFlow, and NLP pipelines using Transformers.",
        icon: "datascience",
    },
    {
        title: "Competitive Programmer",
        description: "Knight on LeetCode, Expert on Codeforces. 1250+ problems solved across platforms.",
        icon: "competitive",
    },
];

const skills = {
    languages: [
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "C++", icon: "cpp" },
        { name: "SQL", icon: "sql" },
        { name: "Dart", icon: "dart" },
        { name: "Go", icon: "go" },
    ],
    frontend: [
        { name: "React.js", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "HTML/CSS", icon: "html" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "Material UI", icon: "mui" },
    ],
    backend: [
        { name: "Spring Boot", icon: "springboot" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Flask", icon: "flask" },
    ],
    databases: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "Redis", icon: "redis" },
        { name: "Firebase", icon: "firebase" },
    ],
    devops: [
        { name: "Docker", icon: "docker" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "AWS", icon: "aws" },
        { name: "Git", icon: "git" },
        { name: "GitHub Actions", icon: "githubactions" },
    ],
    aiml: [
        { name: "PyTorch", icon: "pytorch" },
        { name: "TensorFlow", icon: "tensorflow" },
        { name: "Hugging Face", icon: "huggingface" },
        { name: "Streamlit", icon: "streamlit" },
        { name: "Pandas", icon: "pandas" },
    ],
    tools: [
        { name: "Apache Kafka", icon: "kafka" },
        { name: "Socket.IO", icon: "socketio" },
        { name: "WebRTC", icon: "webrtc" },
        { name: "Postman", icon: "postman" },
        { name: "Figma", icon: "figma" },
    ],
};

const experiences = [
    {
        title: "Software Engineering Virtual Intern",
        company_name: "JPMorgan Chase & Co.",
        subtitle: "Software Engineering Job Simulation on Forage",
        iconBg: "#111113",
        date: "January 2026",
        points: [
            "Integrated Apache Kafka into Spring Boot microservice to consume and deserialize high-volume transaction messages.",
            "Implemented transaction validation and persistence with Spring Data JPA and H2 database, including entity modeling.",
            "Connected service to external REST Incentive API using RestTemplate; developed REST endpoint for querying user balances.",
            "Verified end-to-end system behavior using Maven test suites, troubleshooting reliability issues across message ingestion and database operations.",
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "GirlScript Summer of Code",
        subtitle: "Open Source Program",
        iconBg: "#111113",
        date: "October 2024 – November 2024",
        points: [
            "Contributed to 10+ open source projects by developing and implementing UI functionalities using React.js, Bootstrap, and Tailwind CSS.",
            "Integrated RESTful APIs with MongoDB and Express.js for efficient database operations and data management.",
        ],
    },
    {
        title: "Core Committee Member",
        company_name: "Computer Society of India Club, Nirma University",
        subtitle: "Event Organizer & Contest Developer",
        iconBg: "#111113",
        date: "January 2024 – Present",
        points: [
            "Led a team of 50+ executives to organize Cubix 2025 for 250+ participants across 6 competitive events.",
            "Developed the official CSI website using MERN stack, supporting 1,000+ concurrent users and registrations.",
            "Contributed in preparing algorithms and contests in Bid2Code along with other executive members.",
        ],
    },
    {
        title: "Community Service Volunteer",
        company_name: "Rotary Club, Visnagar",
        subtitle: "Social Service",
        iconBg: "#111113",
        date: "June 2024 – July 2024",
        points: [
            "Contributed to fundraising, polio vaccination, school supplies distribution, tree plantation, and food distribution initiatives.",
            "Assisted in organizing and managing events including Rath Yatra water supply, impacting local community health, education, and welfare.",
        ],
    },
];

const projects = [
    {
        name: "Smart Incident Response System",
        description:
            "Cloud-native microservices platform using Java 21, Spring Boot & Apache Kafka, with 4 independent services. Features an AI-powered RAG resolution engine with pgvector for cosine similarity search, JWT-based auth with RBAC, and React 18 dashboard.",
        tags: [
            { name: "java", color: "tag-blue" },
            { name: "spring-boot", color: "tag-green" },
            { name: "kafka", color: "tag-pink" },
            { name: "docker", color: "tag-cyan" },
            { name: "aws", color: "tag-amber" },
        ],
        source_code_link: "https://github.com/hkpatel321/smart-incident-report-system",
        live_demo_link: "",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        name: "ThreatOps.ai",
        description:
            "AI-Powered SOAR platform with PyTorch LSTM models identifying 12+ attack vectors (SQL injection, DDoS, brute force) with 85%+ confidence. Real-time telemetry pipeline across 6 microservices with Socket.IO.",
        tags: [
            { name: "python", color: "tag-blue" },
            { name: "fastapi", color: "tag-green" },
            { name: "pytorch", color: "tag-pink" },
            { name: "kubernetes", color: "tag-cyan" },
        ],
        source_code_link: "https://github.com/hkpatel321/Smooth_Operator",
        live_demo_link: "",
        gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
        name: "LiveHive Meeting Platform",
        description:
            "Real-time meeting platform handling 10,000+ concurrent WebSocket connections with video, audio, screen sharing, and E2E encrypted chat using WebRTC and Socket.IO.",
        tags: [
            { name: "mern", color: "tag-blue" },
            { name: "socket.io", color: "tag-green" },
            { name: "webrtc", color: "tag-pink" },
        ],
        source_code_link: "https://github.com/hkpatel321/LiveHive",
        live_demo_link: "https://livehivefrontend.onrender.com",
        gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
        name: "Emotion-Based Playlist Generator",
        description:
            "NLP app using fine-tuned RoBERTa transformer to classify 27 emotions from text with 90%+ accuracy. Generates personalized playlists with Spotify/YouTube metadata across 8 genres.",
        tags: [
            { name: "python", color: "tag-blue" },
            { name: "pytorch", color: "tag-green" },
            { name: "nlp", color: "tag-pink" },
            { name: "streamlit", color: "tag-amber" },
        ],
        source_code_link: "https://github.com/hkpatel321/Emotion-Based-Playlist-Generator",
        live_demo_link: "",
        gradient: "from-rose-500/20 to-pink-500/20",
    },
    {
        name: "Pathfinder Visualizer",
        description:
            "Interactive platform to visualize pathfinding algorithms (Dijkstra's, BFS, DFS) with Mapbox API integration for real-world routes, dark/light themes, and AI-powered explanations.",
        tags: [
            { name: "react", color: "tag-blue" },
            { name: "mapbox", color: "tag-green" },
            { name: "algorithms", color: "tag-pink" },
        ],
        source_code_link: "https://github.com/hkpatel321/Algorithm-Visualizer",
        live_demo_link: "",
        gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
        name: "Deepfake Detection System",
        description:
            "End-to-end deepfake detection using CNN and transfer learning with EfficientNet/ResNet. Achieved 92%+ accuracy on validation datasets with facial landmark detection and temporal analysis.",
        tags: [
            { name: "pytorch", color: "tag-blue" },
            { name: "cnn", color: "tag-green" },
            { name: "react", color: "tag-pink" },
        ],
        source_code_link: "https://github.com/hkpatel321/ImageDeepFakeDetection",
        live_demo_link: "",
        gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
        name: "Memories Platform",
        description:
            "Full-stack social platform for sharing memories with CRUD operations, RESTful APIs, JWT auth, tag-based search, pagination, commenting, and a recommendation system for similar posts.",
        tags: [
            { name: "mern", color: "tag-blue" },
            { name: "jwt", color: "tag-green" },
            { name: "rest-api", color: "tag-pink" },
        ],
        source_code_link: "https://github.com/hkpatel321/Memories-FullStackWebsite",
        live_demo_link: "https://shuttermemories.onrender.com/posts",
        gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
        name: "E-commerce Application",
        description:
            "Full-stack e-commerce app with Spring Boot and React, featuring CRUD operations, cart management, and product listing with PostgreSQL backend.",
        tags: [
            { name: "spring-boot", color: "tag-blue" },
            { name: "react", color: "tag-green" },
            { name: "postgresql", color: "tag-pink" },
        ],
        source_code_link: "https://github.com/hkpatel321/EcommerceWebsite",
        live_demo_link: "",
        gradient: "from-green-500/20 to-emerald-500/20",
    },
];

const achievements = [
    {
        title: "1st Place – Ingenium Hackathon 2026",
        description: "Won 1st place at Ingenium Hackathon, Ahmedabad University.",
        icon: "trophy",
        color: "amber",
    },
    {
        title: "Runner-Up – HackaMINED 2026",
        description: "Built an agent-based video editing application among 2,000+ participants at Nirma University.",
        icon: "medal",
        color: "violet",
    },
    {
        title: "LeetCode Knight Badge",
        description: "Max Rating: 1866 | 700+ problems solved | 365-day streak | Highest Contest Rank: 503 (Top 6% globally).",
        icon: "code",
        color: "amber",
    },
    {
        title: "Codeforces Expert",
        description: "Max Rating: 1605 | 550+ problems solved | Highest Rank: 1039 in Div 3 Round 1054.",
        icon: "terminal",
        color: "blue",
    },
    {
        title: "1st Place – CodeAdda Premier League",
        description: "Won college-wide competitive programming contest with 200+ participants.",
        icon: "star",
        color: "emerald",
    },
    {
        title: "Top 35 – Smart India Hackathon",
        description: "Selected among top 35 teams from college at Smart India Hackathon (regional level).",
        icon: "rocket",
        color: "rose",
    },
    {
        title: "District Topper – Gujarat Board",
        description: "Scored 91% (A1 grade) in 12th Gujarat Board. Top 60 in Gujarat & District Topper of Mehsana.",
        icon: "academic",
        color: "blue",
    },
    {
        title: "ACPC Rank 80 – Gujarat",
        description: "Achieved Rank 80 in ACPC Counselling across all of Gujarat (Board + GUJCET combined).",
        icon: "ranking",
        color: "violet",
    },
    {
        title: "Academic Excellence Award",
        description: "Awarded Certificate of Academic Excellence by Nirma University for outstanding performance. CGPA: 9.27.",
        icon: "certificate",
        color: "emerald",
    },
];

const certifications = [
    {
        name: "Database Structures and Management with MySQL",
        issuer: "Meta / Coursera",
        date: "June 2026",
        link: "/Coursera_Database_Structures_and_Management_with_MySQL.pdf",
        color: "blue",
    },
    {
        name: "Supervised Machine Learning: Regression and Classification",
        issuer: "DeepLearning.AI & Stanford University",
        date: "March 2026",
        link: "/Coursera_Supervised_Machine_Learning_Regression_and_Classification.pdf",
        color: "violet",
    },
    {
        name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        issuer: "Oracle",
        date: "November 2025",
        link: "/OCIFoundationsAssociate.pdf",
        color: "rose",
    },
    {
        name: "AWS Academy Graduate — Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        date: "April 2026",
        link: "/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260414-32-26mpwg.pdf",
        badge: "/aws-academy-graduate-cloud-foundations-training-bad.png",
        color: "amber",
    },
    {
        name: "JPMorgan Chase Software Engineering Job Simulation",
        issuer: "Forage / JPMorgan Chase",
        date: "January 2026",
        link: "/JPMC Virtual Internship.pdf",
        color: "blue",
    },
    {
        name: "Spring Boot — Framework Certification",
        issuer: "Online Course",
        date: "2025",
        link: "/SpringBootCertificate.pdf",
        color: "emerald",
    },
    {
        name: "Delta Batch — Competitive Programming",
        issuer: "Apna College",
        date: "2024",
        link: "/certificate-delta-batch-30-65f5884f347fff4fbf00b319.pdf",
        color: "violet",
    },
    {
        name: "Introduction to MCP (Model Context Protocol)",
        issuer: "Online Course",
        date: "2026",
        link: "/certificate_introduction_to_MCP.pdf",
        color: "cyan",
    },
    {
        name: "The Ultimate Guide to Effective Communication",
        issuer: "Udemy",
        date: "2024",
        link: "/certificate-the-ultimate-guide-to-effective-communication-english-premium-63cc1d4aff5eb468886f2177.pdf",
        color: "rose",
    },
];

const codingProfiles = [
    {
        platform: "LeetCode",
        handle: "het_patel485",
        rating: "1866",
        badge: "Knight",
        solved: "700+",
        streak: "365 days",
        highlight: "Top 6% globally",
        url: "https://leetcode.com/u/het_patel485/",
        color: "amber",
    },
    {
        platform: "Codeforces",
        handle: "het_patel485",
        rating: "1605",
        badge: "Expert",
        solved: "550+",
        streak: "",
        highlight: "Rank 1039 in Div 3",
        url: "https://codeforces.com/profile/het_patel485",
        color: "blue",
    },
    {
        platform: "GeeksforGeeks",
        handle: "phet34jh8",
        rating: "",
        badge: "",
        solved: "",
        streak: "",
        highlight: "Active contributor",
        url: "https://www.geeksforgeeks.org/user/phet34jh8/",
        color: "emerald",
    },
];

const education = [
    {
        institution: "Nirma University, Ahmedabad",
        degree: "B.Tech – Computer Science & Engineering",
        grade: "CGPA: 9.27",
        date: "July 2023 – June 2027",
        coursework: "DSA, OOP, DBMS, OS, ML, Deep Learning, Software Engineering, Computer Networks",
    },
    {
        institution: "Auxesia English School, Mehsana",
        degree: "Higher Secondary – Science Stream",
        grade: "91% (A1 Grade)",
        date: "2021 – 2023",
        coursework: "",
    },
];

export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/het-patel-bb04b0286/",
        icon: "linkedin",
    },
    {
        name: "GitHub",
        url: "https://github.com/hkpatel321",
        icon: "github",
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/het_patel485/",
        icon: "leetcode",
    },
    {
        name: "Codeforces",
        url: "https://codeforces.com/profile/het_patel485",
        icon: "codeforces",
    },
    {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/user/phet34jh8/",
        icon: "geeksforgeeks",
    },
    {
        name: "Email",
        url: "mailto:het.patel.tech48@gmail.com",
        icon: "email",
    },
];

export { services, skills, experiences, projects, achievements, certifications, codingProfiles, education };
