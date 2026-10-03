import { useState } from 'react';
import { faqs, faqCategories } from '@/data/faq';
import { Plus, Minus } from 'lucide-react';

export function FAQAccordion({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = limit
    ? faqs.slice(0, limit)
    : activeCategory === 'All'
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <div>
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
          <button
            onClick={() => { setActiveCategory('All'); setOpenIndex(null); }}
            className={`text-[10px] uppercase tracking-nav font-body font-medium transition-colors duration-300 relative pb-1.5 ${
              activeCategory === 'All' ? 'text-gold' : 'text-ink-muted hover:text-ink'
            }`}
          >
            All
            <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${activeCategory === 'All' ? 'w-full' : 'w-0'}`} />
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`text-[10px] uppercase tracking-nav font-body font-medium transition-colors duration-300 relative pb-1.5 ${
                activeCategory === cat ? 'text-gold' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {cat}
              <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${activeCategory === cat ? 'w-full' : 'w-0'}`} />
            </button>
          ))}
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        {filtered.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={`${faq.category}-${faq.question}`} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              >
                <span className={`font-display text-lg md:text-xl pr-4 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-ink group-hover:text-gold'}`}>
                  {faq.question}
                </span>
                <span className="shrink-0 text-gold">
                  {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-elegant ${
                  isOpen ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <p className="pb-6 text-[14px] text-ink-muted leading-[1.8] font-body font-light pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
