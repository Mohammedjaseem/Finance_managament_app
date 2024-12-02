'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/auth-context'
import Loading from '../loading'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user === null) {
      router.replace('/login')
    }
  }, [user, isLoading, router])

  if (isLoading) return <Loading />
  return user ? <>{children}</> : null
}
