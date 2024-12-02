'use client'

import { useState, useEffect } from 'react'
import { TypeForm } from '../components/type-form'

export default function ExpenseTypes() {
  const [expenseTypes, setExpenseTypes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExpenseTypes()
  }, [])

  const fetchExpenseTypes = () => {
    setLoading(true)
    fetch('/api/get_expense_types/')
      .then((response) => response.json())
      .then((data) => {
        setExpenseTypes(data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching expense types:', error)
        setLoading(false)
      })
  }

  const handleAddExpenseType = (name: string) => {
    if (!name.trim()) {
      alert('Expense type name cannot be empty')
      return
    }

    fetch('/api/add_expense_type/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((newType) => {
        setExpenseTypes((prevTypes) => [...prevTypes, newType])  // Directly update the state
      })
      .catch((error) => console.error('Error adding expense type:', error))
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Manage Expense Types</h1>
      <TypeForm type="expense" onSubmit={handleAddExpenseType} />
      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Expense Types</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Added By</th>
            </tr>
          </thead>
          <tbody>
            {expenseTypes.map((type) => (
              <tr key={type.id}>
                <td className="py-2 px-4 border-b">{type.name}</td>
                <td className="py-2 px-4 border-b">{type.added_by_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
