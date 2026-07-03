# CMORGZ Auto Body Repairs Website

A modern, responsive website for a professional auto body repair business built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Smooth Animations** - Framer Motion animations throughout
- **Dark Theme** - Modern dark UI with red accents
- **Portfolio Section** - Showcase repair work with filterable gallery
- **Contact Integration** - WhatsApp, Email, and Phone integration
- **FAQ Section** - Expandable FAQ for common questions
- **Testimonials** - Customer feedback carousel
- **SEO Optimized** - Meta tags and structured data

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: React
- **Icons**: React Icons
- **Carousel**: Swiper

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/verbose-octo-disco.git
   cd verbose-octo-disco
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   └── page.tsx            # Home page
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer component
│   ├── FloatingButtons.tsx  # WhatsApp and call buttons
│   ├── ScrollProgress.tsx   # Scroll progress bar
│   ├── BackToTop.tsx        # Back to top button
│   ├── QuoteForm.tsx        # Quote request form modal
│   └── sections/
│       ├── Hero.tsx         # Hero banner
│       ├── Features.tsx      # Features showcase
│       ├── Services.tsx      # Services section
│       ├── Portfolio.tsx     # Project gallery
│       ├── Quote.tsx         # Quote request section
│       ├── Trust.tsx         # Why choose us
│       ├── Testimonials.tsx  # Customer testimonials
│       └── FAQ.tsx           # FAQ section
└── lib/
    ├── constants.ts         # App constants
    └── helpers.ts           # Utility functions
```

## Customization

### Update Contact Information

Edit `src/lib/constants.ts`:

```typescript
export const whatsappNumber = 'YOUR_NUMBER';
export const phoneNumber = 'YOUR_PHONE';
export const email = 'your@email.com';
export const address = 'Your Address';
```

### Update Services

Edit the `services` array in `src/lib/constants.ts` or directly in `src/components/sections/Services.tsx`

### Update Testimonials

Edit the `testimonials` array in `src/components/sections/Testimonials.tsx`

### Update Colors

Edit the Tailwind config in `tailwind.config.js`:

```javascript
colors: {
  primary: '#D71920',      // Main red
  'primary-dark': '#B91619',
  secondary: '#101010',     // Dark background
  background: '#070707',    // Darkest background
  // ... other colors
}
```

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

This project is ready to deploy on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with one click

## License

This project is licensed under the MIT License.

## Support

For support, please contact through the website contact form.
