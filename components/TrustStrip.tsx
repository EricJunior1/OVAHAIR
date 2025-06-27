import { Shield, Truck, RotateCcw, Star, Clock, Users } from 'lucide-react';

export function TrustStrip() {
  const features = [
    {
      icon: Star,
      text: '4.9★ Reviews',
      subtext: '2,847 reviews'
    },
    {
      icon: RotateCcw,
      text: '30-Day Returns',
      subtext: 'No questions asked'
    },
    {
      icon: Truck,
      text: 'Free Shipping',
      subtext: 'Orders over $150'
    },
    {
      icon: Shield,
      text: 'Secure Checkout',
      subtext: 'SSL encrypted'
    },
    {
      icon: Clock,
      text: '24/7 Support',
      subtext: 'Expert stylists'
    },
    {
      icon: Users,
      text: '18,593+ Customers',
      subtext: 'Worldwide'
    }
  ];

  return (
    <section className="py-8 bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center space-x-3 text-center lg:text-left">
                <div className="bg-[#ff6a6a]/10 p-2 rounded-full">
                  <Icon className="w-4 h-4 text-[#ff6a6a]" />
                </div>
                <div className="hidden lg:block">
                  <div className="font-semibold text-sm">{feature.text}</div>
                  <div className="text-xs text-gray-600">{feature.subtext}</div>
                </div>
                <div className="lg:hidden">
                  <div className="font-semibold text-xs">{feature.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}