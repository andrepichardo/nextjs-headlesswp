import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import type React from 'react'; // Import React

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WordPress Next.js GraphQL',
  description: 'A Next.js app using WordPress GraphQL API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`containerLayout ${inter.className}`}>
        <Link href="/" className="text-blue-500 text-xl hover:underline">
          Inicio
        </Link>
        {children}
      </body>
    </html>
  );
}
