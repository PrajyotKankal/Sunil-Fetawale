export default function manifest() {
    return {
        name: 'Sunil Fetawale',
        short_name: 'Sunil Fetawale',
        description: 'Premium Wedding Wear & Accessories',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#7f1d1d',
        icons: [
            {
                src: '/logo-512.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any maskable',
            },
            {
                src: '/logo-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
        ],
    }
}
