import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'GWM-Code | Custom Software for Growing Businesses',
  description: 'We build tailored POS, Invoicing, and Sales tools. No monthly subscriptions. No bloatware. Just software that works for you.',
  keywords: 'custom software, POS system, invoicing software, CRM, small business software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
