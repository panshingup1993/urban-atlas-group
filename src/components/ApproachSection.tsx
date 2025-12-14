const approaches = [
  {
    step: '01',
    title: 'Understand the Vision',
    description: 'We begin with deep immersion into your development goals, target demographics, and investment thesis. Understanding intent before execution.',
  },
  {
    step: '02',
    title: 'Simulate Lifestyle & Movement',
    description: 'We model how people will inhabit, navigate, and experience your spaces. From daily routines to seasonal patterns—bringing the future to life.',
  },
  {
    step: '03',
    title: 'Create Investor-Ready Narratives',
    description: 'We deliver compelling visual stories that communicate value, reduce uncertainty, and accelerate capital commitment.',
  },
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs tracking-widest uppercase text-primary-foreground/60">
            Approach
          </span>
          <h2 className="mt-6 text-headline font-serif">
            From vision to conviction.
          </h2>
        </div>

        {/* Approach Steps */}
        <div className="space-y-0">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 gap-8 py-12 border-t border-primary-foreground/20 first:border-t-0"
            >
              <div className="md:col-span-2">
                <span className="font-serif text-4xl text-primary-foreground/40">
                  {approach.step}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl lg:text-3xl">
                  {approach.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-primary-foreground/70 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
