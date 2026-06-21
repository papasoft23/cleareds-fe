import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Cleareds — AI-powered digital products for vegan and sustainable brands',
  description: 'We build landing pages, MVPs, and web products for purpose-driven brands in days, not months. AI-native delivery, modern infrastructure, ongoing support.',
  icons: {
    icon: '/cleareds-icon.png',
    apple: '/cleareds-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
