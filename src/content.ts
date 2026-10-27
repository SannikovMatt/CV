export const LANGS = ['en'] as const
export type Lang = (typeof LANGS)[number]
export type YM = [number, number]
export const profile = {
  "email": "sannikov.matt@gmail.com",
  "phone": "+420 608 767 548",
  "site": "https://sannikovmatt.github.io/CV/",
  "github": "https://github.com/sannikovmatt",
  "linkedin": "https://www.linkedin.com/in/dmitriy-sannikov/"
}
export type JobId = 'neovate' | 'firstline' | 'junior' | 'zitemedia'
export const jobs: {id: JobId; org: string; url?: string; from: YM; to?: YM; prague?: boolean}[] = [
  {
    "id": "neovate",
    "org": "Neovate s.r.o.",
    "url": "https://neovate.dev",
    "from": [
      2025,
      5
    ],
    "prague": true
  },
  {
    "id": "firstline",
    "org": "First Line Software",
    "from": [
      2023,
      1
    ],
    "to": [
      2025,
      5
    ],
    "prague": true
  },
  {
    "id": "junior",
    "org": "First Line Software",
    "from": [
      2022,
      1
    ],
    "to": [
      2022,
      12
    ],
    "prague": true
  },
  {
    "id": "zitemedia",
    "org": "Zitemedia",
    "from": [
      2020,
      11
    ],
    "to": [
      2020,
      12
    ],
    "prague": true
  }
]
export type ProjectId = 'thyme' | 'findex' | 'bckit'
export type Badge = 'live' | 'studio'
export const projects: {id: ProjectId; name: string; url: string; badge: Badge; tags: string[]}[] = [
  {
    "id": "thyme",
    "name": "thyme/labs",
    "url": "https://thymelabs.io",
    "badge": "studio",
    "tags": [
      "Safe",
      "Zodiac Roles",
      "ERC-4337",
      "The Graph"
    ]
  },
  {
    "id": "findex",
    "name": "Findex",
    "url": "https://findex.io",
    "badge": "studio",
    "tags": [
      "Uniswap v4",
      "DeFi",
      "Swap routing",
      "TypeScript"
    ]
  },
  {
    "id": "bckit",
    "name": "BCkit",
    "url": "https://bckit.cc",
    "badge": "live",
    "tags": [
      "EVM",
      "Calldata",
      "Tenderly",
      "Permit2"
    ]
  }
]
export const stack = {
  "web3": [
    "Solidity",
    "EVM",
    "Uniswap v2/v3/v4",
    "Safe",
    "Zodiac Roles",
    "ERC-4337",
    "viem",
    "wagmi"
  ],
  "frontend": [
    "TypeScript",
    "React",
    "Next.js",
    "TanStack",
    "Zustand",
    "Redux"
  ],
  "backend": [
    "Node.js",
    "Bun",
    "Convex",
    "TypeScript SDKs",
    "CLI tools"
  ],
  "data": [
    "PostgreSQL",
    "The Graph",
    "Subgraphs",
    "On-chain indexing"
  ],
  "cloud": [
    "Self-hosted nodes",
    "RPC infrastructure",
    "AWS S3",
    "Railway",
    "Microsoft Azure"
  ],
  "ai": [
    "Claude Code",
    "Codex",
    "LLM tools",
    "AI-assisted development"
  ]
}
export type StackId = keyof typeof stack
export const spoken = [['ru','native'],['en','fluent'],['cs','conversational'],['az','fluent']] as const
const en = {
  "langName": "English",
  "name": "Dmitriy Sannikov",
  "role": "Senior Software Engineer · Web3",
  "prague": "Prague, Czechia · Remote",
  "meta": {
    "title": "Dmitriy Sannikov — Senior Software Engineer",
    "description": "Senior software engineer in Prague. DeFi infrastructure, smart accounts and developer tools. Building Thyme Labs, Findex and BCkit."
  },
  "nav": {
    "about": "About",
    "experience": "Experience",
    "projects": "Projects",
    "stack": "Stack",
    "contact": "Contact",
    "print": "Print CV",
    "language": "Language"
  },
  "hero": {
    "status": "Open to senior engineering roles",
    "tagline": "I build the software behind on-chain products: smart-account automation, DeFi integrations and tools developers use every day.",
    "contact": "Get in touch",
    "print": "Print CV"
  },
  "stats": [
    [
      "2020",
      "started in software"
    ],
    [
      "3.5",
      "years at First Line Software"
    ],
    [
      "2–5",
      "engineers led on client projects"
    ],
    [
      "4",
      "languages spoken"
    ]
  ],
  "about": {
    "label": "About",
    "title": "From business requirements to on-chain execution.",
    "body": [
      "I'm Dmitriy, a software engineer based in Prague. I started in frontend development, grew into a senior role at First Line Software, and led teams delivering applications for accounting, manufacturing and insurance clients.",
      "Now I'm a founding team member and Lead Engineer at Neovate, working on DeFi infrastructure and developer tools. I work across TypeScript services, smart-account integrations and React interfaces, with Claude Code and Codex as part of my daily development workflow."
    ],
    "services": {
      "contracts": [
        "DeFi & smart accounts",
        "Uniswap v2/v3/v4, liquidity integrations, swap routing and scoped execution with Safe and Zodiac Roles."
      ],
      "dapps": [
        "Wallets & developer tools",
        "Transaction simulation, calldata decoding, Safe bundles and ERC-20 / Permit2 approval management."
      ],
      "indexing": [
        "On-chain data & infrastructure",
        "Self-hosted nodes, RPC services and subgraph indexing with The Graph."
      ],
      "backend": [
        "Automation & backend",
        "TypeScript, Node.js and Bun services for scheduled execution, transaction batching, bundling and gas sponsorship."
      ],
      "frontend": [
        "Product interfaces",
        "React, Next.js and TanStack applications, from developer consoles to portfolio and trading dashboards."
      ],
      "ai": [
        "AI-assisted development",
        "Daily work with Claude Code, Codex and LLM tools to write and iterate on code across projects."
      ]
    }
  },
  "experience": {
    "label": "Experience",
    "title": "Where I’ve worked",
    "present": "Present",
    "jobs": {
      "neovate": {
        "role": "Lead Engineer · Founding team member",
        "summary": "Building DeFi infrastructure and developer tools at Neovate. Work across smart accounts, execution services and product interfaces.",
        "points": [
          "Thyme Labs: on-chain automation, Safe and Zodiac Roles permissions, ERC-4337 bundling and gas sponsorship.",
          "DeFi integrations and swap routing with Uniswap v2/v3/v4, alongside work on Findex.",
          "BCkit: calldata decoding, transaction simulation and token-approval tools."
        ]
      },
      "firstline": {
        "role": "Senior Developer",
        "summary": "Promoted after my first year. Led project delivery and worked with business stakeholders to turn requirements into technical plans.",
        "points": [
          "Led teams of 2 to 5 engineers, scoped and estimated work, and ran technical hiring interviews.",
          "Across my time at First Line: invoice processing and approval workflows, factory IoT dashboards and insurance applications."
        ]
      },
      "junior": {
        "role": "Junior Developer",
        "summary": "Joined First Line Software to build JavaScript applications for clients. Promoted to Senior Developer after one year.",
        "points": []
      },
      "zitemedia": {
        "role": "Frontend Developer",
        "summary": "Client web applications built with React, Redux and TypeScript.",
        "points": []
      }
    }
  },
  "projects": {
    "label": "Projects",
    "title": "Projects I work on",
    "visit": "Open",
    "code": "Source",
    "badges": {
      "live": "Live",
      "studio": "Neovate",
      "oss": "Open source",
      "winner": "Winner"
    },
    "items": {
      "thyme": "Automation and infrastructure for teams building on EVM chains. My work includes Safe smart accounts, Zodiac Roles permissions, scheduled execution, transaction bundling and gas sponsorship, plus RPC and subgraph services.",
      "findex": "A DeFi index-token platform built around Uniswap v4 liquidity positions. Shared work at Neovate across protocol integrations, swap routing and the applications around the protocol.",
      "bckit": "A free toolkit for understanding transactions before sending them. Decode calldata and Safe bundles, simulate dApp transactions with WalletConnect and Tenderly, and review or revoke ERC-20 and Permit2 approvals."
    }
  },
  "stack": {
    "label": "Stack",
    "title": "Tools I reach for",
    "groups": {
      "web3": "Web3",
      "frontend": "Frontend",
      "backend": "Backend",
      "data": "Data",
      "cloud": "Cloud & DevOps",
      "ai": "AI & automation"
    }
  },
  "background": {
    "label": "Background",
    "title": "Beyond the code"
  },
  "languages": {
    "title": "Languages",
    "native": "Native",
    "fluent": "Fluent",
    "conversational": "Conversational",
    "names": {
      "ru": "Russian",
      "cs": "Czech",
      "en": "English",
      "az": "Azerbaijani"
    }
  },
  "contact": {
    "label": "Contact",
    "title": "Building something on-chain?",
    "title2": "Let's talk.",
    "body": "I'm open to senior engineering roles where I can build useful products, work closely with the team and take responsibility for delivery.",
    "copy": "Copy",
    "copied": "Copied"
  },
  "footer": "Built with Vite, TypeScript and Tailwind. Hosted on GitHub Pages.",
  "print": {
    "profile": "Profile",
    "experience": "Experience",
    "projects": "Selected projects",
    "skills": "Skills",
    "live": "Live version",
    "file": "Dmitriy Sannikov — CV"
  },
  "months": [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  "certification": {
    "title": "Certification",
    "name": "Microsoft Certified",
    "detail": "Azure Administrator Associate (AZ-104)"
  },
  "availability": {
    "title": "How I work",
    "name": "Prague · Remote / hybrid",
    "detail": "Senior software engineering, Web3 infrastructure and developer tooling."
  }
}
export type Dict = typeof en
export const dicts: Record<Lang, Dict> = { en }
