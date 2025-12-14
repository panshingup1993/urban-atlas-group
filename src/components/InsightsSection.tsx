const insights = [
  {
    category: 'Perspective',
    title: 'The Future of Living: How Lifestyle Shapes Development',
    excerpt: 'Understanding shifting residential expectations and their implications for long-term asset value.',
  },
  {
    category: 'Analysis',
    title: 'Urban Experience in the Next Decade',
    excerpt: 'How movement patterns and human behavior will reshape city planning and mixed-use development.',
  },
  {
    category: 'Strategy',
    title: 'Lifestyle-Driven Development: A New Investment Thesis',
    excerpt: 'Why understanding human experience is becoming the cornerstone of successful real estate investment.',
  },
];

export const InsightsSection = () => {
  return (
    <section id="insights" className="section-padding">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Insights
            </span>
            <h2 className="mt-6 text-headline font-serif text-foreground">
              Thought leadership.
            </h2>
          </div>
          <a href="#" className="luxury-link text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            View all insights
          </a>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="bg-background p-8 lg:p-10 group cursor-pointer transition-colors hover:bg-card"
            >
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                {insight.category}
              </span>
              <h3 className="mt-4 font-serif text-xl lg:text-2xl text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
                {insight.title}
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {insight.excerpt}
              </p>
              <div className="mt-6 luxury-divider group-hover:w-24 transition-all duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
