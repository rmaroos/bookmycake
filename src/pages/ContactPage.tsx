import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { InquiryForm } from '@/components/contact/InquiryForm';
import { Reveal, useReveal } from '@/components/ui/Reveal';
import { site, waLink } from '@/data/site';

export function ContactPage() {
  useReveal();

  return (
    <div className="pt-[78px] md:pt-[96px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-ivory text-center">
        <div className="max-w-prose mx-auto px-5">
          <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Get In Touch</p>
          <h1 className="font-display font-normal text-5xl md:text-6xl text-ink leading-[1.05]">Let's Create Your Cake</h1>
          <p className="mt-6 text-[15px] md:text-[16px] text-ink-muted leading-[1.8] font-body font-light">
            Tell us what you're celebrating and we'll help you plan the perfect cake.
            Fill out the inquiry form or reach us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact details */}
            <Reveal>
              <div>
                <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Contact Information</p>
                <h2 className="font-display font-normal text-3xl md:text-4xl text-ink leading-[1.15] mb-8">
                  Let's Create<br />Something Sweet
                </h2>

                <div className="space-y-6">
                  <a href={waLink('Hi, I would like to enquire about a cake.')} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                      <MessageCircle size={16} strokeWidth={1.5} className="text-gold" />
                    </span>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-1">WhatsApp</h3>
                      <p className="text-[14px] text-ink-muted font-body font-light">Fastest way to reach us</p>
                      <p className="text-[13px] text-gold font-body font-light mt-0.5">{site.phone}</p>
                    </div>
                  </a>

                  <a href={`tel:${site.phone}`} className="flex items-start gap-4 group">
                    <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                      <Phone size={16} strokeWidth={1.5} className="text-gold" />
                    </span>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-1">Phone</h3>
                      <p className="text-[14px] text-ink-muted font-body font-light">Direct conversation</p>
                      <p className="text-[13px] text-gold font-body font-light mt-0.5">{site.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${site.email}`} className="flex items-start gap-4 group">
                    <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                      <Mail size={16} strokeWidth={1.5} className="text-gold" />
                    </span>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-1">Email</h3>
                      <p className="text-[14px] text-ink-muted font-body font-light">For detailed inquiries</p>
                      <p className="text-[13px] text-gold font-body font-light mt-0.5">{site.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center">
                      <MapPin size={16} strokeWidth={1.5} className="text-gold" />
                    </span>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-1">Location</h3>
                      <p className="text-[14px] text-ink-muted font-body font-light">{site.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center">
                      <Clock size={16} strokeWidth={1.5} className="text-gold" />
                    </span>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-1">Opening Hours</h3>
                      {site.hours.map((h) => (
                        <p key={h.day} className="text-[13px] text-ink-muted font-body font-light">
                          <span className="text-ink">{h.day}:</span> {h.time}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center">
                      <Instagram size={16} strokeWidth={1.5} className="text-gold" />
                    </span>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-1">Follow Us</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[13px] text-ink-muted hover:text-gold transition-colors font-body font-light flex items-center gap-1.5">
                          <Instagram size={14} strokeWidth={1.5} /> Instagram
                        </a>
                        <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[13px] text-ink-muted hover:text-gold transition-colors font-body font-light flex items-center gap-1.5">
                          <Facebook size={14} strokeWidth={1.5} /> Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100}>
              <div>
                <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Inquiry Form</p>
                <h2 className="font-display font-normal text-3xl md:text-4xl text-ink leading-[1.15] mb-8">
                  Tell Us About<br />Your Celebration
                </h2>
                <InquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ivory">
        <div className="max-w-editorial mx-auto px-5 md:px-8 py-16">
          <div className="text-center mb-8">
            <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-3">Visit Our Studio</p>
            <h2 className="font-display font-normal text-3xl md:text-4xl text-ink">Find Us Here</h2>
          </div>
          <div className="overflow-hidden border border-border">
            <iframe
              src={site.mapEmbed}
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maison Sucré location map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
