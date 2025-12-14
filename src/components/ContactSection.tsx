import { ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <span className="text-xs tracking-widest uppercase text-primary-foreground/60">
              Contact
            </span>
            <h2 className="mt-6 text-headline font-serif">
              Ready to see the future?
            </h2>
            <p className="mt-8 text-primary-foreground/70 leading-relaxed max-w-md">
              We work with select developers and investors on projects 
              where visualization can make a decisive difference.
            </p>
          </div>

          {/* Right Column - CTA */}
          <div className="flex items-center">
            <a 
              href="mailto:contact@visionscape.com"
              className="group inline-flex items-center gap-4"
            >
              <span className="font-serif text-3xl lg:text-4xl border-b border-primary-foreground/30 pb-2 group-hover:border-primary-foreground transition-colors">
                Begin a conversation
              </span>
              <ArrowRight 
                size={28} 
                className="transform group-hover:translate-x-2 transition-transform" 
              />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="font-serif text-2xl">Visionscape</div>
            <div className="flex flex-wrap gap-8 text-sm text-primary-foreground/60">
              <span>London</span>
              <span>Dubai</span>
              <span>Singapore</span>
              <span>New York</span>
            </div>
            <div className="text-sm text-primary-foreground/40">
              © 2024 Visionscape. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
