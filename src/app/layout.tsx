import type { Metadata } from 'next';
import { OptionalGoogleAnalytics } from '@/components/google-analytics';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roger Dhillon — VP Technology / Platform & AIOps',
  description:
    'Roger Dhillon — VP Technology / Platform & AIOps. Book an interview, view LinkedIn, download resume, and see product demos.',
  metadataBase: new URL('https://rogerdhillon.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <OptionalGoogleAnalytics />
    </html>
  );
}
