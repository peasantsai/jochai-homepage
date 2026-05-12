import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://crux.invariantcontinuum.io'),
  title: 'Crux Control - AI agent control plane',
  description:
    'Crux Control discovers, governs, routes, and observes managed CLI agents and custom-built agents from one vendor-neutral control plane.',
  icons: {
    icon: [
      { url: '/brand/favicon.ico' },
      { url: '/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/brand/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
