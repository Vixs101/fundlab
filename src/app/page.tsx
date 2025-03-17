import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features';
import CampaignSection from '@/components/campaign';
import AboutSection from '@/components/about';

export default function Home() {
  return (
    <main className="bg-[url('/assets/Campaign.jpg')] bg-cover bg-center min-h-screen">
        <HeroSection/>
        <FeaturesSection/>
        <CampaignSection/>
        <AboutSection/>
    </main>
  );
}
