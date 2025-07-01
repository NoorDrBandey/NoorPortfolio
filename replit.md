# Dr. Noor Ul An Bandey - Medical Professional Portfolio

## Overview

This is a full-stack web application built as a professional medical portfolio for Dr. Noor Ul An Bandey. The application serves as a comprehensive showcase for medical professionals, particularly designed for LinkedIn visibility and Masters in Public Health (MPH) program applications. It features a modern, responsive design with a medical theme and provides both public portfolio viewing and administrative content management capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom medical theme colors
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Pattern**: RESTful API with JSON responses
- **Request Handling**: Express middleware for logging, CORS, and error handling
- **Development Mode**: Vite middleware integration for hot module reloading

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Migrations**: Drizzle Kit for schema migrations
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback

## Key Components

### Portfolio Sections
1. **Hero Section**: Professional introduction with contact information
2. **About Section**: Professional summary and MPH aspirations
3. **Education Section**: Academic background with timeline visualization
4. **Experience Section**: Professional and volunteer experience
5. **Publications Section**: Research publications with expandable details
6. **Certifications Section**: Professional certifications and training
7. **Contact Section**: Contact form with validation

### Data Models
- **Publications**: Academic papers, case studies, and research
- **Certifications**: Professional certifications and training records
- **Experiences**: Work history, internships, and volunteer work
- **Contact Messages**: Inquiries from portfolio visitors

### UI Components
- Comprehensive component library using shadcn/ui
- Responsive design with mobile-first approach
- Custom medical-themed color scheme
- Loading states and error handling
- Form validation with real-time feedback

## Data Flow

1. **Client Request**: Browser requests are handled by Express server
2. **API Routes**: RESTful endpoints serve JSON data for each content type
3. **Storage Layer**: Abstract storage interface allows for different implementations
4. **Database Operations**: Drizzle ORM handles PostgreSQL queries and transactions
5. **Response**: Structured JSON responses with error handling
6. **Client State**: TanStack Query manages caching and synchronization
7. **UI Updates**: React components re-render based on data changes

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js for server-side routing
- Drizzle ORM and PostgreSQL driver (@neondatabase/serverless)
- TanStack Query for data fetching
- Wouter for client-side routing

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production bundling
- Replit-specific plugins for development environment

### Validation and Utilities
- Zod for schema validation
- Date-fns for date manipulation
- CLSX and Tailwind Merge for conditional styling

## Deployment Strategy

### Development Environment
- Vite development server with hot module reloading
- Express server running concurrently for API endpoints
- In-memory storage fallback for development without database
- Replit-specific development banner and error handling

### Production Build
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles Express server for Node.js runtime
3. **Asset Serving**: Express serves static files from build directory
4. **Database Connection**: PostgreSQL connection via environment variables

### Environment Configuration
- `NODE_ENV` determines development vs production behavior
- `DATABASE_URL` for PostgreSQL connection string
- Build artifacts output to `dist/` directory
- Static assets served from `dist/public/`

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```