import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const head = localFont({
  src: [{ path: './fonts/Race_Sport.woff'}],
  variable: '--font-heading',
  weight: '400',
});

const para = localFont({
  src: [{ path: './fonts/TT-Chocolates.woff'}],
  variable: '--font-paragraph',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'PyQuizMaster - Test Your Python Knowledge',
  description: 'A comprehensive platform for Python MCQs across various topics and difficulty levels',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#18181b',
  icons: '/favicon.ico',
  openGraph: {
    title: 'PyQuizMaster - Python Quiz Platform',
    description: 'Test your Python knowledge with interactive quizzes across various topics',
    url: 'https://pyquizmaster.com',
    siteName: 'PyQuizMaster',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'PyQuizMaster - Python Quiz Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${head.variable} ${para.variable}`}>
      <body className={`bg-zinc-950 text-white min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
