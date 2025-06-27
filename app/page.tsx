import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { ProductGrid } from '@/components/ProductGrid';
import { UGCCarousel } from '@/components/UGCCarousel';
import { FAQ } from '@/components/FAQ';
import { Newsletter } from '@/components/Newsletter';
import { ExitIntentModal } from '@/components/ExitIntentModal';
import { ChatBubble } from '@/components/ChatBubble';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductGrid />
      <UGCCarousel />
      <FAQ />
      <Newsletter />
      <ExitIntentModal />
      <ChatBubble />
    </>
  );
}