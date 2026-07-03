import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Quote from '@/components/sections/Quote';
import Trust from '@/components/sections/Trust';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <Portfolio />
      <Quote />
      <Trust />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </main>
  );
}
