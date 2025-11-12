import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Cleareds - Ethical software for humans, animals, and the planet',
  description: 'Vegan-first apps, animal-friendly bots, and AI tools for conscious e-commerce. Privacy-first, kind, and credible solutions.',
  icons: {
    icon: '/download.svg',
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
