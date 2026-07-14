# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog.

---

## [Unreleased]



### Planned
- Paystack payment integration
- Admin dashboard
- Email notifications
- Student registration confirmation page

---
## [0.4.0] - 2026-07-14

### Added
- Supabase database integration
- Registration service layer
- End-to-end registration workflow
- PostgreSQL persistence for student registrations
- Success feedback after registration submission

### Changed
- Refactored registration submission to use a dedicated service (`registration.service.ts`)
- Centralized registration persistence logic outside the form component

### Fixed
- React Hook Form subject synchronization
- Registration validation before database submission
- Supabase Row Level Security (RLS) configuration
- Added SELECT policy required for `.insert().select().single()`
- Resolved unauthorized (401) registration requests
- Fixed database insertion workflow

---

## [0.3.0] - Form Validation Complete (2026-07-11)

### Added
- React Hook Form integration
- Zod schema validation
- Reusable Input component
- Reusable Select component
- Validation error messages
- Form submission handling

### Changed
- Refactored Input to use React.forwardRef
- Refactored Select for React Hook Form compatibility

### Fixed
- React Hook Form registration issue
- TypeScript prop typing
- Form validation synchronization

---

## [0.2.0] - Registration UI Complete (2026-07-10)

### Added
- Student information section
- Parent information section
- Subject selection cards
- Live registration summary
- Registration price calculator
- Dynamic subject selection

### Changed
- Centralized pricing into `lib/pricing.ts`
- Replaced magic strings with `SUBJECT_IDS`
- Moved calculations into `lib/calculatePrice.ts`
- Refactored SubjectSelection into a controlled component

### Fixed
- Science Bundle toggle
- Duplicate React keys
- Subject synchronization
- Production build issues

---

## [0.1.0] - Landing Page Complete (2026-07-08)

### Added
- Next.js 16 project
- Tailwind CSS
- Project documentation
- Landing page
- Navigation bar
- Hero section
- Programme Features section
- Pricing section
- Registration page
- Initial reusable folder structure

### Changed
- Hero layout improvements
- Responsive spacing and typography

### Fixed
- Initial TypeScript issues