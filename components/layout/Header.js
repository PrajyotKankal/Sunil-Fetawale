'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import MobileNav from './MobileNav'
import { useCart } from '@/context/CartContext'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const { cart, setIsOpen } = useCart()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const headerBg = scrolled
        ? 'rgba(253, 250, 246, 0.96)'
        : 'rgba(253, 250, 246, 0.75)'

    const navigation = [
        { name: 'Products', href: '/products' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Wholesale', href: '/wholesale' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header
            className="sticky top-0 z-50 transition-all duration-500"
            style={{
                backgroundColor: headerBg,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderBottom: `1px solid ${scrolled ? 'rgba(212,175,55,0.18)' : 'rgba(212,175,55,0.1)'}`,
                boxShadow: scrolled ? '0 2px 24px rgba(87,65,55,0.08)' : 'none',
            }}
        >
            {/* Thin gold accent bar at top */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5) 30%, rgba(212,175,55,0.8) 50%, rgba(212,175,55,0.5) 70%, transparent)',
                    opacity: scrolled ? 1 : 0.6,
                    transition: 'opacity 0.5s',
                }}
            />

            <nav className="container-custom py-3.5 md:py-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center group flex-shrink-0">
                        <div className="flex flex-col">
                            <span
                                className="font-display leading-tight tracking-tight transition-colors duration-400"
                                style={{
                                    fontSize: 'clamp(1.3rem, 3vw, 1.65rem)',
                                    color: '#7A1F2D',
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                Sunil Collection
                            </span>
                            <span
                                className="font-sans uppercase transition-colors duration-400"
                                style={{
                                    fontSize: '8.5px',
                                    letterSpacing: '0.28em',
                                    color: 'rgba(166,134,31,0.7)',
                                    marginTop: '1px',
                                }}
                            >
                                Est. 1981 &nbsp;·&nbsp; Wedding Accessories
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-7 lg:gap-9">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative group font-sans transition-colors duration-300"
                                style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    color: pathname === item.href ? '#8B2635' : 'rgba(68,52,48,0.78)',
                                    textDecoration: 'none',
                                    letterSpacing: '0.01em',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = '#8B2635' }}
                                onMouseLeave={e => { e.currentTarget.style.color = pathname === item.href ? '#8B2635' : 'rgba(68,52,48,0.78)' }}
                            >
                                {item.name}
                                <span
                                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full"
                                    style={{
                                        width: pathname === item.href ? '100%' : '0%',
                                        backgroundColor: '#D4AF37',
                                    }}
                                />
                            </Link>
                        ))}

                        {/* Inquiry Cart Icon */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="relative p-2 rounded-lg transition-all duration-300"
                            aria-label="View inquiry cart"
                            style={{ color: 'rgba(68,52,48,0.6)' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#8B2635' }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(68,52,48,0.6)' }}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <AnimatePresence>
                                {cart.length > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-1 -right-1 flex items-center justify-center rounded-full font-sans font-bold"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                            fontSize: '9px',
                                            backgroundColor: '#8B2635',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        {cart.length}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/917020708747"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl font-sans font-semibold text-sm transition-all duration-300"
                            style={{
                                padding: '9px 20px',
                                backgroundColor: '#8B2635',
                                color: '#FFFFFF',
                                boxShadow: '0 2px 12px rgba(139,38,53,0.2)',
                                letterSpacing: '0.01em',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = '#7A1F2D'
                                e.currentTarget.style.transform = 'translateY(-1px)'
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(139,38,53,0.3)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = '#8B2635'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(139,38,53,0.2)'
                            }}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span>Inquire</span>
                        </a>
                    </div>

                    {/* Mobile: Cart + Hamburger */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="relative p-2 rounded-lg transition-colors duration-300"
                            aria-label="View cart"
                            style={{ color: 'rgba(68,52,48,0.7)' }}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cart.length > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 flex items-center justify-center rounded-full font-bold"
                                    style={{ width: '16px', height: '16px', fontSize: '8px', backgroundColor: '#8B2635', color: '#FFFFFF' }}
                                >
                                    {cart.length}
                                </span>
                            )}
                        </button>

                        <button
                            type="button"
                            className="p-2 rounded-lg transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                            style={{ color: 'rgba(68,52,48,0.75)' }}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <MobileNav
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                navigation={navigation}
            />
        </header>
    )
}
