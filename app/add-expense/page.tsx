'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function AddExpense() {
  const [expenseTypes, setExpenseTypes] = useState([])
  const [formData, setFormData] = useState({
    expense_type: '',
    amount: '',
    remarks: '',
    date: '',
  })

  useEffect(() => {
    // Fetch expense types on component mount
    fetch('/api/get_expense_types/')
      .then(response => response.json())
      .then(data => setExpenseTypes(data.data))
      .catch(error => console.error('Error fetching expense types:', error))

    // Set the current date after mounting to avoid hydration mismatch
    setFormData(prevData => ({
      ...prevData,
      date: new Date().toISOString().split('T')[0],
    }))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('/api/add_daily_expense/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Expense added:', data)
        // Reset form or show success message
        setFormData({
          expense_type: '',
          amount: '',
          remarks: '',
          date: new Date().toISOString().split('T')[0], // Reset date after submission
        })
      })
      .catch(error => console.error('Error adding expense:', error))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Add Daily Expense</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="expense_type" className="block text-sm font-medium text-gray-700">
            Expense Type
          </label>
          <Select
            id="expense_type"
            name="expense_type"
            value={formData.expense_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Expense Type</option>
            {expenseTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
            Remarks
          </label>
          <Input
            type="text"
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Add Expense</Button>
      </form>
    </div>
  )
}
