export const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="section-padding bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              What We Do
            </span>
            <h2 className="mt-6 text-headline font-serif text-foreground">
              Visualization that builds conviction.
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Before capital commits, confidence must be built. We create strategic 
              visual narratives that translate vision into clarity—showing investors, 
              partners, and stakeholders exactly how future developments will function, 
              feel, and perform.
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Our work bridges the gap between concept and commitment, providing the 
              visual evidence needed to accelerate decisions and align stakeholders 
              around a shared vision of the future.
            </p>
            <div className="pt-4">
              <div className="luxury-divider"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {[
            { number: '15+', label: 'Years of Excellence' },
            { number: '$12B', label: 'Projects Visualized' },
            { number: '40+', label: 'Countries Served' },
            { number: '200+', label: 'Developments Delivered' },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="font-serif text-4xl lg:text-5xl text-foreground">{stat.number}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
