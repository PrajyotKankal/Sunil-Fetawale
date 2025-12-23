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
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
