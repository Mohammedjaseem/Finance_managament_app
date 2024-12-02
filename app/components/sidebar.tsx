import Link from 'next/link'
import { Home, DollarSign, CreditCard, PlusCircle, List } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <Home className="mr-2" size={20} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/income-types" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <DollarSign className="mr-2" size={20} />
              Manage Income Types
            </Link>
          </li>
          <li>
            <Link href="/expense-types" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <CreditCard className="mr-2" size={20} />
              Manage Expense Types
            </Link>
          </li>
          <li>
            <Link href="/add-income" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <PlusCircle className="mr-2" size={20} />
              Add Daily Income
            </Link>
          </li>
          <li>
            <Link href="/add-expense" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <List className="mr-2" size={20} />
              Add Daily Expense
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

