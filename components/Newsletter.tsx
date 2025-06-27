'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Gift } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#ff6a6a] to-[#ff9a9a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Join the Glam Squad
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get exclusive access to new arrivals, styling tips, and member-only discounts. 
              Plus, get 10% off your first order!
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-black placeholder-gray-500 border-0 flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-black text-white hover:bg-gray-800 px-8 font-semibold"
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Get 10% Off
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-lg font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>Welcome to the squad! Check your email for your discount code.</span>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>18,593+ members</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Exclusive deals</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Styling tips</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}