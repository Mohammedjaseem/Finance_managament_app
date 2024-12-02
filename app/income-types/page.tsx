'use client'

import { useState, useEffect } from 'react'
import { TypeForm } from '../components/type-form'

export default function IncomeTypes() {
  const [incomeTypes, setIncomeTypes] = useState([])

  useEffect(() => {
    fetchIncomeTypes()
  }, [])

  const fetchIncomeTypes = () => {
    fetch('/api/get_income_types/')
      .then(response => response.json())
      .then(data => setIncomeTypes(data.data))
      .catch(error => console.error('Error fetching income types:', error))
  }

  const handleAddIncomeType = (name: string) => {
    fetch('/api/add_income_type/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(response => response.json())
      .then(() => {
        fetchIncomeTypes()
      })
      .catch(error => console.error('Error adding income type:', error))
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Manage Income Types</h1>
      <TypeForm type="income" onSubmit={handleAddIncomeType} />
      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Income Types</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Added By</th>
            </tr>
          </thead>
          <tbody>
            {incomeTypes.map((type) => (
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

