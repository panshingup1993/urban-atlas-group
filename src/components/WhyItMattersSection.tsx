const benefits = [
  {
    title: 'Faster Capital Attraction',
    description: 'Clear visualization reduces investor hesitation and accelerates funding timelines.',
  },
  {
    title: 'Clearer Investment Storytelling',
    description: 'Transform complex developments into compelling narratives that resonate with stakeholders.',
  },
  {
    title: 'Stronger Emotional Conviction',
    description: 'When investors can see the future, they commit with greater confidence and speed.',
  },
];

export const WhyItMattersSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Why It Matters
          </span>
          <h2 className="mt-6 text-headline font-serif text-foreground">
            The value of seeing clearly.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="luxury-divider mb-6"></div>
              <h3 className="font-serif text-2xl text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
