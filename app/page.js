import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import WhatsAppStrip from '@/components/home/WhatsAppStrip'
import Testimonials from '@/components/home/Testimonials'
import CustomOrders from '@/components/home/CustomOrders'
import AboutPreview from '@/components/home/AboutPreview'

// Homepage uses default metadata from layout.js

export default function Home() {
    return (
        <>
            {/* 1. Hero — first impression */}
            <Hero />

            {/* 2. Products — show them immediately */}
            <FeaturedProducts />

            {/* 3. Categories — help browse by type */}
            <FeaturedCategories />

            {/* 4. WhatsApp CTA — convert visitors to customers */}
            <WhatsAppStrip />

            {/* 5. Testimonials — build trust */}
            <Testimonials />

            {/* 6. How it works — explain the process */}
            <CustomOrders />

            {/* 7. About — brand story and legacy */}
            <AboutPreview />
        </>
    )
}
