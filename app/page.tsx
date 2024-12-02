'use client'

import { useAuth } from '../app/context/auth-context'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const { user, logout } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await logout()
      router.push('/login')  // Redirect to the login page after logging out
    } catch (error) {
      console.error('Logout failed:', error)
      setIsLoggingOut(false)
    }
  }

  if (!user) {
    return <div>Loading...</div>  // You can display a loading message or spinner while user data is being fetched
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {user?.profile_name}</h1>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        disabled={isLoggingOut}
      >
        {isLoggingOut ? 'Logging out...' : 'Logout'}
      </button>
    </div>
  )
}
