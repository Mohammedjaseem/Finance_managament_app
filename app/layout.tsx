import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from './components/sidebar'
import { AuthProvider } from './context/auth-context'
import { ProtectedRoute } from './components/protected-route'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
