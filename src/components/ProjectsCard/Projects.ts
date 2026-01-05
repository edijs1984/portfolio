type Project = {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
};

type PortfolioData = {
  // ... other data ...
  projects: Project[];
};

export const projectsData: PortfolioData = {
  // ... other default data ...
  projects: [
    {
      name: "Multi-Chain Crypto Wallet",
      description:
        "A next-generation multi-chain cryptocurrency wallet with team collaboration features. Supports Ethereum, BSC, Polygon, Avalanche, and Bitcoin. Features include individual wallet management, offline signer mode, and enterprise team multisig capabilities with push notifications. Built with hardware-encrypted storage and biometric authentication.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "NestJS",
        "MongoDB",
        "Viem",
        "BitcoinJS",
        "Safe (Gnosis Safe)",
        "Push Notifications",
      ],
    },
    {
      name: "Portfolio Website",
      description:
        "A modern portfolio built with React, TypeScript, and Vite showcasing my work and skills. Features a clean UI with smooth transitions and responsive design.",
      technologies: ["React", "TypeScript", "SCSS", "Vite"],
    },

    {
      name: "DAPP - Decentralized Application",
      description:
        "A responsive, single-page DApp built with modern web technologies, designed to interact with the Solana blockchain. Users can connect their wallets, claim $ICED tokens, and track engagement stats. The UI features meme-inspired visuals, real-time feedback, and integration with wallet providers like Phantom. Includes dynamic sections for token claims, leaderboards, bounties, and narrative missions.",
      technologies: ["React", "Vite", "TypeScript", "Web3.js"],
      url: "https://dapp.iced.meme/",
    },
    {
      name: "Social App",
      description:
        "A social matching app that connects users across three distinct profiles: dating, friendship, and business networking. The platform combines psychology-based personality tests, astrology insights, and a proprietary matching algorithm to calculate compatibility scores. Users receive personalized match suggestions designed to foster meaningful, long-term connections. The app offers a unique multi-profile experience, letting users switch between social, romantic, and professional modes. With an intuitive UI and secure onboarding (including KYC, phone, and email verification), the platform aims to build trust and relevance in every match.",
      technologies: [
        "NestJS",
        "TypeScript",
        "BullMQ",
        "Stripe",
        "Apple Pay",
        "S3 Bucket",
        "Kafka",
        "Redis",
        "MongoDB",
        "Jest",
        "Docker",
        "Docker Swarm",
        "Docker Hub",
        "CI/CD",
        "Microservices",
        "Nginx",
        "Prometheus",
        "Grafana",
        "Electron",
        "React",
        "Vite",
      ],
      url: "https://www.matchful.me/",
    },
    {
      name: "Crypto Custody Platform",
      description:
        "An enterprise-grade crypto custody platform with support for hot and cold wallets, Solana multisig (Squads SDK), Bitcoin multisig (P2WSH), and Ethereum multisig. Features include on-chain staking, transaction management with multiple approvers, and integrated exchange functionality. Built with microservices architecture and message queuing for reliability.",
      technologies: [
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "Redis",
        "Docker",
        "TypeScript",
        "BullMQ",
        "Kafka",
        "RabbitMQ",
        "Microservices",
        "Solana",
        "Squads SDK",
        "Web3",
      ],
    },
    {
      name: "Game for Museum",
      description:
        "A React Native game for museums where users find incorrect objects in paintings to win prizes.",
      technologies: ["React Native", "JavaScript", "Expo"],
    },
    {
      name: "Safety and 5S Reporting System",
      description:
        "A mobile and web system for safety checks and 5S audits, allowing users to report issues and track improvements.",
      technologies: [
        "Express",
        "MongoDB",
        "Redis",
        "React",
        "React Native",
        "Expo",
        "JavaScript",
      ],
    },
    {
      name: "Manufacturing Time Tracking & Salary System",
      description:
        "A full-stack system for tracking manufacturing time, reporting productivity, and calculating salaries based on work hours.",
      technologies: ["Node.js", "React", "JavaScript", "MongoDB", "MS Excel"],
    },
    {
      name: "IoT Painting Equipment Monitoring System",
      description:
        "An IoT-based monitoring system for painting equipment. Tracks usage, temperature, and part counts using sensors to improve efficiency.",
      technologies: ["React", "Express", "MongoDB", "Raspberry Pi"],
    },
  ],
};
