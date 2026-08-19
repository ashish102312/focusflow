import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { RandomLetterSwap } from './ui/random-letter-swap';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'How it works', href: '#how-it-works' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-surface/80 backdrop-blur-md border-border'
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-xl display-serif text-foreground">
                FocusFlow
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="label-mono text-base text-muted-foreground hover:text-foreground transition-all duration-300 inline-block hover:scale-110"
              >
                <RandomLetterSwap label={link.name} />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#product"
              className="inline-flex items-center justify-center bg-foreground text-background px-4 py-2 label-mono hover:text-background hover:bg-foreground/90 transition-colors group border border-foreground"
            >
              Start planning
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-primary/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="label-mono text-xl font-medium text-foreground py-4 border-b border-border hover:bg-surface-hover px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <RandomLetterSwap label={link.name} />
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="#product"
                  className="inline-flex w-full items-center justify-center bg-foreground text-background px-4 py-3 label-mono hover:bg-foreground/90 transition-colors border border-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start planning →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
