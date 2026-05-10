import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://joch.ai'),
  title: 'Joch — The control plane for AI agent fleets',
  description:
    'Joch is the vendor-neutral control plane for governing, securing, and operating AI agent fleets across every SDK, model, tool, and runtime.',
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
