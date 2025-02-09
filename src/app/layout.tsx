import Header from '@/components/baseLayout/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react'; // Import React

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WordPress + Next.js + GraphQL',
  description: 'A Next.js app using WordPress GraphQL API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <div className="containerLayout">{children}</div>
      </body>
    </html>
  );
}
