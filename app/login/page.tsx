'use client'

import { useState } from 'react'
import { useAuth } from '../context/auth-context'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password) {
      setError('Please fill in both fields.')
      return
    }

    setLoading(true)
    try {
      await login(username, password)
      router.push('/dashboard') // Redirect to a protected page
    } catch (err) {
      setError('Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-96 p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
