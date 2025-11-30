import {
    // mobile,
    // backend,
    // creator,
    // web,
    // javascript,
    // typescript,
    // html,
    // css,
    // reactjs,
    // redux,
    // tailwind,
    // nodejs,
    // mongodb,
    // git,
    // figma,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    // threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: "web",
    },
    {
        title: "App Developer",
        icon: "mobile",
    },
    {
        title: "Data Science Enthusiast",
        icon: "backend",
    },
    {
        title: "Competitive Programmer",
        icon: "creator",
    },
];

const technologies = [
    {
        name: "Java",
        icon: "java",
    },
    {
        name: "Python",
        icon: "python",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "React JS",
        icon: "reactjs",
    },
    {
        name: "Node JS",
        icon: "nodejs",
    },
    {
        name: "Spring Boot",
        icon: "springboot",
    },
    {
        name: "Flutter",
        icon: "flutter",
    },
    {
        name: "PostgreSQL",
        icon: "postgresql",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
    },
    {
        name: "Three JS",
        icon: "threejs",
    },
    {
        name: "Git",
        icon: "git",
    },
    {
        name: "Docker",
        icon: "docker",
    },
    {
        name: "C++",
        icon: "cpp",
    },
];

const experiences = [
    {
        title: "Open Source Contributor",
        company_name: "GirlScript Summer of Code",
        icon: "meta", // Placeholder
        iconBg: "#E6DEDD",
        date: "October 2024 - November 2024",
        points: [
            "Developed and implemented multiple UI functionalities using React.js, Bootstrap, and Tailwind CSS.",
            "Integrated RESTful APIs with MongoDB and Express.js for efficient database operations.",
            "Collaborated with the open-source community to enhance project features.",
        ],
    },
    {
        title: "Community Service Volunteer",
        company_name: "Rotary Club, Visnagar",
        icon: "starbucks", // Placeholder
        iconBg: "#383E56",
        date: "June 2024 - July 2024",
        points: [
            "Contributed to fundraising, polio vaccination, school supplies distribution, tree plantation, and food distribution initiatives.",
            "Assisted in organizing and managing events including Rath Yatra water supply, impacting local community health, education, and welfare.",
        ],
    },
    {
        title: "Executive Committee Member",
        company_name: "Computer Society of India Club (Nirma University)",
        icon: "tesla", // Placeholder
        iconBg: "#E6DEDD",
        date: "2023 - Present",
        points: [
            "Organized events and developed contests for collegiates.",
            "Volunteered in CUBIX 2025 flagship event.",
            "Contributed in preparing algorithms and contests in Bid2Code.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Het is an exceptional developer who consistently delivers high-quality work.",
        name: "Project Mentor",
        designation: "Mentor",
        company: "GSSoC",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "His problem-solving skills and dedication to the community are truly inspiring.",
        name: "Club President",
        designation: "President",
        company: "CSI Club",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Emotion-Based Playlist",
        description:
            "NLP app using RoBERTa to detect 27 emotions from text and generate personalized playlists. Integrated with Spotify/YouTube metadata.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "nlp",
                color: "green-text-gradient",
            },
            {
                name: "streamlit",
                color: "pink-text-gradient",
            },
        ],
        image: "tripguide", // Placeholder
        source_code_link: "https://github.com/hkpatel321/Emotion-Based-Playlist-Generator",
    },
    {
        name: "Deepfake Detection",
        description:
            "End-to-end application with ResNet-18 CNN backend and React.js frontend for real-time deepfake detection.",
        tags: [
            {
                name: "pytorch",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "flask",
                color: "pink-text-gradient",
            },
        ],
        image: "jobit", // Placeholder
        source_code_link: "https://github.com/hkpatel321/ImageDeepFakeDetection",
    },
    {
        name: "Pathfinder Visualizer",
        description:
            "Interactive platform to visualize algorithms (Dijkstra's, BFS, DFS) with Mapbox API integration for real-world routes.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mapbox",
                color: "green-text-gradient",
            },
            {
                name: "algorithms",
                color: "pink-text-gradient",
            },
        ],
        image: "carrent", // Placeholder
        source_code_link: "https://github.com/hkpatel321/Algorithm-Visualizer",
    },
    {
        name: "LiveHive Meeting",
        description:
            "Online meeting platform with video, audio, screen sharing, and real-time chat using WebRTC and Socket.IO.",
        tags: [
            {
                name: "mern",
                color: "blue-text-gradient",
            },
            {
                name: "socket.io",
                color: "green-text-gradient",
            },
            {
                name: "webrtc",
                color: "pink-text-gradient",
            },
        ],
        image: "jobit", // Placeholder
        source_code_link: "https://github.com/hkpatel321/LiveHive",
    },
    {
        name: "E-commerce App",
        description:
            "Full-stack e-commerce app with Spring Boot and React, featuring CRUD operations, cart, and product management.",
        tags: [
            {
                name: "springboot",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "postgresql",
                color: "pink-text-gradient",
            },
        ],
        image: "carrent", // Placeholder
        source_code_link: "https://github.com/hkpatel321/EcommerceWebsite",
    },
    {
        name: "Customer Churn ML",
        description:
            "ML dashboard predicting customer churn with 85%+ accuracy using Random Forest and Streamlit visualizations.",
        tags: [
            {
                name: "machine-learning",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "streamlit",
                color: "pink-text-gradient",
            },
        ],
        image: "tripguide", // Placeholder
        source_code_link: "https://github.com/hkpatel321/CustomerChurnAnalysis",
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
        url: "https://codeforces.com/profile/iron_man321",
        icon: "codeforces",
    },
    {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/user/phet34jh8/",
        icon: "geeksforgeeks",
    },
    {
        name: "Email",
        url: "mailto:het.patel.tech@gmail.com",
        icon: "email",
    },
];

export { services, technologies, experiences, testimonials, projects };
