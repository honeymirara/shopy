import { TheHeader } from '../components/TheHeader'
import { TheFooter } from '../components/TheFooter'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Создано с помощью create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main className="container">
          {children}
        </main>
        <TheFooter />
      </body>
    </html>
  )
}

