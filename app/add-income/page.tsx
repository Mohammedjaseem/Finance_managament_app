'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function AddIncome() {
  const [incomeTypes, setIncomeTypes] = useState([])
  const [formData, setFormData] = useState({
    income_type: '',
    amount: '',
    remarks: '',
    date: new Date().toISOString().split('T')[0],
  })

  useEffect(() => {
    fetch('/api/get_income_types/')
      .then(response => response.json())
      .then(data => setIncomeTypes(data.data))
      .catch(error => console.error('Error fetching income types:', error))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('/api/add_daily_income/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Income added:', data)
        // Reset form or show success message
        setFormData({
          income_type: '',
          amount: '',
          remarks: '',
          date: new Date().toISOString().split('T')[0],
        })
      })
      .catch(error => console.error('Error adding income:', error))
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
      <h1 className="text-3xl font-bold">Add Daily Income</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="income_type" className="block text-sm font-medium text-gray-700">
            Income Type
          </label>
          <Select
            id="income_type"
            name="income_type"
            value={formData.income_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Income Type</option>
            {incomeTypes.map((type) => (
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
        <Button type="submit">Add Income</Button>
      </form>
    </div>
  )
}

