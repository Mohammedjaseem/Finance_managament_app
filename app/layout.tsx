import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from './components/sidebar'
import { AuthProvider } from './context/auth-context'
import { ProtectedRoute } from './components/protected-route'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your description here" />
        <title>Your App Title</title>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ProtectedRoute>
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <main className="flex-1 p-8 overflow-auto">{children}</main>
            </div>
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  )
}
