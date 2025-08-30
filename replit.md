# Mohamed Hasan M - Portfolio Website

## Overview

This is a modern, full-stack portfolio website for Mohamed Hasan M, a Java Full Stack Developer. The application showcases his skills, projects, education, and provides contact functionality. Built with React frontend and Express backend, it features a clean, responsive design with dark/light theme support and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: React Query for server state, React Context for theme management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for resume download and contact form submission
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Logging**: Custom request/response logging middleware for API endpoints

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: In-memory storage implementation with interface for future database integration
- **File Storage**: Static file serving for resume downloads from attached_assets directory

### Authentication and Authorization
- **Current State**: Basic user schema defined but not implemented in the portfolio
- **Future Ready**: User authentication structure prepared with username/password fields
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage

### Development and Deployment
- **Development Server**: Vite dev server with HMR for frontend, tsx for backend development
- **Build Process**: Vite build for frontend, esbuild for backend bundling
- **Environment**: Environment variable configuration for database connections
- **Development Tools**: TypeScript compiler, path aliasing, and custom error overlays

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Connection**: PostgreSQL connection via DATABASE_URL environment variable

### Frontend Libraries
- **UI Framework**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS-based animations with Intersection Observer for scroll effects
- **Forms**: React Hook Form with Zod validation resolvers
- **Date Handling**: date-fns for date formatting and manipulation

### Development Services
- **Replit Integration**: Custom plugins for development environment
- **Font Loading**: Google Fonts (Inter) with preconnect optimization
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

### Build and Tooling
- **TypeScript**: Full TypeScript support across frontend and backend
- **Vite Plugins**: React plugin, runtime error overlay, and Replit cartographer
- **Path Resolution**: Custom path aliases for clean imports (@, @shared, @assets)