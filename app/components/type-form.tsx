'use client'

import { useState } from 'react'
import { Button } from "app/components/ui/button"
import { Input } from "app/components/ui/input"

interface TypeFormProps {
  type: 'income' | 'expense'
  onSubmit: (name: string) => void
}

export function TypeForm({ type, onSubmit }: TypeFormProps) {
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() === '') {
      setError('Name is required')
      return
    }
    setError(null)
    onSubmit(name)
    setName('')
  }

  const buttonText = `Add ${type.charAt(0).toUpperCase() + type.slice(1)} Type`

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {type.charAt(0).toUpperCase() + type.slice(1)} Type Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"  {/* Commented properly inside JSX */}
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            if (error) {
              setError(null)
            }
          }}
          required
          className="mt-1"
          placeholder={`Enter ${type} type name`}
          aria-label={`${type.charAt(0).toUpperCase() + type.slice(1)} Type Name`}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit">{buttonText}</Button>
    </form>
  )
}
