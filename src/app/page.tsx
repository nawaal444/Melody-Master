import '@/components/Hero'
import HeroSection from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialCards from '@/components/TestimonialCards';
export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    </main>
    </>
  );
}