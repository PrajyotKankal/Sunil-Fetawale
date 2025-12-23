'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminReportsPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [activeTab, setActiveTab] = useState('overview')

    useEffect(() => {
        fetchReports()
    }, [])

    async function fetchReports() {
        try {
            const res = await fetch('/api/admin/reports')
            if (res.status === 401) {
                router.push('/admin/login')
                return
            }
            const result = await res.json()
            setData(result)
        } catch (error) {
            console.error('Failed to fetch reports:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading reports...</p>
                </div>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-600">Failed to load reports</p>
            </div>
        )
    }

    const { stats, topViewed, recentlyAdded, zeroViews, allProducts } = data

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                            <p className="text-sm text-gray-500">Track product performance and views</p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/admin/products"
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                            >
                                ← Products
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                        <p className="text-sm text-gray-500">Total Products</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <p className="text-3xl font-bold text-green-600">{stats.totalViews}</p>
                        <p className="text-sm text-gray-500">Total Views</p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4 border border-pink-200 shadow-sm">
                        <p className="text-3xl font-bold text-pink-700">{stats.byCategory.bridal}</p>
                        <p className="text-sm text-pink-600">Bridal</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-sm">
                        <p className="text-3xl font-bold text-blue-700">{stats.byCategory.groom}</p>
                        <p className="text-sm text-blue-600">Groom</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 shadow-sm">
                        <p className="text-3xl font-bold text-orange-700">{stats.byCategory.baraat}</p>
                        <p className="text-sm text-orange-600">Baraat</p>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 shadow-sm">
                        <p className="text-3xl font-bold text-yellow-700">{stats.featured}</p>
                        <p className="text-sm text-yellow-600">Featured</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
                    <div className="flex border-b border-gray-200">
                        {[
                            { id: 'overview', label: 'All Products', count: allProducts.length },
                            { id: 'top', label: 'Top Viewed', count: topViewed.length },
                            { id: 'recent', label: 'Recently Added', count: recentlyAdded.length },
                            { id: 'zero', label: 'Zero Views', count: zeroViews.length },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {tab.label}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id
                                        ? 'bg-gray-700 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                    }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4">
                        <ProductTable
                            products={
                                activeTab === 'overview' ? allProducts :
                                    activeTab === 'top' ? topViewed :
                                        activeTab === 'recent' ? recentlyAdded :
                                            zeroViews
                            }
                            showRank={activeTab === 'top'}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

function ProductTable({ products, showRank }) {
    if (products.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                No products found
            </div>
        )
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        {showRank && <th className="text-left py-3 px-2 text-gray-700 font-semibold text-sm">#</th>}
                        <th className="text-left py-3 px-2 text-gray-700 font-semibold text-sm">Product</th>
                        <th className="text-left py-3 px-2 text-gray-700 font-semibold text-sm">Code</th>
                        <th className="text-left py-3 px-2 text-gray-700 font-semibold text-sm">Category</th>
                        <th className="text-left py-3 px-2 text-gray-700 font-semibold text-sm">Color</th>
                        <th className="text-right py-3 px-2 text-gray-700 font-semibold text-sm">Views</th>
                        <th className="text-left py-3 px-2 text-gray-700 font-semibold text-sm">Added</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id} className="border-b border-gray-100 hover:bg-gray-50">
                            {showRank && (
                                <td className="py-3 px-2">
                                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${index === 0 ? 'bg-yellow-500 text-white' :
                                            index === 1 ? 'bg-gray-400 text-white' :
                                                index === 2 ? 'bg-orange-400 text-white' :
                                                    'bg-gray-200 text-gray-600'
                                        }`}>
                                        {index + 1}
                                    </span>
                                </td>
                            )}
                            <td className="py-3 px-2">
                                <div className="flex items-center gap-3">
                                    {product.images?.[0] ? (
                                        <Image
                                            src={product.images[0].url}
                                            alt={product.title}
                                            width={40}
                                            height={40}
                                            className="rounded-lg object-cover"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                    <span className="text-gray-900 font-medium line-clamp-1 max-w-[200px]">
                                        {product.title}
                                    </span>
                                </div>
                            </td>
                            <td className="py-3 px-2">
                                <span className="text-gray-600 font-mono text-sm">{product.code}</span>
                            </td>
                            <td className="py-3 px-2">
                                <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${product.category === 'bridal' ? 'bg-pink-100 text-pink-700' :
                                        product.category === 'groom' ? 'bg-blue-100 text-blue-700' :
                                            'bg-orange-100 text-orange-700'
                                    }`}>
                                    {product.category}
                                </span>
                            </td>
                            <td className="py-3 px-2 text-gray-600">{product.colorGroup}</td>
                            <td className="py-3 px-2 text-right">
                                <span className={`font-semibold ${(product.viewCount || 0) > 10 ? 'text-green-600' :
                                        (product.viewCount || 0) > 0 ? 'text-gray-700' :
                                            'text-gray-400'
                                    }`}>
                                    {product.viewCount || 0}
                                </span>
                            </td>
                            <td className="py-3 px-2 text-gray-500 text-sm">
                                {new Date(product.createdAt).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: '2-digit'
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
