import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { navLinks, site, waLink } from '@/data/site';
import { categories } from '@/data/categories';

export function Footer() {
  return (
    <footer className="bg-ivory border-t border-border">
      <div className="max-w-editorial mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-4">
              <span className="text-gold text-lg leading-none mb-1">✦</span>
              <span className="font-display text-xl tracking-[0.15em] uppercase text-ink leading-none">
                Maison Sucré
              </span>
            </div>
            <p className="text-[13px] text-ink-muted leading-[1.8] font-body font-light max-w-xs">
              Handcrafted cakes created with care for birthdays, weddings, and every celebration worth remembering.
            </p>
            <div className="flex items-center gap-4 mt-5 justify-center md:justify-start">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink-muted hover:text-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink-muted hover:text-gold transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href={waLink('Hi, I would like to enquire about a cake.')} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-ink-muted hover:text-gold transition-colors text-sm font-body tracking-wide">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="text-center md:text-left">
            <h3 className="text-[11px] uppercase tracking-nav text-ink font-body font-medium mb-5">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-ink-muted hover:text-gold transition-colors font-body font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cakes */}
          <div className="text-center md:text-left">
            <h3 className="text-[11px] uppercase tracking-nav text-ink font-body font-medium mb-5">Cakes</h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link to="/cakes" className="text-[13px] text-ink-muted hover:text-gold transition-colors font-body font-light">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-[11px] uppercase tracking-nav text-ink font-body font-medium mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2.5 text-[13px] text-ink-muted font-body font-light">
                <Phone size={14} strokeWidth={1.5} className="text-gold shrink-0" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5 text-[13px] text-ink-muted font-body font-light">
                <Mail size={14} strokeWidth={1.5} className="text-gold shrink-0" />
                <span>{site.email}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5 text-[13px] text-ink-muted font-body font-light">
                <MapPin size={14} strokeWidth={1.5} className="text-gold shrink-0" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-ink-light font-body tracking-wide">
            © 2026 Maison Sucré. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-[11px] text-ink-light font-body tracking-wide hover:text-gold transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-[11px] text-ink-light font-body tracking-wide hover:text-gold transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
