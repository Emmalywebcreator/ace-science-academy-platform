# Ace Science Academy Platform

# System Architecture

## Purpose

This document describes the overall architecture of the Ace Science Academy Platform.

The goal is to ensure every new feature follows a consistent structure, remains maintainable, and supports long-term growth.

---

# Architecture Philosophy

The platform follows a layered architecture.

Each layer has a single responsibility.

The User Interface should never communicate directly with the database.

Business logic should never be mixed with presentation.

This separation keeps the codebase clean, testable, and scalable.

---

# High-Level Architecture

```text
                    Browser
                       │
                       ▼
              Next.js Application
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
 Landing Pages               Student Portal
 Registration                Admin Portal
 CBT System                  Parent Portal
        │
        ▼
 React Components
        │
        ▼
 React Hook Form + Zod
        │
        ▼
 Business Services
        │
        ▼
 Supabase
        │
        ▼
 PostgreSQL Database
```

---

# Folder Structure

```text
app/
components/
lib/
services/
types/
hooks/
constants/
docs/
public/
```

Each folder has a clearly defined responsibility.

---

# Component Layer

The component layer contains reusable UI elements.

Examples include:

* Buttons
* Inputs
* Cards
* Navigation
* Forms

Components should contain little or no business logic.

---

# Validation Layer

All user input is validated before submission.

Validation uses:

* React Hook Form
* Zod

Validation rules are centralized in:

```text
lib/validation.ts
```

---

# Business Logic Layer

Business rules live inside the `services` directory.

Examples:

* Student Registration
* Payment Processing
* Email Notifications
* Report Generation

Components should call services rather than interacting directly with external systems.

---

# Database Layer

Supabase is the initial backend service.

Responsibilities include:

* Student records
* Payments
* Authentication
* File storage
* Security policies

The architecture should remain flexible enough to migrate to a dedicated backend if required.

---

# Future Modules

The architecture is intentionally modular.

Planned modules include:

* Student Dashboard
* Parent Dashboard
* Teacher Dashboard
* CBT Examination Engine
* Virtual Science Laboratory
* AI Learning Assistant
* Learning Analytics
* Progress Tracking
* Assignment Management

Each module should integrate without requiring major architectural changes.

---

# Design Principles

Every feature added to the platform should follow these principles:

* Single Responsibility
* Reusability
* Type Safety
* Scalability
* Separation of Concerns
* Performance
* Accessibility
* Maintainability

---

# Current Architecture Status

Current implementation:

* Landing Page
* Registration Page
* React Hook Form
* Zod Validation
* Shared Registration State

Next implementation:

* Supabase Integration
* Registration Service
* Payment Processing
