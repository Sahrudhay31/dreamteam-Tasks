import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
 // Line 5

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FableVerse | Timeless Stories & Morals',
  description: 'Read classic fables, discover their morals, and create your own.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
        <main >{children}</main>
 
      </body>
    </html>
  );
}