import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { waLink } from '@/data/site';

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="flex border-t border-border bg-white/95 backdrop-blur-sm">
        <a
          href={waLink('Hi, I would like to enquire about a cake.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[11px] uppercase tracking-nav font-body font-medium text-ink border-r border-border"
        >
          <MessageCircle size={15} strokeWidth={1.5} className="text-gold" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center py-3.5 text-[11px] uppercase tracking-nav font-body font-medium bg-gold text-white"
        >
          Make Inquiry
        </Link>
      </div>
    </div>
  );
}
