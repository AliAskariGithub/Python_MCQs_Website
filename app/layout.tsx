import type { Metadata } from 'next'
import { JetBrains_Mono, Poppins } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'PyQuizMaster - Test Your Python Knowledge',
  description: 'A comprehensive platform for Python MCQs across various topics and difficulty levels',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#18181b',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'PyQuizMaster - Python Quiz Platform',
    description: 'Test your Python knowledge with interactive quizzes across various topics',
    url: 'https://pyquizmaster.com',
    siteName: 'PyQuizMaster',
    images: [
      {
        url: '/og-image.png',
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
    <html lang="en" className={`scroll-smooth ${jetbrainsMono.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} bg-zinc-950 text-white min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
