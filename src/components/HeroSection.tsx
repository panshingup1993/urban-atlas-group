import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          {/* Main Headline */}
          <h1 className="text-display font-serif text-foreground opacity-0 animate-fade-up">
            We help investors and developers see the future before it is built.
          </h1>
          
          {/* Divider */}
          <div className="my-12 luxury-divider opacity-0 animate-line-expand animation-delay-300 origin-left"></div>
          
          {/* Subheadline */}
          <p className="text-subheadline text-muted-foreground max-w-3xl opacity-0 animate-fade-up animation-delay-400">
            Strategic visualization of lifestyle, movement and human experience 
            for real estate and urban development projects.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <a 
          href="#what-we-do" 
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase mb-3">Explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
