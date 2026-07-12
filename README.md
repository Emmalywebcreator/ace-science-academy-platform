# 🎓 Ace Science Academy Platform

> Transforming science education through conceptual understanding, interdisciplinary learning, and real-world application.

The **Ace Science Academy Platform** is a modern educational platform designed to help Senior Secondary School students master Mathematics, Physics, and Chemistry by developing genuine understanding rather than memorizing formulas.

The **2026 Holiday Science Intensive Programme** is the first implementation of this broader vision.

---

# 📖 Table of Contents

* [About](#-about)
* [Vision](#-vision)
* [Educational Philosophy](#-educational-philosophy)
* [Project Goals](#-project-goals)
* [Current Features](#-current-features)
* [Technology Stack](#-technology-stack)
* [System Architecture](#-system-architecture)
* [Project Structure](#-project-structure)
* [Development Workflow](#-development-workflow)
* [Getting Started](#-getting-started)
* [Environment Variables](#-environment-variables)
* [Available Scripts](#-available-scripts)
* [Deployment Strategy](#-deployment-strategy)
* [Roadmap](#-roadmap)
* [Documentation](#-documentation)
* [Contributing](#-contributing)
* [License](#-license)
* [Project Status](#-project-status)

---

# 📚 About

Ace Science Academy Platform is being built as a complete digital learning ecosystem for Senior Secondary School science education.

Unlike traditional learning systems that encourage memorization for examinations, this platform focuses on helping students develop conceptual understanding, critical thinking, interdisciplinary reasoning, and real-world problem-solving skills.

The first release supports the **Holiday Science Intensive Programme 2026**, providing:

* Programme information
* Student registration
* Dynamic subject selection
* Live registration summary
* Form validation

Future releases will expand into a complete Learning Management System (LMS) featuring interactive lessons, Computer-Based Testing (CBT), virtual laboratories, learning analytics, and AI-assisted learning.

---

# 🌍 Vision

To build Africa's leading digital science education platform where students develop curiosity, conceptual understanding, creativity, and problem-solving skills through engaging, technology-driven learning experiences.

---

# 🧠 Educational Philosophy

Ace Science Academy Platform is founded on one simple belief:

> **Students should understand concepts before memorizing formulas.**

Every lesson, assessment, and software feature is designed to answer questions such as:

* Why does this concept work?
* Where does it appear in real life?
* How does it connect with other subjects?
* How can this knowledge solve real problems?

Our goal is not simply to help students pass WAEC, NECO, or JAMB, but to prepare them for higher education, innovation, and lifelong learning.

---

# 🎯 Project Goals

## Short-Term Goals (Current MVP)

* Professional landing page
* Online student registration
* Form validation
* Subject selection
* Live registration summary
* Supabase integration
* Paystack payment integration
* Student database
* Admin dashboard

## Long-Term Goals

* Student Portal
* Parent Portal
* Teacher Dashboard
* Computer-Based Testing (CBT)
* Interactive Lessons
* Assignment Management
* Performance Analytics
* Virtual Science Laboratory
* AI Learning Assistant
* Multi-programme Support

---

# ✨ Current Features

> 🚧 Active Development

## Sprint 1 — Landing Page

* ✅ Responsive Navigation
* ✅ Hero Section
* ✅ Programme Features
* ✅ Pricing Section

## Sprint 2 — Registration

* ✅ Student Information Form
* ✅ Parent Information Form
* ✅ Subject Selection Cards
* ✅ Live Registration Summary
* ✅ Dynamic Pricing

## Sprint 3 — Form Validation

* ✅ React Hook Form
* ✅ Zod Validation
* ✅ Reusable Input Component
* ✅ Reusable Select Component
* ✅ Controlled Subject Selection
* ✅ Production Build Passing

## Sprint 3.5 — Documentation

* ✅ Project Vision
* ✅ Project Overview
* ✅ System Architecture
* ✅ Development Workflow
* ✅ Roadmap
* ✅ CHANGELOG
* ✅ README

---

# 🛠 Technology Stack

| Layer                 | Technology                     |
| --------------------- | ------------------------------ |
| Frontend              | Next.js 16                     |
| Language              | TypeScript                     |
| Styling               | Tailwind CSS                   |
| Forms                 | React Hook Form                |
| Validation            | Zod                            |
| Icons                 | Lucide React                   |
| Database              | Supabase *(Planned)*           |
| Authentication        | Supabase Auth *(Planned)*      |
| Payments              | Paystack *(Planned)*           |
| Hosting               | Vercel *(Current Plan)*        |
| Enterprise Deployment | AWS S3 + CloudFront *(Future)* |
| Version Control       | Git & GitHub                   |

---

# 🏗 System Architecture

```text
                 Students / Parents
                        │
                        ▼
                 Next.js Frontend
                  (React + TypeScript)
                  │               │
                  ▼               ▼
            Supabase        Paystack
                  │
                  ▼
           PostgreSQL Database
```

This architecture is intentionally modular, allowing additional services to be integrated without major restructuring.

---

# 📂 Project Structure

```text
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
├── .env.example
└── package.json
```

---

# 🔄 Development Workflow

Every feature follows the same lifecycle.

```text
Planning
    ↓
Architecture Review
    ↓
Development
    ↓
Testing
    ↓
npm run build
    ↓
Documentation
    ↓
Git Commit
    ↓
GitHub Push
```

Every sprint must satisfy the project's Definition of Done before completion.

---

# 🚀 Getting Started

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

Run the development server.

```bash
npm run dev
```

Open your browser.

```text
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

PAYSTACK_PUBLIC_KEY=

PAYSTACK_SECRET_KEY=
```

> Never commit `.env.local` to version control.

---

# 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm start`     | Start production server  |
| `npm run lint`  | Run ESLint               |

---

# ☁ Deployment Strategy

## Current

```text
Developer
     │
     ▼
GitHub
     │
     ▼
Vercel
     │
     ▼
Students
```

## Future Enterprise Deployment

```text
GitHub
     │
     ▼
CI/CD Pipeline
     │
     ▼
AWS S3
     │
     ▼
CloudFront CDN
     │
     ▼
Students
```

---

# 🗺 Roadmap

## Phase 1 — Foundation

* Landing Page
* Registration
* Form Validation
* Supabase
* Paystack
* Admin Dashboard

## Phase 2 — Learning Platform

* Authentication
* Student Portal
* Parent Portal
* Teacher Dashboard
* Resource Library
* Weekly Assessments

## Phase 3 — Interactive Learning

* CBT Examination System
* Learning Analytics
* Virtual Science Laboratory
* Interactive Simulations
* Assignment System

## Phase 4 — Intelligent Learning

* AI Learning Assistant
* Adaptive Learning Paths
* Personalized Recommendations
* Advanced Analytics

---

# 📄 Documentation

Project documentation is located inside the `docs/` directory.

* `PROJECT_VISION.md`
* `01-project-overview.md`
* `02-system-architecture.md`
* `03-development-workflow.md`
* `04-roadmap.md`

Documentation evolves alongside the project and reflects current architectural and educational decisions.

---

# 🤝 Contributing

The project is currently under active development.

Contribution guidelines will be published before the first public release.

---

# 📜 License

This project is currently private.

All rights reserved © Ace Science Academy.

---

# 👨‍💻 Author

**Emmanuel Ohwoka**

Mathematics Educator • Software Developer

Building educational technology that helps students understand science instead of memorizing it.

---

# 🚀 Project Status

**Current Sprint:** **Sprint 3.5 — Documentation Complete**

## Next Sprint

**Sprint 4 — Supabase Integration**

The focus of the next sprint is to introduce backend infrastructure by integrating Supabase for persistent student registration, database storage, and future authentication support.

---

> **"Education should not merely prepare students to pass examinations; it should prepare them to understand the world, solve real problems, and continue learning throughout life."**
