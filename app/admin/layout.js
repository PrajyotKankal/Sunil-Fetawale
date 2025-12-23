import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'

export default async function AdminLayout({ children }) {
    // Skip auth check for login page
    return (
        <div className="min-h-screen bg-gray-50">
            {children}
        </div>
    )
}
