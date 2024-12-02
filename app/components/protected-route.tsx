// src/components/ProtectedRoute.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/auth-context'
import Loading from '../loading'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth() // error removed from here
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  // Ensures the effect is only run on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Redirect logic after hydration
  useEffect(() => {
    if (!isLoading && user === null && mounted) {
      router.replace('/login')
    }
  }, [user, isLoading, router, mounted])

  if (!mounted || isLoading) return <Loading />

  // Handle error logic, for example showing an error message if user is null
  if (user === null) {
    // Show error message or redirect
    return <div>Error: Authentication failed. Please log in.</div>
  }

  return user ? <>{children}</> : null
}
