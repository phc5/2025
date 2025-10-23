import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Variable.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-VariableItalic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Paul Hyun Chong',
  description:
    'Paul Chong is a senior software engineer who specialiez in front-end and UI development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased`}>{children}</body>
    </html>
  );
}
