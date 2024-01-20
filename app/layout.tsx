// 'use client'

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navbar';
import { FooterSection } from '@/components/Footer';
import StoreProvider from '@/redux/Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WineShop',
  description: 'The No.1 Online shop for Wines',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
          <body className={inter.className}>
            <StoreProvider>
              <Navigation />
                {children}
              <FooterSection />
            </StoreProvider>
          </body>
        </html>
  )
}
