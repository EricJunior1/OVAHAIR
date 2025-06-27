'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#ff6a6a]/10 text-[#ff6a6a] border-[#ff6a6a]/20 hover:bg-[#ff6a6a]/20">
                <Sparkles className="w-3 h-3 mr-1" />
                New Collection
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
                Your Hair,
                <br />
                <span className="text-gradient">Perfected</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md leading-relaxed">
                Luxury human hair wigs that look, feel, and move like your natural hair. Trusted by 18,593+ women worldwide.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9 out of 5 stars</span>
              <span className="text-sm text-gray-500">(2,847 reviews)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#ff6a6a] hover:bg-[#ff5555] text-white px-8 py-6 text-lg font-semibold hover-lift"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold hover-lift"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Install
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-[#ff6a6a]">100%</div>
                <div className="text-sm text-gray-600">Human Hair</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#ff6a6a]">30 Day</div>
                <div className="text-sm text-gray-600">Returns</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#ff6a6a]">Free</div>
                <div className="text-sm text-gray-600">Shipping $150+</div>
              </div>
            </div>
          </div>

          {/* Video/Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-gray-100">
              {isVideoLoaded ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  <Image
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Beautiful woman with luxury wig"
                    fill
                    className="object-cover"
                    priority
                  />
                </video>
              ) : (
                <Image
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beautiful woman with luxury wig"
                  fill
                  className="object-cover blur-up loaded"
                  priority
                />
              )}
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-2xl">✨</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4">
              <div className="text-sm font-medium">18,593 happy customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}