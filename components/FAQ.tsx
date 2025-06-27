'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What lace types do you offer?',
    answer: 'We offer HD lace, Swiss lace, and French lace options. HD lace provides the most natural, undetectable hairline, while Swiss lace offers durability and breathability. French lace is perfect for beginners with its forgiving application process.'
  },
  {
    question: 'How do I choose the right density?',
    answer: 'We recommend 130% density for a natural everyday look, 150% for fuller volume, and 180% for maximum glamour. Consider your lifestyle and styling preferences - lighter densities are more comfortable for daily wear, while higher densities create more dramatic looks.'
  },
  {
    question: 'How do I measure my head for the perfect fit?',
    answer: 'Measure around your hairline from ear to ear across your forehead, then from your hairline to the nape of your neck. Most of our wigs are adjustable and fit head sizes 21.5-23 inches. We also offer custom sizing for the perfect fit.'
  },
  {
    question: 'How long do your wigs last with proper care?',
    answer: 'With proper care, our human hair wigs can last 12-18 months or longer. This includes gentle washing every 7-10 wears, using sulfate-free products, sleeping with a silk cap, and storing on a wig stand when not in use.'
  },
  {
    question: 'Can I style the wig with heat tools?',
    answer: 'Yes! Our human hair wigs can be styled with heat tools up to 400°F. Always use a heat protectant spray and start with lower temperatures. You can curl, straighten, and even color our wigs (we recommend professional coloring for best results).'
  },
  {
    question: 'What is your return and exchange policy?',
    answer: 'We offer a 30-day return policy for unworn, unaltered wigs in original packaging. If you\'re not completely satisfied, contact us within 30 days for a full refund or exchange. Custom wigs are final sale unless there\'s a manufacturing defect.'
  },
  {
    question: 'Do you offer installation services?',
    answer: 'While we don\'t offer direct installation, we have a network of certified stylists nationwide. We also provide detailed video tutorials and 24/7 support to help you achieve a perfect install at home.'
  },
  {
    question: 'How do I care for my new wig?',
    answer: 'Wash every 7-10 wears with sulfate-free shampoo, condition the mid-lengths to ends, and air dry when possible. Sleep with a silk cap or on a silk pillowcase, and store on a wig stand. Avoid sleeping in your wig and minimize heat styling.'
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about choosing and caring for your perfect wig.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-[#ff6a6a]/50"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-[#ff6a6a] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}