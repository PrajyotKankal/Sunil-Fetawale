/**
 * Design System Theme
 * Quiet Luxury Indian Wedding Aesthetic
 * 
 * Usage: Import tokens for JS-based styling or animations
 */

// Color Usage Guidelines
export const colors = {
    primary: {
        main: '#8B2635',      // maroon-500
        light: '#D67A7A',     // maroon-400
        dark: '#56141E',      // maroon-800
        subtle: '#FAEAEA',    // maroon-100
    },
    accent: {
        main: '#D4AF37',      // gold-500
        light: '#EFD080',     // gold-400
        dark: '#A6861F',      // gold-700
        subtle: '#FDF6E3',    // gold-100
    },
    surface: {
        main: '#E8D5C4',      // ivory-500
        light: '#FAF4EB',     // ivory-200
        lighter: '#FEFDFB',   // ivory-50
        dark: '#D4BCA8',      // ivory-600
    },
    neutral: {
        text: '#292524',      // warm-800
        textLight: '#57534E', // warm-600
        textSubtle: '#78716C',// warm-500
        border: '#E7E5E4',    // warm-200
        background: '#FAFAF9',// warm-50
    },
}

// Typography Rules
export const typography = {
    fontFamily: {
        heading: 'Cormorant Garamond, Georgia, serif',
        display: 'Playfair Display, Georgia, serif',
        body: 'Inter, system-ui, sans-serif',
    },

    scale: {
        // Display - Hero sections
        hero: {
            size: '4.5rem',      // 72px
            lineHeight: '1.05',
            letterSpacing: '-0.04em',
            fontFamily: 'display',
        },

        // Headings
        h1: {
            size: '3rem',        // 48px
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            fontFamily: 'heading',
        },
        h2: {
            size: '2.25rem',     // 36px
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
            fontFamily: 'heading',
        },
        h3: {
            size: '1.875rem',    // 30px
            lineHeight: '1.4',
            letterSpacing: '-0.02em',
            fontFamily: 'heading',
        },
        h4: {
            size: '1.5rem',      // 24px
            lineHeight: '1.5',
            letterSpacing: '-0.01em',
            fontFamily: 'heading',
        },

        // Body text
        large: {
            size: '1.125rem',    // 18px
            lineHeight: '1.7',
            letterSpacing: '0',
            fontFamily: 'body',
        },
        base: {
            size: '1rem',        // 16px
            lineHeight: '1.7',
            letterSpacing: '0.005em',
            fontFamily: 'body',
        },
        small: {
            size: '0.875rem',    // 14px
            lineHeight: '1.6',
            letterSpacing: '0.01em',
            fontFamily: 'body',
        },
    },

    // Usage guidelines
    usage: {
        hero: 'Hero sections only - max 1 per page',
        h1: 'Page titles - 1 per page',
        h2: 'Major sections',
        h3: 'Subsections',
        h4: 'Component titles, card headers',
        large: 'Intro paragraphs, featured content',
        base: 'Body copy, descriptions',
        small: 'Captions, metadata, product codes',
    },
}

// Spacing System - Editorial generosity
export const spacing = {
    // Component spacing
    component: {
        xs: '0.5rem',    // 8px
        sm: '1rem',      // 16px
        md: '1.5rem',    // 24px
        lg: '2rem',      // 32px
        xl: '3rem',      // 48px
        '2xl': '4rem',   // 64px
        '3xl': '6rem',   // 96px
    },

    // Section spacing - generous for editorial feel
    section: {
        sm: '4rem',      // 64px - mobile
        md: '6rem',      // 96px - tablet
        lg: '8rem',      // 128px - desktop
        xl: '10rem',     // 160px - large screens
    },

    // Container padding
    container: {
        mobile: '1.5rem',    // 24px
        tablet: '2rem',      // 32px
        desktop: '3rem',     // 48px
    },

    // Grid gaps
    grid: {
        tight: '1rem',       // 16px
        normal: '1.5rem',    // 24px
        relaxed: '2rem',     // 32px
        loose: '3rem',       // 48px
    },
}

// Animation Presets - Subtle only
export const animation = {
    // Durations
    duration: {
        instant: '150ms',
        fast: '250ms',
        normal: '350ms',
        slow: '450ms',
    },

    // Easing
    easing: {
        elegant: 'cubic-bezier(0.4, 0, 0.2, 1)',
        elegantIn: 'cubic-bezier(0.4, 0, 1, 1)',
        elegantOut: 'cubic-bezier(0, 0, 0.2, 1)',
    },

    // Presets
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    fadeUp: {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
}

// Button Styles
export const buttons = {
    primary: {
        bg: colors.primary.main,
        text: '#FFFFFF',
        hover: colors.primary.dark,
        shadow: 'soft-sm',
    },
    secondary: {
        bg: colors.surface.main,
        text: colors.neutral.text,
        hover: colors.surface.dark,
        shadow: 'soft-xs',
    },
    ghost: {
        bg: 'transparent',
        text: colors.primary.main,
        hover: colors.primary.subtle,
        shadow: 'none',
    },
    whatsapp: {
        bg: '#25D366',
        text: '#FFFFFF',
        hover: '#1EAE54',
        shadow: 'soft-sm',
    },
}

// Card Styles
export const cards = {
    product: {
        bg: '#FFFFFF',
        border: colors.neutral.border,
        shadow: 'soft',
        hoverShadow: 'soft-md',
        radius: 'lg',
    },
    featured: {
        bg: colors.surface.lighter,
        border: 'none',
        shadow: 'soft-lg',
        hoverShadow: 'soft-xl',
        radius: 'xl',
    },
}

// Layout Rules
export const layout = {
    maxWidth: {
        text: '65ch',           // Optimal reading width
        container: '1400px',    // Max content width
        narrow: '640px',        // Forms, narrow content
        wide: '1024px',         // Default sections
    },

    grid: {
        products: {
            mobile: '1fr',
            tablet: 'repeat(2, 1fr)',
            desktop: 'repeat(3, 1fr)',
            large: 'repeat(4, 1fr)',
        },
        featured: {
            mobile: '1fr',
            tablet: 'repeat(2, 1fr)',
            desktop: 'repeat(2, 1fr)',
        },
    },
}

