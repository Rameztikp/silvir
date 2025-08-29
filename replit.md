# Silver Hand - E-Commerce Platform

## Overview

Silver Hand is a modern Arabic e-commerce platform specializing in premium electronic hookahs and accessories. Built as a full-stack web application with a React frontend and Express backend, the platform showcases luxury vaping products with an elegant, right-to-left (RTL) Arabic interface. The application features a landing page design with sections for hero display, product showcase, company information, and customer contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS custom properties for theming, configured for RTL layout support
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout for consistent typing across the stack
- **Database Integration**: Drizzle ORM configured for PostgreSQL with connection to Neon database
- **Session Management**: Express sessions with PostgreSQL session store
- **Development Server**: Custom Vite integration for hot module replacement in development

### Design System
- **Typography**: Cairo font family for Arabic text support with fallbacks for international content
- **Theme System**: CSS custom properties with light/dark mode support (currently light mode)
- **Component Library**: Comprehensive UI component set including forms, dialogs, navigation, and data display
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation support

### Data Management
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management schema with UUID primary keys and unique constraints
- **Migrations**: Drizzle Kit for database migration management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Development Workflow
- **Monorepo Structure**: Organized with separate client, server, and shared directories
- **Shared Types**: Common TypeScript types and Zod schemas in shared directory
- **Path Aliases**: Configured import aliases for clean import statements
- **Asset Management**: Static asset serving with Vite asset handling

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations

### UI & Styling Libraries
- **Radix UI**: Comprehensive primitive component library for accessible UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library providing consistent iconography
- **Class Variance Authority**: Utility for creating component variants

### Development Tools
- **Replit Integration**: Development environment optimization with runtime error handling
- **ESBuild**: JavaScript/TypeScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

### Fonts & Typography
- **Google Fonts**: Cairo font family for Arabic language support
- **Font Loading**: Optimized font loading with preconnect and display swap strategies

### Form & Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation for type-safe form handling and API validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### State & API Management
- **TanStack Query**: Server state management with caching and synchronization
- **Date-fns**: Date utility library for formatting and manipulation