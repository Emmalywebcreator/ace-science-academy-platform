# 🎓 Ace Science Academy Platform

> A modern, scalable online learning platform built to power Ace Science Academy's educational programmes, beginning with the **2026 Holiday Science Intensive Programme** and expanding into a full-featured digital learning ecosystem.

---

## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Vision](#-vision)
- [Project Goals](#-project-goals)
- [Current Features](#-current-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Development Workflow](#-development-workflow)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment Strategy](#-deployment-strategy)
- [Roadmap](#-roadmap)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

# 📚 Project Overview

Ace Science Academy Platform is a modern web application built to simplify the management and delivery of educational programmes offered by Ace Science Academy.

The first release powers the **2026 Holiday Science Intensive Programme**, providing:

- Student registration
- Online payments
- Programme information
- Admin dashboard
- Student management

The platform is designed with scalability in mind and will evolve into a complete online learning management system (LMS).

---

# 🌍 Vision

To build a world-class digital education platform that empowers African students with quality STEM education through accessible, engaging, and technology-driven learning experiences.

---

# 🎯 Project Goals

### Short-Term Goals (MVP)

- Professional landing page
- Online registration
- Secure payment integration
- Student database
- Admin dashboard
- Mobile responsive interface

### Long-Term Goals

- Student Portal
- Parent Portal
- Teacher Dashboard
- CBT Examination System
- Assignment Submission
- Performance Analytics
- Recorded Lessons
- AI Learning Assistant
- Multi-programme Support

---

# ✨ Current Features

> 🚧 This project is currently under active development.

### Sprint 0
- [x] Project initialization
- [x] Next.js setup
- [x] TypeScript configuration
- [x] Tailwind CSS
- [x] Initial project structure

### Upcoming
- Landing Page
- Registration Form
- Supabase Integration
- Paystack Integration
- Admin Dashboard

---

# 🛠 Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Forms | React Hook Form |
| Validation | Zod |
| Icons | Lucide React |
| Utility | clsx |
| Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth *(Planned)* |
| Payments | Paystack |
| Hosting | AWS S3 |
| CDN | AWS CloudFront |
| Version Control | Git & GitHub |

---

# 🏗 System Architecture

```
                    Users
                      │
                      ▼
              AWS CloudFront
                      │
                      ▼
              AWS S3 Hosting
                      │
                      ▼
                Next.js Frontend
                │            │
                ▼            ▼
         Supabase       Paystack
                │
                ▼
          PostgreSQL Database
```

---

# 📂 Project Structure

```
ace-science-academy-platform/

├── app/
├── components/
│   ├── forms/
│   ├── landing/
│   ├── layout/
│   └── ui/
│
├── constants/
├── docs/
├── hooks/
├── lib/
├── public/
│   ├── icons/
│   └── images/
│
├── services/
├── styles/
├── types/
├── utils/
│
├── README.md
├── CHANGELOG.md
├── LICENSE
└── .env.example
```

---

# 🔄 Development Workflow

Every feature follows the same lifecycle.

```
Planning
    ↓
Design
    ↓
Development
    ↓
Testing
    ↓
Documentation
    ↓
Git Commit
    ↓
Deployment
```

This ensures code quality, maintainability, and consistency.

---

# 🚀 Installation

Clone the repository.

```bash
git clone <repository-url>
```

Navigate into the project.

```bash
cd ace-science-academy-platform
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env.local` file in the project root.

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

PAYSTACK_PUBLIC_KEY=

PAYSTACK_SECRET_KEY=
```

> **Important:** Never commit `.env.local` to GitHub.

---

# 📜 Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm start` | Starts the production server |
| `npm run lint` | Runs ESLint |

---

# ☁ Deployment Strategy

The application will be deployed using AWS services.

```
Developer
     │
     ▼
GitHub
     │
     ▼
Build Process
     │
     ▼
AWS S3
     │
     ▼
CloudFront
     │
     ▼
Students
```

Future deployment automation will be handled through GitHub Actions.

---

# 🗺 Roadmap

## Phase 1 — MVP

- Landing Page
- Registration
- Payment Integration
- Admin Dashboard
- Student Database

## Phase 2

- Student Authentication
- Recorded Lessons
- Resource Downloads
- Weekly Assessments

## Phase 3

- CBT Examination System
- Parent Dashboard
- Teacher Dashboard
- Analytics
- AI Learning Assistant

---

# 📄 Documentation

Additional documentation can be found in the `docs/` directory.

- `01-project-overview.md`
- `02-system-architecture.md`
- `03-development-workflow.md`

More documentation will be added as development progresses.

---

# 🤝 Contributing

This project is currently maintained by the Ace Science Academy development team.

Contribution guidelines will be added in a future release.

---

# 📜 License

This project is currently private.

All rights reserved © Ace Science Academy.

---

# 👨‍💻 Author

**Ace Science Academy**

Building innovative educational technology for tomorrow's learners.

---

## ⭐ Project Status

🚧 Active Development

Current Sprint:

**Sprint 0.1 — Engineering Foundation**