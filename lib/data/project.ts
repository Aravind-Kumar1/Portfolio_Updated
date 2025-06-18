interface Contributor {
    name: string;
    avatar: string;
    role?: string;
}

interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    images?: string[];
    fullDescription?: string;
    technologies: string[];
    duration: string;
    projectType: string;
    liveUrl?: string;
    githubUrl?: string;
    contributors: Contributor[];
    features: string[];
    date: string;
    category: string;
    team: string;
    status: string;
    role: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "viral-bug",
        title: "Viral Bug",
        subtitle: "Internship Project",
        description: "Developed a dynamic and SEO-optimized website for Viral Bug, a digital marketing company providing web design, development, and online marketing services.",
        image: "/viral_mock.png", // Keep this as fallback
        images: [
            "/viral_mock.png",    // Hero section image (index 0)
            "/vb1.png",    // Introduction section image (index 1)
            "/vb2.png",    // Purpose section image (index 2)
            "/vb3.png",    // Why This Project section image (index 3)
            "/vb4.png"     // Impact & Results section image (index 4)
        ],
        fullDescription: "Designed and developed the official company website for Viral Bug, a digital marketing agency offering services like web design, development, and digital marketing solutions. Built using Next.js to ensure excellent SEO performance and fast loading speeds, combined with Tailwind CSS for a fully responsive, modern, and clean user interface. Deployed the site on Hostinger with optimized hosting configuration, achieving a Lighthouse performance score of 95+ across all core metrics. The website effectively showcases the company's services, portfolio, and digital presence with a professional and user-friendly experience.",
        technologies: ["Next.js", "Tailwind CSS", "Hostinger"],
        duration: "N/A",
        projectType: "Internship Project",
        liveUrl: "https://viralbugdigitalmarketing.com/",
        githubUrl: "https://github.com/Viral2024-DigitalMarketing/viralDesignCoded",
        contributors: [
            {
                name: "Aravind Chamaakuri",
                avatar: "/hero.png",
                role: "Web Developer"
            },
            {
                name: "Sai Charan",
                avatar: "/nadim.jpg",
                role: "UI/UX Designer"
            }
        ],
        features: [
            "Fully responsive modern design",
            "SEO-optimized Next.js pages",
            "Deployed on Hostinger",
            "95+ Lighthouse performance score"
        ],
        date: "Apr 26",
        category: "Web Application",
        team: "Viral Bug Team",
        status: "Completed",
        role: "Web Developer"
    },
    {
        id: 2,
        slug: "aditude-creative-solutions",
        title: "Aditude Creative Solutions",
        description: "Helping IT companies hire faster, smarter, and with confidence through a dynamic website with sections for services, talent discovery, and contact information.",
        image: "/adit.png",// Keep this as fallback
        images: [
            "/adit.png",    // Hero section image (index 0)
            "/adit.png",    // Introduction section image (index 1)
            "/ad2.png",    // Purpose section image (index 2)
            "/ad3.png",    // Why This Project section image (index 3)
            "/ad4.png"     // Impact & Results section image (index 4)
        ],
        fullDescription: "Developed a dynamic website facilitating smarter hiring processes for IT companies. Designed intuitive sections for home, about, services, contact, and talent discovery, ensuring seamless navigation and user engagement. Features include job listing integration, candidate profiles, client testimonials, and responsive design for optimal viewing on all devices.",
        technologies: ["React.js", "Tailwind CSS"],
        duration: "Jan 2025 – Mar 2025",
        projectType: "Client Project",
        liveUrl: "https://aditudesol.com/",
        githubUrl: "https://github.com/Viral2024-DigitalMarketing/aditudesol-1",
        contributors: [
            {
                name: "Aravind Kumar",
                avatar: "/hero.png",
                role: "Frontend Developer"
            },

        ],
        features: [
            "Job listing integration",
            "Candidate profiles",
            "Client testimonials",
            "Responsive design"
        ],
        date: "Mar 2025",
        category: "Web Application",
        team: "Aditude Team",
        status: "Completed",
        role: "Frontend Developer",

    },
    {
        id: 3,
        slug: "grass-root",
        title: "Grass Root",
        subtitle: "Microfinance Platform",
        description: "Developed a website for Grass Root, a microfinance company that provides small loans to villages and promotes women empowerment. The site features loan management, user authentication, and integration with backend systems to collect and manage user data.",
        image: "/gras.png", // Keep this as fallback
        images: [
            "/gras.png",   // Hero section image (index 0)
            "/gras.png",    // Introduction section image (index 1)
            "/gs1.png",    // Purpose section image (index 2)
            "/gs2.png",    // Why This Project section image (index 3)
            "/gs3.png"     // Impact & Results section image (index 4)
        ],
        fullDescription: "Developed a comprehensive website for Grass Root, a microfinance company dedicated to providing small loans to villages and empowering women. The website allows users to apply for loans, track their application status, schedule payments, and authenticate securely. Integrated backend services with a spreadsheet to collect user data, and used EmailJS for sending and receiving client information. The project utilized React.js, Tailwind CSS, and various APIs for smooth data management and user interaction.",
        technologies: ["React.js", "Tailwind CSS", "EmailJS", "API Integration"],
        duration: "Mar 2024 – May 2024",
        projectType: "Client Project",
        liveUrl: "https://grassrootfinance.com/",
        githubUrl: "https://github.com/Viral2024-DigitalMarketing/GrassRoot-1",
        contributors: [
            {
                name: "Aravind Kumar",
                avatar: "/hero.png",
                role: "Frontend Developer"
            },

        ],
        features: [
            "Loan application tracking",
            "User dashboard",
            "Payment scheduling",
            "Backend integration with spreadsheet",
            "Email communication with clients"
        ],
        date: "May 2024",
        category: "Web Application",
        team: "Grass Root Devs",
        status: "Completed",
        role: "Frontend Developer",

    },

    {
        id: 4,
        slug: "elim",
        title: "ELIM",
        subtitle: "Emmanuel Living Impact Mission",
        description: "A transformative digital sanctuary that bridges faith and technology, serving the community with seamless access to sermons, events, and announcements.",
        image: "/church.png", // Fallback image
        images: [
            "/church.png", // Hero
            "/ch1.png", // Introduction
            "/ch2.png", // Purpose
            "/ch3.png", // Why This Project
            "/ch4.png", // Impact & Results
        ],
        fullDescription:
            "Built a fully responsive church platform with React.js and CSS Modules, allowing seamless access to sermons, events, and announcements across all devices. Integrated a dynamic contact form via EmailJS, reducing manual follow-ups by 50% and maintaining 99% uptime with lightweight deployment. Features include real-time sermon streaming, event management system, automated email notifications, and mobile-first responsive design that adapts to all screen sizes.",
        technologies: ["React", "CSS Modules", "EmailJS"],
        duration: "Sept 2024 – Nov 2024",
        projectType: "Community Contribution Project",
        liveUrl: "https://elimimpact.com/",
        githubUrl: "https://github.com/Aravind-Kumar1/Church-Community",
        contributors: [
            {
                name: "Aravind Kumar",
                avatar:
                    "/hero.png",
                role: "Lead Developer",
            },

        ],
        features: [
            "Responsive design using CSS Modules",
            "Contact form integration with EmailJS",
            "Sermon listing and announcements page",
            "Basic routing and clean navigation",
        ],

        date: "Nov 2024",
        category: "Web Application",
        team: "FaithTech Crew",
        status: "Completed",
        role: "Frontend Developer",
    },
    {
        id: 5,
        slug: "team-events",
        title: "The Team Events",
        description:
            "A complete event management website tailored for local businesses, enabling smooth listing, booking, and resource coordination for all kinds of events.",
        image: "/team.png", // Fallback image
        images: [
            "/team.png",    // Hero section
            "/ev1.png",    // Introduction
            "/ev2.png",   // Purpose
            "/ev3.png",    // Why This Project
            "/ev4.png",     // Impact & Results
        ],
        fullDescription:
            "Designed and developed a responsive event management platform using React and ShadCN for a local event business. The website allows users to view upcoming events, make bookings, and request specific services like catering, sound, or staff. I implemented user-friendly navigation, fast-loading UI, secure authentication using Clerk, and category-based filtering for event services. The goal was to make event planning easier and more organized for both organizers and clients.",
        technologies: ["React", "ShadCN", "CSS", "Clerk"],
        duration: "June 2024 – Aug 2024",
        projectType: "Freelance Business Project",
        liveUrl: "https://github.com/Aravind-Kumar1/The_Team_Events_Website",
        githubUrl: "https://github.com/Aravind-Kumar1/The_Team_Events_Website",
        contributors: [], // You were the only one
        features: [
            "Event listing with category-based filtering",
            "Service booking (e.g., catering, staff)",
            "Secure login using Clerk",
            "User-friendly interface with responsive design",
            "Dynamic event details page"
        ],
        date: "Aug 2024",
        category: "Event Management",
        team: "Solo Project",
        status: "Completed",
        role: "Frontend Developer"
    },
    {
        id: 6,
        slug: "smart-read",
        title: "Smart Read",
        description: "A comprehensive reading ecosystem with audiobook integration, creating an immersive reading experience.",
        image: "/smart.png", // Keep this as fallback
        images: [
            "/smart.png",   // Hero section image (index 0)
            "/sm1.png",    // Introduction section image (index 1)
            "/sm2.png",    // Purpose section image (index 2)
            "/sm3.png",    // Why This Project section image (index 3)
            "/sm4.png"     // Impact & Results section image (index 4)
        ],
        fullDescription: "Developed a comprehensive reading platform using React.js and Firebase Firestore, enabling users to read books, take notes, and maintain a personalized library with seamless synchronization. Integrated Spotify Embedded API for audiobook functionality and implemented user authentication, wishlist management, and note-taking features. Features include cloud synchronization, collaborative reading groups, progress tracking, intelligent bookmarking, and cross-platform accessibility.",
        technologies: ["React.js", "Firebase", "Firestore", "Spotify API"],
        duration: "Nov 2023 – Jan 2024",
        projectType: "Personal Project",
        liveUrl: "https://github.com/Aravind-Kumar1/Smart_Read_Platform",  // This URL can be updated when the site is deployed
        githubUrl: "https://github.com/Aravind-Kumar1/Smart_Read_Platform",
        contributors: [
            {
                name: "Aravind Kumar",
                avatar: "/hero.png",
                role: "Solo Developer"
            }
        ],
        features: [

            "Collaborative reading groups",
            "Progress tracking",
            "Intelligent bookmarking",
            "Cross-platform accessibility"
        ],
        date: "Jan 2024",
        category: "Reading Platform",
        team: "Solo Project",
        status: "Development Completed",  // Updated status to reflect that development is completed but not deployed
        role: "Lead Developer",

    },

    {
        id: 7,
        slug: "campusbuzz",
        title: "CampusBuzz",
        description: "A cross-platform mobile and web application connecting students with campus events through smart discovery and intuitive dashboards.",
        image: "/cam.png",
        images: [
            "/cam.png",
            "/cam.png",
            "/cam.png",
            "/cam.png",
            "/cam.png"
        ],
        fullDescription:
            "CampusBuzz is a centralized event management app for college campuses, built using Flutter and Firebase. As the frontend developer, I worked on the mobile UI and developed the web dashboard for event admins using Flutter Web. The app includes geolocation-based recommendations, push notifications, offline support, and real-time event updates. The project was a collaborative academic effort by an 8-member team focused on simplifying event engagement for students and organizers.",
        technologies: ["Flutter", "Firebase", "Dart", "Flutter Web", "Figma"],
        duration: "May 2023 – July 2023",
        projectType: "Academic Project",
        liveUrl: "https://github.com/Aravind-Kumar1/Campus-Buzz-Mobile-App",
        githubUrl: "https://github.com/Aravind-Kumar1/Flutter-Admin-Portal-Web",
        contributors: [
            {
                name: "Aravind Kumar",
                avatar: "/hero.png",
                role: "Mobile UI Developer & Web Portal Developer"
            },
            {
                name: "Dhruv",
                avatar: "/dhruv.jpg",
                role: "Backend Developer"
            },
            {
                name: "Anas",
                avatar: "/anas.jpg",
                role: "Backend Developer"
            },
            {
                name: "Jayanth ",
                avatar: "/jay.jpg",
                role: "Frontend Developer"
            },
            {
                name: "Bobburi Umesh",
                avatar: "/umesh.jpg",
                role: "Frontend Developer"
            }
        ],
        features: [
            "Geolocation-based event discovery",
            "Push notifications",
            "Event calendar sync",
            "User preferences and personalized feeds",
            "Admin dashboard with real-time event control"
        ],
        date: "July 2023",
        category: "Mobile & Web Application",
        team: "CampusBuzz Crew",
        status: "Completed",
        role: "Frontend Developer (Mobile & Web)"
    },

    //
    // {
    //     id: 8,
    //     slug: "life-hospital-website",
    //     title: "Life Hospital Website",
    //     description: "Developed a fully responsive and professional website for Life Hospital, streamlining access to medical services, appointments, and essential health information.",
    //     image: "/viral_mock.png", // Fallback image
    //     images: [
    //         "/viral_mock_1.png",    // Hero section
    //         "/viral_mock_2.png",    // Introduction
    //         "/viral_mock_3.png",    // Purpose
    //         "/viral_mock_4.png",    // Why This Project
    //         "/viral_mock_5.png"     // Impact & Results
    //     ],
    //     fullDescription:
    //         "As part of my internship, I developed the official website for Life Hospital to enhance their digital presence and improve patient experience. The website includes sections for medical departments, doctor profiles, services overview, appointment booking, and emergency contact information. I handled the entire frontend development using Next.js, Tailwind CSS, and Framer Motion, ensuring smooth animations, mobile responsiveness, and performance optimization. The project improved patient engagement and helped the hospital manage appointments digitally.",
    //     technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    //     duration: "Feb 2025 – Apr 2025",
    //     projectType: "Internship Project",
    //     liveUrl: "https://github.com/Viral2024-DigitalMarketing/life_final",
    //     githubUrl: "https://github.com/Viral2024-DigitalMarketing/life_final",
    //     contributors: [], // You were the only one
    //     features: [
    //         "Appointment booking system",
    //         "Doctor profiles and department pages",
    //         "Emergency contact section",
    //         "Responsive design with animations"
    //     ],
    //     date: "Apr 2025",
    //     category: "Healthcare Website",
    //     team: "Solo Internship Project",
    //     status: "Completed",
    //     role: "Frontend Developer"
    // }
]