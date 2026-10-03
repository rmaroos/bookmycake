export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqCategories = ['Ordering', 'Cake', 'Dietary', 'Delivery', 'Storage'];

export const faqs: FAQItem[] = [
  {
    category: 'Ordering',
    question: 'How far in advance should I order?',
    answer:
      'We recommend placing your order at least 3–5 days in advance for standard cakes and 2–4 weeks for custom and wedding cakes. This ensures we have ample time to source ingredients and create your cake with the care it deserves.',
  },
  {
    category: 'Ordering',
    question: 'How do I place an order?',
    answer:
      'You can place an order by submitting an inquiry through our contact form, sending us a WhatsApp message, or calling us directly. We will discuss your requirements, confirm the design, and arrange all the details with you.',
  },
  {
    category: 'Ordering',
    question: 'Can I make a last-minute order?',
    answer:
      'We do our best to accommodate last-minute requests depending on our schedule. Please contact us directly via WhatsApp or phone, and we will let you know if we can fulfil your order in time.',
  },
  {
    category: 'Ordering',
    question: 'Can I change my order after confirming?',
    answer:
      'Small changes can be made up to 48 hours before your event date. For larger modifications, please contact us as early as possible and we will do our best to accommodate.',
  },
  {
    category: 'Cake',
    question: 'What flavours are available?',
    answer:
      'We offer a range of flavours including vanilla, chocolate, red velvet, strawberry, caramel, pistachio, lemon, almond, mocha, and hazelnut. Custom flavour combinations are also available upon request.',
  },
  {
    category: 'Cake',
    question: 'What sizes are available?',
    answer:
      'Our cakes come in 6-inch, 8-inch, and 10-inch rounds, as well as two-tier, three-tier, and four-tier options. Serving sizes vary by design — we will help you choose the right size based on your guest count.',
  },
  {
    category: 'Cake',
    question: 'Can I customize the design?',
    answer:
      'Absolutely. Custom designs are our specialty. Share your theme, colours, inspiration, or reference images and we will create a cake designed specifically for your celebration.',
  },
  {
    category: 'Cake',
    question: 'Can I provide a reference image?',
    answer:
      'Yes, we welcome reference images. They help us understand your vision. We will use them as inspiration and create a cake with our own craftsmanship and quality.',
  },
  {
    category: 'Cake',
    question: 'Can I add a message on the cake?',
    answer:
      'Of course. We can add a name, birthday message, anniversary note, or any short text to your cake. Just let us know the wording when you place your order.',
  },
  {
    category: 'Dietary',
    question: 'Do you make eggless cakes?',
    answer:
      'Yes, we offer eggless cake options. Please let us know your dietary requirements when placing your order so we can prepare accordingly.',
  },
  {
    category: 'Dietary',
    question: 'Do you offer allergy-friendly options?',
    answer:
      'We can accommodate certain dietary needs including gluten-free and nut-free options. Please discuss your requirements with us so we can advise on the best options for you.',
  },
  {
    category: 'Dietary',
    question: 'Are there vegetarian options?',
    answer:
      'Yes, all our eggless cakes are vegetarian. We also use vegetarian-friendly ingredients across most of our range.',
  },
  {
    category: 'Delivery',
    question: 'Do you offer delivery?',
    answer:
      'Yes, we offer delivery within Colombo and surrounding areas. Delivery fees vary based on location. Please ask about delivery when placing your order.',
  },
  {
    category: 'Delivery',
    question: 'What areas do you deliver to?',
    answer:
      'We deliver across Colombo and neighbouring suburbs. For locations outside our standard area, please contact us and we will do our best to arrange delivery.',
  },
  {
    category: 'Delivery',
    question: 'What is the delivery fee?',
    answer:
      'Delivery fees depend on the distance and are quoted at the time of ordering. Pickup from our studio is always free.',
  },
  {
    category: 'Delivery',
    question: 'Can I pick up my cake?',
    answer:
      'Yes, pickup is available from our studio in Colombo 07. We will provide pickup details and care instructions when your order is ready.',
  },
  {
    category: 'Storage',
    question: 'How should I store the cake?',
    answer:
      'Keep your cake in a cool, dry place away from direct sunlight. Refrigerate if it contains fresh fruit or cream, and bring it to room temperature 30 minutes before serving for the best flavour.',
  },
  {
    category: 'Storage',
    question: 'How long does the cake stay fresh?',
    answer:
      'Our cakes are best enjoyed within 2–3 days of pickup. Cakes with fresh fruit or dairy-based fillings should be consumed within 1–2 days and stored in the refrigerator.',
  },
];
