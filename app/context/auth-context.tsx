'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: number
  email: string
  token: string
  profile_name: string
  profile_img: string
  designation: string
  org_name: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        setUser(null)
      }
      setIsLoading(false)
    }

    checkAuth()
    window.addEventListener('storage', checkAuth)

    return () => {
      window.removeEventListener('storage', checkAuth)
    }
  }, [])

  const login = async (username: string, password: string) => {
    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('username', username)
      formData.append('password', password)

      const response = await fetch('https://example.com/api/login/', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (!data.status) throw new Error('Login failed')

      const userData = {
        id: data.id,
        email: data.email,
        token: data.token,
        profile_name: data.profile_name,
        profile_img: data.profile_img,
        designation: data.designation,
        org_name: data.org_name,
      }

      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      router.replace('/')
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    router.replace('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
