'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/auth-context'
import Loading from '../loading'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  // Ensures the effect is only run on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Redirect logic after hydration and isLoading state is complete
  useEffect(() => {
    if (!isLoading && user === null && mounted) {
      // If not logged in, redirect to login
      router.replace('/login')
    }
  }, [user, isLoading, router, mounted])

  // Show loading screen during the initial load
  if (!mounted || isLoading) return <Loading />

  // Once mounted and no longer loading, we check the user status
  if (user === null) {
    return <div>Error: Authentication failed. Please log in.</div>
  }

  // If user is authenticated, render the protected children
  return <>{children}</>
}
