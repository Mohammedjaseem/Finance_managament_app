'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router' // Correct import for client-side routing
import { useAuth } from '../context/auth-context'
import Loading from '../loading'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  // Ensures useRouter is only accessed after the component has mounted on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Redirect logic to be executed after the component is mounted
  useEffect(() => {
    if (mounted && !isLoading && user === null) {
      if (router.asPath !== '/login') {
        router.replace('/login')
      }
    }
  }, [mounted, isLoading, user, router])

  // Show a loading state or spinner until the app has mounted and authentication is resolved
  if (!mounted || isLoading) return <Loading />

  // Show an error message if the user is not logged in and not on the login page
  if (user === null && router.asPath !== '/login') {
    return <div>Error: Authentication failed. Please log in.</div>
  }

  // If the login page is being accessed, render the login page
  if (router.asPath === '/login') {
    return <>{children}</>
  }

  // If the user is authenticated, render the protected route's children
  return user ? <>{children}</> : null
}
