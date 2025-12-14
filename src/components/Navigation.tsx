import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Approach', href: '#approach' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl tracking-tight text-foreground">
            Visionscape
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="luxury-link text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-8 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl text-foreground hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
