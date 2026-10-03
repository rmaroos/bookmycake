import { useState, type FormEvent } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { site, waLink } from '@/data/site';

type FormState = {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  cakeType: string;
  flavour: string;
  cakeSize: string;
  theme: string;
  colours: string;
  message: string;
  delivery: string;
  notes: string;
};

const initialForm: FormState = {
  name: '', phone: '', whatsapp: '', email: '',
  eventType: '', eventDate: '', guests: '',
  cakeType: '', flavour: '', cakeSize: '',
  theme: '', colours: '', message: '',
  delivery: 'pickup', notes: '',
};

const eventTypes = ['Birthday', 'Wedding', 'Anniversary', 'Engagement', 'Baby Shower', 'Graduation', 'Corporate', 'Other'];
const cakeTypes = ['Birthday Cake', 'Wedding Cake', 'Custom Cake', 'Kids Cake', 'Anniversary Cake', 'Celebration Cake', 'Cupcakes & Treats'];
const flavours = ['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry', 'Caramel', 'Pistachio', 'Lemon', 'Almond', 'Mocha', 'Hazelnut'];
const sizes = ['6 inch', '8 inch', '10 inch', 'Two Tier', 'Three Tier', 'Four Tier'];

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    if (!form.eventDate) e.eventDate = 'Please select an event date.';
    if (!form.cakeType) e.cakeType = 'Please select a cake type.';
    if (!form.message.trim()) e.message = 'Please describe the cake you need.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border p-10 md:p-14 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6">
          <Check size={26} strokeWidth={1.5} className="text-gold" />
        </div>
        <h3 className="font-display text-3xl text-ink mb-3">Thank You</h3>
        <p className="text-[14px] text-ink-muted font-body font-light leading-[1.8] max-w-md mx-auto">
          We've received your cake inquiry. We'll contact you shortly to discuss your cake details.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href={waLink('Hi, I just submitted a cake inquiry on your website.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-nav font-body font-medium bg-gold text-white px-6 py-3.5 hover:bg-gold-dark transition-colors duration-300"
          >
            <MessageCircle size={15} strokeWidth={1.5} />
            WhatsApp Us
          </a>
          <button
            onClick={() => { setForm(initialForm); setSubmitted(false); }}
            className="text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-6 py-3.5 hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  const inputClass = (key: keyof FormState) =>
    `w-full border-b ${errors[key] ? 'border-red-400' : 'border-border'} bg-transparent py-3 text-[14px] text-ink font-body font-light placeholder:text-ink-light focus:outline-none focus:border-gold transition-colors duration-300`;

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border p-8 md:p-10 space-y-7">
      {/* Customer details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Full Name *</label>
          <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass('name')} placeholder="Your name" />
          {errors.name && <p className="text-[11px] text-red-400 mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Phone Number *</label>
          <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass('phone')} placeholder="Your phone number" />
          {errors.phone && <p className="text-[11px] text-red-400 mt-1.5">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">WhatsApp Number</label>
          <input type="tel" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} className={inputClass('whatsapp')} placeholder="WhatsApp number" />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Email</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass('email')} placeholder="Your email" />
        </div>
      </div>

      {/* Event details */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Event Type</label>
          <select value={form.eventType} onChange={(e) => update('eventType', e.target.value)} className={inputClass('eventType')}>
            <option value="">Select type</option>
            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Event Date *</label>
          <input type="date" value={form.eventDate} onChange={(e) => update('eventDate', e.target.value)} className={inputClass('eventDate')} />
          {errors.eventDate && <p className="text-[11px] text-red-400 mt-1.5">{errors.eventDate}</p>}
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Number of Guests</label>
          <input type="number" value={form.guests} onChange={(e) => update('guests', e.target.value)} className={inputClass('guests')} placeholder="Approx. guests" min="1" />
        </div>
      </div>

      {/* Cake details */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Cake Type *</label>
          <select value={form.cakeType} onChange={(e) => update('cakeType', e.target.value)} className={inputClass('cakeType')}>
            <option value="">Select cake type</option>
            {cakeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.cakeType && <p className="text-[11px] text-red-400 mt-1.5">{errors.cakeType}</p>}
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Preferred Flavour</label>
          <select value={form.flavour} onChange={(e) => update('flavour', e.target.value)} className={inputClass('flavour')}>
            <option value="">Select flavour</option>
            {flavours.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Cake Size</label>
          <select value={form.cakeSize} onChange={(e) => update('cakeSize', e.target.value)} className={inputClass('cakeSize')}>
            <option value="">Select size</option>
            {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Theme / Design</label>
          <input type="text" value={form.theme} onChange={(e) => update('theme', e.target.value)} className={inputClass('theme')} placeholder="e.g. Floral, Princess, Rustic" />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Colours</label>
          <input type="text" value={form.colours} onChange={(e) => update('colours', e.target.value)} className={inputClass('colours')} placeholder="e.g. Pink & gold" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Tell Us About Your Cake *</label>
        <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={3} className={inputClass('message')} placeholder="Describe the cake you have in mind..." />
        {errors.message && <p className="text-[11px] text-red-400 mt-1.5">{errors.message}</p>}
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-1">Additional Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={2} className={inputClass('notes')} placeholder="Any special requests, dietary needs, reference image links, etc." />
      </div>

      {/* Delivery */}
      <div>
        <label className="block text-[10px] uppercase tracking-nav text-ink-light font-body mb-2">Delivery Preference</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer text-[13px] text-ink-muted font-body font-light">
            <input type="radio" name="delivery" value="pickup" checked={form.delivery === 'pickup'} onChange={(e) => update('delivery', e.target.value)} className="accent-gold" />
            Pickup
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-[13px] text-ink-muted font-body font-light">
            <input type="radio" name="delivery" value="delivery" checked={form.delivery === 'delivery'} onChange={(e) => update('delivery', e.target.value)} className="accent-gold" />
            Delivery
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full text-[11px] uppercase tracking-nav font-body font-medium bg-gold text-white px-8 py-4 hover:bg-gold-dark transition-colors duration-300"
      >
        Send Cake Inquiry
      </button>

      <p className="text-[11px] text-ink-light font-body font-light text-center">
        We'll get back to you within 24 hours. For urgent inquiries, WhatsApp us at {site.phone}
      </p>
    </form>
  );
}
