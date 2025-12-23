'use client'

import Link from 'next/link'

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    disabled = false,
    className = '',
    ...props
}) {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-350 disabled:opacity-50 disabled:cursor-not-allowed'

    // Variant styles
    const variants = {
        primary: 'bg-maroon-600 text-white hover:bg-maroon-700 active:bg-maroon-800',
        secondary: 'bg-transparent text-maroon-600 border border-maroon-300 hover:bg-maroon-50 hover:border-maroon-400',
        ghost: 'bg-transparent text-warm-700 hover:text-maroon-600 hover:bg-warm-100',
    }

    // Size styles
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-base',
    }

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    // External link
    if (href && external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedStyles}
                {...props}
            >
                {children}
            </a>
        )
    }

    // Internal link
    if (href) {
        return (
            <Link href={href} className={combinedStyles} {...props}>
                {children}
            </Link>
        )
    }

    // Button
    return (
        <button
            disabled={disabled}
            className={combinedStyles}
            {...props}
        >
            {children}
        </button>
    )
}

