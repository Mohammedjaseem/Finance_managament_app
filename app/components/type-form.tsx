'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface TypeFormProps {
  type: 'income' | 'expense'
  onSubmit: (name: string) => void
}

export function TypeForm({ type, onSubmit }: TypeFormProps) {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {type.charAt(0).toUpperCase() + type.slice(1)} Type Name
        </label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <Button type="submit">Add {type.charAt(0).toUpperCase() + type.slice(1)} Type</Button>
    </form>
  )
}

