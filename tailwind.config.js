/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - warm, elegant Indian wedding tones
        ivory: {
          50: '#FEFDFB',
          100: '#FDF9F5',
          200: '#FAF4EB',
          300: '#F5EBE0',
          400: '#EFE2D5',
          500: '#E8D5C4', // Main ivory
          600: '#D4BCA8',
          700: '#BFA38C',
          800: '#A68970',
          900: '#8B7159',
        },
        maroon: {
          50: '#FDF5F5',
          100: '#FAEAEA',
          200: '#F3D0D0',
          300: '#E5A5A5',
          400: '#D67A7A',
          500: '#8B2635', // Main maroon - deep, sophisticated
          600: '#7A1F2D',
          700: '#681925',
          800: '#56141E',
          900: '#440F17',
        },
        gold: {
          50: '#FEFBF3',
          100: '#FDF6E3',
          200: '#FAEDCC',
          300: '#F6E0A6',
          400: '#EFD080',
          500: '#D4AF37', // Main gold - soft, muted
          600: '#BF9B2A',
          700: '#A6861F',
          800: '#8A7017',
          900: '#6E5910',
        },
        // Neutrals - warm grays for text and backgrounds
        warm: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      fontFamily: {
        // Serif for headings - editorial feel
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        // Sans-serif for body - clean, readable
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Display for hero/special moments
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        // Generous editorial type scale
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
      },
      spacing: {
        // Generous spacing for editorial layout
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '52': '13rem',
        '60': '15rem',
        '68': '17rem',
        '76': '19rem',
        '84': '21rem',
        '92': '23rem',
        '100': '25rem',
      },
      maxWidth: {
        // Content width constraints
        'prose': '65ch',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1400px',
      },
      borderRadius: {
        // Subtle, refined corners
        'sm': '0.25rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        // Subtle, soft shadows
        'soft-xs': '0 1px 2px 0 rgba(139, 38, 53, 0.03)',
        'soft-sm': '0 2px 4px 0 rgba(139, 38, 53, 0.04), 0 1px 2px 0 rgba(139, 38, 53, 0.03)',
        'soft': '0 4px 8px 0 rgba(139, 38, 53, 0.05), 0 2px 4px 0 rgba(139, 38, 53, 0.04)',
        'soft-md': '0 6px 12px 0 rgba(139, 38, 53, 0.06), 0 2px 4px 0 rgba(139, 38, 53, 0.04)',
        'soft-lg': '0 10px 20px 0 rgba(139, 38, 53, 0.07), 0 4px 8px 0 rgba(139, 38, 53, 0.05)',
        'soft-xl': '0 16px 32px 0 rgba(139, 38, 53, 0.08), 0 4px 8px 0 rgba(139, 38, 53, 0.05)',
      },
      transitionDuration: {
        // Subtle, refined transitions
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
      },
      transitionTimingFunction: {
        // Elegant easing
        'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elegant-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'elegant-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        // Subtle, refined animations only
        'fade-in': 'fadeIn 0.4s ease-elegant',
        'fade-up': 'fadeUp 0.5s ease-elegant',
        'scale-in': 'scaleIn 0.3s ease-elegant',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
