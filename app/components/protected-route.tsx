'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/auth-context'
import Loading from '../loading'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading, error } = useAuth()
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

  if (error) {
    // Handle error (e.g., show error message or redirect)
    return <div>Error: {error.message}</div>
  }
  
  return user ? <>{children}</> : null
}
