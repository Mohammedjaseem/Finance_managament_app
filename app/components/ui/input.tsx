import React from 'react'

interface InputProps {
  type: string
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
  className?: string  // Add className here to accept custom classes
}

export const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  onChange,
  required,
  placeholder,
  className = '', // Default to an empty string if no className is passed
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} // Combine the passed className with default styles
    />
  )
}
