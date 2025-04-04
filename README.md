# Huntlee Landing

A modern, scalable Next.js 15 web app with best practices.

## Features

- 🚀 **Next.js 15** with App Router
- 💻 **TypeScript** for type safety
- 🎨 **Tailwind CSS 4** for styling
- 🔄 **Server Components** for optimal performance
- 🌙 **Dark Mode** support
- 📱 **Responsive Design** for all devices
- 🧩 **Component-Based Architecture**
- 🧰 **Custom Hooks and Utilities**
- 📝 **Form Handling** with validation
- 📄 **Documentation** pages
- 🔍 **SEO Friendly** with metadata

## Directory Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── (routes)/        # Route groups
│   ├── api/             # API routes
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── docs/            # Documentation pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable components
│   ├── ui/              # UI components (buttons, inputs, etc.)
│   ├── layout/          # Layout components (header, footer, etc.)
│   └── features/        # Feature-specific components
├── lib/                 # Utilities, hooks, and services
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API and external services
│   └── utils/           # Utility functions
├── styles/              # Additional styles
└── types/               # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js v20.12.2 or later
- Npm v10.5.0

### Installation

1. Clone the repository:
```bash
git clone https://gitlab.violinorg.ru/huntlee/huntlee-landing.git
cd huntlee-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
```

Then, start the production server:

```bash
npm run start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Customization

- Update the theme colors in `src/app/globals.css`
- Modify the Tailwind configuration in `tailwind.config.ts`
- Add your own components to the appropriate directories
- Customize the layout and pages as needed