# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` (uses Turbopack for faster builds)
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- **Lint with auto-fix**: `pnpm lint-autofix`
- **Type checking**: `pnpm type-check`
- **Format code**: `pnpm format`

## Architecture Overview

This is a Next.js 15 application for the ICF Japan Coaching Converge 2025 conference website, built with:

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Language**: TypeScript with strict mode
- **Package Manager**: pnpm

### Project Structure

- `app/` - Next.js 15 App Router structure
  - `2025/` - Conference-specific pages with dedicated layout and metadata
  - `layout.tsx` - Root layout with header/footer and Google Analytics
- `components/` - Reusable UI components
  - `ui/` - shadcn/ui component library
- `lib/utils.ts` - Utility functions (includes `cn` helper for class merging)

### Key Features

- **Internationalization**: Japanese language support (`lang="ja"`)
- **Analytics**: Google Analytics integration with client-side tracking
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO**: Comprehensive Open Graph and Twitter Card metadata
- **Conference Schedule**: Type-safe schedule data structure with reusable components

### Schedule System

The conference schedule uses a structured type system:
- `types.ts` - Defines `SessionBase`, `TimeSlot`, `WeekdaySchedule` interfaces
- Data files in `schedule/data/` contain typed schedule information
- Components render different schedule formats (first day, weekdays, last day)

### Component Patterns

- Uses shadcn/ui component system with `class-variance-authority` for variants
- Imports use `@/` path mapping for clean references
- Components follow React 19 patterns with proper TypeScript typing