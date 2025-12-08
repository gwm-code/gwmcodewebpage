# GWM-Code Landing Page

A professional, high-conversion B2B landing page for GWM-Code, a software agency specializing in custom POS, Invoicing, and CRM solutions for small businesses.

## Design Philosophy

This landing page follows proven B2B SaaS landing page best practices based on extensive research:

- **Clean, Professional Design**: White backgrounds, ample white space, clear visual hierarchy
- **Above-the-Fold Lead Capture**: Form prominently placed in hero section for immediate conversion
- **Trust Signals**: Stats, testimonials, case studies, and specific metrics build credibility
- **Outcome-Focused Copy**: Benefits over features, specific numbers, addresses pain points
- **Clear Value Proposition**: Communicates unique selling points immediately
- **Transparent Process**: Shows exactly how the service works
- **Social Proof**: Real testimonials with names, roles, and companies

## Key Features

### Conversion Optimization
- Lead capture form above the fold (right side of hero)
- Multiple CTAs throughout the page
- Trust badges and security indicators
- Specific, measurable results in case studies
- Clear pricing model (one-time payment vs subscriptions)

### Professional Design Elements
- Modern, clean interface with Inter font family
- Subtle animations that don't distract
- Responsive design that works on all devices
- Accessibility-focused with proper contrast ratios
- Professional color palette: Blue (#3b82f6), Gray, White

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font family

## Project Structure

```
gwm-code-landing/
├── app/
│   ├── page.jsx          # Main landing page component
│   ├── layout.jsx        # Root layout (add this)
│   └── globals.css       # Global styles
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Setup Instructions

1. **Install Dependencies**:
```bash
npm install
```

2. **Create App Layout** (app/layout.jsx):
```jsx
import './globals.css'

export const metadata = {
  title: 'GWM-Code | Custom Software for Growing Businesses',
  description: 'We build tailored POS, Invoicing, and Sales tools. No monthly subscriptions. No bloatware. Just software that works for you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

3. **Run Development Server**:
```bash
npm run dev
```

4. **Open Browser**: Navigate to `http://localhost:3000`

## Page Sections

1. **Navbar**: Fixed navigation with smooth scrolling to sections
2. **Hero Section**: Eye-catching headline with code-themed visual
3. **Services Grid**: Three service cards (POS, Invoicing, CRM)
4. **Why Us Section**: Key differentiators with checkmarks
5. **Contact Form**: Lead capture form with validation
6. **Footer**: Links and copyright information

## Form Functionality

The contact form currently logs data to the console. To integrate with a backend:

1. Replace the `handleSubmit` function in `ContactFormSection`
2. Add your API endpoint
3. Handle success/error states

Example:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setShowSuccess(true);
      // Reset form...
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  navy: {
    DEFAULT: '#0f172a', // Your navy blue
  },
  electric: {
    DEFAULT: '#3b82f6', // Your electric blue
  }
}
```

### Content
All content is editable directly in the `page.jsx` file. Look for:
- Service descriptions in `ServicesSection`
- Benefits in `WhyUsSection`
- Form fields in `ContactFormSection`

### Animations
Framer Motion animations can be customized via the `variants` objects:
```javascript
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
```

## Performance Optimizations

- Lazy-loaded animations (viewport-triggered)
- Optimized images (add Next.js Image component for production)
- Minimal JavaScript bundle
- CSS purging via Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - GWM-Code

## Contact

For questions or support, use the contact form on the website.
