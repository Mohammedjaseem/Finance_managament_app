// app/components/ui/select.tsx
import React from 'react'

interface SelectProps {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
  children: React.ReactNode
}

export const Select: React.FC<SelectProps> = ({ id, name, value, onChange, required, children }) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  )
}
