import { ArrowRight } from 'lucide-react';

const sectors = [
  {
    title: 'Residential Development',
    description: 'Visualizing how communities will live, connect, and thrive within residential environments.',
  },
  {
    title: 'Mixed-Use & Masterplans',
    description: 'Simulating the interplay of commercial, residential, and public spaces at scale.',
  },
  {
    title: 'Hospitality & Resort Living',
    description: 'Capturing the essence of guest experience and lifestyle before the first stone is laid.',
  },
  {
    title: 'Urban Futures',
    description: 'Envisioning how cities evolve, move, and adapt to changing human needs.',
  },
];

export const SectorsSection = () => {
  return (
    <section id="sectors" className="section-padding">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Sectors
          </span>
          <h2 className="mt-6 text-headline font-serif text-foreground">
            Where vision meets investment.
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-background p-8 lg:p-12 group cursor-pointer transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {sector.description}
                  </p>
                </div>
                <ArrowRight 
                  size={24} 
                  className="text-muted-foreground/0 group-hover:text-foreground transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0 mt-2" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
