import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  { num: '01', title: 'Tell Us Your Idea', desc: 'Send your requirements, event date and inspiration through our inquiry form or WhatsApp.' },
  { num: '02', title: 'Plan Your Cake', desc: 'We discuss flavour, size, design and customization to bring your vision to life.' },
  { num: '03', title: 'We Create It', desc: 'Your cake is freshly prepared and carefully decorated with attention to every detail.' },
  { num: '04', title: 'Collect Or Receive', desc: 'Pick up your cake from our studio or have it delivered to your celebration.' },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From Your Idea To Your Cake"
            description="A simple, personal process that turns your celebration into something beautiful."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mt-16">
          {steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 100}>
              <div className={`px-6 md:px-8 py-8 md:py-10 ${idx < steps.length - 1 ? 'lg:border-r border-border' : ''} ${idx % 2 === 0 ? 'md:border-r border-border' : ''} ${idx < steps.length - 2 ? 'lg:border-b-0' : 'border-b lg:border-b-0'} border-border text-center md:text-left`}>
                <span className="font-display text-4xl md:text-5xl text-gold/50 leading-none block mb-5">{step.num}</span>
                <span className="block w-10 h-px bg-gold/40 mb-5 mx-auto md:mx-0" />
                <h3 className="font-display text-xl text-ink mb-3">{step.title}</h3>
                <p className="text-[13px] text-ink-muted font-body font-light leading-[1.7]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
