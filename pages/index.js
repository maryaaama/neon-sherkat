import HeroSection from '@/components/herosection';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CardTree from '@/components/cardTree';
import ServicesSection from '@/components/ServicesSection';
import AboutUs from '@/components/aboutUs';
export default function Home() {
  return (
    <> 
      <Navbar/>
     
      <HeroSection />
      <ServicesSection/>
      <Projects />
      
      <AboutUs/>
      <Contact />
      
      <Footer/>
    </>
  )
}
