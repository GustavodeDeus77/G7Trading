import { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      <HeroSection />
      <DifferentialsSection />
      <PortfolioSection />
      <PartnershipsSection />
      <Footer />
    </div>
  );
}

export default App;
