# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog.

---

## [Unreleased]

### Planned
- Live registration summary(Done)
- Form validation with React Hook Form + Zod
- Supabase integration
- Paystack payment integration
- Admin dashboard
- Email notifications

---

## [0.1.0] - 2026-07-08

### Added
- Initial Next.js 16 project setup
- Tailwind CSS configuration
- Project documentation
- Landing page
- Responsive navigation bar
- Hero section
- Programme Features section
- Pricing section
- Registration page
- Student information form
- Parent information form
- Subject selection cards
- Reusable project folder structure
- Live registration summary
- Dynamic subject selection
- Registration price calculator
- Shared React state between form components

### Changed
- Refactored Hero section layout
- Centralized pricing configuration into `lib/pricing.ts`
- Replaced magic strings with `SUBJECT_IDS`
- Improved responsive spacing and typography
- Moved pricing calculations into `lib/calculatePrice.ts`
- Refactored `SubjectSelection` into a controlled component

### Fixed
- Duplicate React key warnings
- TypeScript type issues
- Production build errors
- Subject selection toggle logic
- Science Bundle selection behavior
- Duplicate React key warnings
- Subject selection state synchronization
- Production build issues