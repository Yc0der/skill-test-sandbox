import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'v2-nextjs-with-skill',
  description: 'Next.js App Router skeleton',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
