// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/(components)/layout/Navbar'; 
import { Footer } from '@/app/(components)/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portafolio de Pablo Ruelas',
  description: 'Portafolio de proyectos de desarrollo web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
            {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}