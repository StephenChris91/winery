import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';


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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
