import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { Reveal, useReveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { waLink } from '@/data/site';

export function FAQPage() {
  useReveal();

  return (
    <div className="pt-[78px] md:pt-[96px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-ivory text-center">
        <div className="max-w-prose mx-auto px-5">
          <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Good To Know</p>
          <h1 className="font-display font-normal text-5xl md:text-6xl text-ink leading-[1.05]">Frequently Asked Questions</h1>
          <p className="mt-6 text-[15px] md:text-[16px] text-ink-muted leading-[1.8] font-body font-light">
            Everything you need to know about ordering, our cakes, dietary options, delivery and storage.
            Can't find what you're looking for? We're happy to help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <Reveal>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-prose mx-auto px-5 text-center">
          <Reveal>
            <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Still Have Questions?</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">
              We're Here To Help
            </h2>
            <p className="mt-6 text-[15px] text-ink-muted leading-[1.8] font-body font-light">
              If you couldn't find the answer you were looking for, don't hesitate to reach out.
              We love hearing from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button href="/contact">Make An Inquiry</Button>
              <Button variant="secondary" href={waLink('Hi, I have a question about your cakes.')}>WhatsApp Us</Button>
            </div>
            <Link
              to="/cakes"
              className="inline-flex items-center gap-2 mt-6 text-[10px] uppercase tracking-nav text-gold font-body font-medium hover:gap-3 transition-all duration-300"
            >
              Browse Our Cakes <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
