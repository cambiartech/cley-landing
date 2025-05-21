import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SalarySection from "@/components/SalarySection";
import FeaturesSection from "@/components/FeaturesSection";
import TypedTextSection from '@/components/TypedTextSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SalarySection />
      <FeaturesSection />
      <TypedTextSection />
      <Footer />
    </main>
  );
}
