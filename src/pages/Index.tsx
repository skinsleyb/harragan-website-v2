import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedClients from "@/components/TrustedClients";
import Legacy from "@/components/Legacy";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <TrustedClients />
    <Legacy />
    <Stats />
    <Services />
    <Partners />
    <RecentProjects />
    <Testimonials />
    <BlogSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
