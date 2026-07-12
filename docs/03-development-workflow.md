Absolutely. Here's the document in a reusable writing block.

# Ace Science Academy Platform

# Development Workflow

## Purpose

This document defines the standard development workflow for the Ace Science Academy Platform.

Its purpose is to ensure every feature is built consistently, remains maintainable, and aligns with the long-term vision of the platform.

This workflow should be followed regardless of the size of the feature.

---

# Development Philosophy

We are not simply writing code.

We are engineering an educational platform that may continue to grow for many years.

Every feature should therefore be:

* Purpose-driven
* Well planned
* Properly documented
* Fully tested
* Easy to maintain

Speed is important, but quality is non-negotiable.

---

# Standard Feature Workflow

Every new feature follows this order:

1. Define the feature goal.
2. Define acceptance criteria.
3. Identify files likely to change.
4. Review architecture impact.
5. Implement the feature incrementally.
6. Test continuously during development.
7. Run `npm run build`.
8. Fix all TypeScript and build errors.
9. Commit using a meaningful commit message.
10. Update `CHANGELOG.md`.
11. Push to GitHub.
12. Update documentation if necessary.

No feature is considered complete until all twelve steps have been completed.

---

# Coding Standards

## TypeScript

* Avoid `any`.
* Prefer explicit types.
* Use shared types whenever possible.
* Keep types close to the domain they describe.

---

## Components

Components should have a single responsibility.

Whenever possible:

* Keep components small.
* Make components reusable.
* Separate UI from business logic.

---

## Styling

Use Tailwind CSS.

Avoid inline styles unless absolutely necessary.

Maintain consistent spacing, typography, and colour usage throughout the application.

---

## State Management

Keep state as close as possible to where it is used.

Lift state only when multiple components need access to the same data.

Avoid unnecessary global state.

---

## Validation

All user input must be validated.

Validation rules belong in:

```text
lib/validation.ts
```

Business rules should never be duplicated inside components.

---

## File Organisation

Before creating a new file, ask:

* Does this responsibility already exist?
* Can an existing component be reused?
* Does this belong in `lib`, `services`, or `components`?

Keep the project structure clean and predictable.

---

# Build Checklist

Before every commit:

* No TypeScript errors.
* No ESLint warnings (when enabled).
* `npm run build` passes successfully.
* UI renders correctly.
* No React warnings in the browser console.
* No unused imports.
* No commented-out debugging code.

---

# Git Workflow

Each commit should represent one logical unit of work.

Examples:

* `feat: add registration summary`
* `feat: integrate React Hook Form validation`
* `fix: resolve subject selection state bug`
* `refactor: simplify pricing configuration`

Avoid mixing unrelated changes into a single commit.

---

# Documentation Workflow

Documentation grows alongside the codebase.

Whenever architecture, workflow, or project goals change:

* Update the relevant document in `/docs`.
* Update `CHANGELOG.md` where appropriate.

Documentation should always reflect the current state of the project.

---

# Continuous Improvement

At the end of every sprint, review:

* What worked well?
* What can be improved?
* What should become a new project standard?

The workflow itself is a living document and should evolve as the platform grows.

---

# Guiding Principle

> Build slowly enough to build it right, and build it right enough that it lasts.

Every decision made today should support the long-term vision of Ace Science Academy as a world-class educational platform.
