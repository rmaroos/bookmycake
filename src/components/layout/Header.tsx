import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, site, waLink } from '@/data/site';
import { Logo } from './Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-elegant ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-border'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[68px] md:h-[76px]' : 'h-[78px] md:h-[96px]'}`}>
            {/* Desktop: logo left */}
            <Link to="/" className="hidden md:block" aria-label={site.name}>
              <Logo showText={false} />
              <span className="font-display text-xl tracking-[0.15em] uppercase text-ink leading-none block mt-1">
                Maison Sucré
              </span>
            </Link>

            {/* Mobile: logo center */}
            <Link to="/" className="md:hidden flex flex-col items-center" aria-label={site.name}>
              <span className="text-gold text-sm leading-none">✦</span>
              <span className="font-display text-base tracking-[0.12em] uppercase text-ink leading-none mt-0.5">
                Maison Sucré
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[10px] uppercase tracking-nav font-body font-medium transition-colors duration-300 relative group ${
                      isActive ? 'text-gold' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
              <a
                href={waLink('Hi, I would like to enquire about a cake.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-nav font-body font-medium bg-gold text-white px-5 py-2.5 hover:bg-gold-dark transition-colors duration-300"
              >
                Inquiry
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-ink p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-center justify-between px-5 h-[78px] border-b border-border">
            <span className="font-display text-base tracking-[0.12em] uppercase text-ink">Maison Sucré</span>
            <button className="text-ink p-1" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-nav font-body transition-colors ${
                    isActive ? 'text-gold' : 'text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col items-center gap-3 pb-12 px-8">
            <a
              href={waLink('Hi, I would like to enquire about a cake.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-[11px] uppercase tracking-nav font-body font-medium bg-gold text-white px-6 py-3"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="w-full text-center text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-6 py-3"
            >
              Make an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
