# Cleareds Frontend

> **Ethical software for humans, pets, and the planet.**

A production-ready Next.js e-commerce application with clean architecture for integrations with Contentful CMS and Adobe Commerce (Magento), featuring SSR, i18n, and modern best practices.

## Architecture Overview

This application follows a strict separation of concerns with clear architectural patterns:

### Core Principles

1. **Clean Routing**: Locale-based routing with SSR optimization
2. **API Layer**: Next.js middleware serves as the integration layer
3. **Clear Separation**: UI components, business logic, and integrations are distinctly separated
4. **Performance First**: SSR, optimized images, and minimal client-side JavaScript
5. **Accessibility**: WCAG-compliant components and semantic HTML

### Directory Structure

```
app/
├── [locale]/           # Localized routes (en, de)
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Homepage (/en, /de)
│   ├── catalog/        # Product catalog
│   └── product/        # Product detail pages
├── api/                # API routes (middleware layer)
└── globals.css         # Global styles

context/                # React context providers
├── CartContext.tsx     # Shopping cart state

integrations/           # External service integrations
├── adobe-commerce/     # Magento GraphQL client
└── contentful/         # Contentful CMS client

ui/                     # UI components
├── components/         # Reusable components
├── pages/             # Page-specific components
└── client/            # Client-side components

i18n/                  # Internationalization
├── routing.ts         # Locale routing config
└── messages/          # Translation files

middleware.ts          # Next.js middleware for routing
```

## Architecture Rules

### 1. Routing & Navigation
- **DO**: Use locale-based routing (`/en/page`, `/de/page`)
- **DO**: Leverage SSR for all pages
- **DON'T**: Create client-side routing that bypasses i18n
- **DON'T**: Modify the core routing structure without team approval

### 2. API Layer
- **DO**: Use Next.js API routes in `/app/api/` as middleware
- **DO**: Keep business logic in the API layer, not in components
- **DO**: Handle errors gracefully with proper HTTP status codes
- **DON'T**: Call external APIs directly from components

### 3. Component Architecture
- **DO**: Keep components pure and focused on presentation
- **DO**: Use TypeScript for all components with proper interfaces
- **DO**: Follow accessibility best practices (ARIA labels, semantic HTML)
- **DON'T**: Mix business logic with presentation logic
- **DON'T**: Create overly complex component hierarchies

### 4. State Management
- **DO**: Use React Context for global state (Cart, User)
- **DO**: Keep state as close to usage as possible
- **DON'T**: Use external state management unless absolutely necessary

### 5. Integrations
- **DO**: Keep all external service calls in `/integrations/`
- **DO**: Use GraphQL for structured data fetching
- **DO**: Implement proper error handling and retry logic
- **DON'T**: Mix integration logic with UI components

### 6. Styling
- **DO**: Use Tailwind CSS for consistent styling
- **DO**: Create reusable component classes
- **DO**: Ensure responsive design for all components
- **DON'T**: Use inline styles or CSS modules

### 7. Performance
- **DO**: Optimize images with Next.js Image component
- **DO**: Use dynamic imports for non-critical components
- **DO**: Implement proper SEO meta tags
- **DON'T**: Load unnecessary JavaScript on the client

### 8. i18n & Localization
- **DO**: Use next-intl for all translations
- **DO**: Focus on English first, then expand
- **DO**: Keep translation keys organized and descriptive
- **DON'T**: Hardcode text strings in components

## Development Guidelines

### Getting Started
```bash
npm install
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint check
```

### Adding New Features
1. Plan the feature architecture first
2. Create API endpoints if external data is needed
3. Build UI components following the established patterns
4. Add proper TypeScript types
5. Ensure accessibility compliance
6. Test responsive design

### Code Quality Standards
- All code must be TypeScript
- Components must be accessible (WCAG compliant)
- Use semantic HTML elements
- Implement proper error boundaries
- Follow Next.js best practices for SSR

### Branch Protection
- Main branch requires pull request reviews
- All code must pass lint checks
- No direct commits to main branch

## Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **i18n**: next-intl
- **CMS**: Contentful
- **E-commerce**: Adobe Commerce (Magento)
- **State**: React Context
- **HTTP Client**: GraphQL Request

## Brand Values & Implementation

### Ethical Software Principles
- **Privacy First**: No dark patterns, clear data usage
- **Accessibility**: WCAG 2.1 AA compliance minimum
- **Performance**: Fast loading, efficient code
- **Sustainability**: Optimized for minimal resource usage

### Design System
- Clean, minimal interface
- Warm, approachable typography
- Consistent spacing and colors
- Mobile-first responsive design
- Clear visual hierarchy

## Deployment

The application is optimized for deployment on Vercel with:
- Automatic deployments from main branch
- Environment-based configuration
- Optimized build process
- CDN integration for static assets

## Contributing

1. Follow the architecture rules outlined above
2. Ensure all new code includes proper TypeScript types
3. Test accessibility with screen readers
4. Verify responsive design on multiple devices
5. Run lint checks before committing
6. Update this README when adding new patterns or rules
