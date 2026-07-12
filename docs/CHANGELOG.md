# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog.

---

## [Unreleased]

### Planned
- Supabase integration
- Paystack payment integration
- Admin dashboard
- Email notifications
- Student registration confirmation page

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