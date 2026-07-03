import type { Metadata } from 'next';
import { Poppins, Montserrat, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CMORGZ Auto Body Repairs | Premium Collision Repair Services',
  description: 'Professional auto body repairs with premium workmanship. Accident repairs, panel beating, spray painting, and insurance claims assistance.',
  keywords: 'auto body repair, collision repair, panel beating, spray painting, accident repairs',
  openGraph: {
    title: 'CMORGZ Auto Body Repairs',
    description: 'Professional auto body repairs with premium workmanship',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-text antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
