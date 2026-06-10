import Hero from '../../components/Hero'
import ServicesSection from '../../components/ServiceSection'
import AboutUs from '../../components/AboutUs'
import TestimonialSection from '../../components/TestimonialSection'
import GoogleMaps from '../../components/GoogleMaps'

export default function AboutUsPage() {
    return (
        <>
            <Hero/>
            <ServicesSection/>
            <AboutUs/>
            <div className="my-8">
                <GoogleMaps height="350px" />
            </div>
            <TestimonialSection/>
        </>
    )
}
