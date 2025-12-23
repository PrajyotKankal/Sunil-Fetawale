import Hero from '@/components/home/Hero'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import CustomOrders from '@/components/home/CustomOrders'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import AboutPreview from '@/components/home/AboutPreview'

// Homepage uses default metadata from layout.js

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedCategories />
            <CustomOrders />
            <FeaturedProducts />
            <AboutPreview />
        </>
    )
}

