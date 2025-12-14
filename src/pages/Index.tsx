import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { SectorsSection } from '@/components/SectorsSection';
import { ApproachSection } from '@/components/ApproachSection';
import { WhyItMattersSection } from '@/components/WhyItMattersSection';
import { InsightsSection } from '@/components/InsightsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <SectorsSection />
        <ApproachSection />
        <WhyItMattersSection />
        <InsightsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
