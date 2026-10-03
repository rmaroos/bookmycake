import { Link } from 'react-router-dom';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

export function FAQPreview() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Good To Know"
            description="Here are some of the most common questions we receive. For more, visit our full FAQ page."
          />
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <FAQAccordion limit={6} />
          </div>
        </Reveal>

        <div className="text-center mt-12">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-nav text-gold font-body font-medium hover:gap-3 transition-all duration-300"
          >
            View All FAQs <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
