'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Gift, Sparkles } from 'lucide-react';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email capture
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-0 p-0 overflow-hidden">
        <div className="relative bg-gradient-to-br from-[#ff6a6a] to-[#ff9a9a] text-white p-8">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-white/20 p-4 rounded-full">
                <Gift className="w-8 h-8" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Wait! Don't Leave Empty-Handed</h2>
              <p className="opacity-90">
                Get 10% off your first order and join 18,593+ women who've transformed their look with OVA HAIR.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email for 10% off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black placeholder-gray-500 border-0"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-gray-800 font-semibold"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Claim My 10% Discount
              </Button>
            </form>

            <div className="text-xs opacity-75">
              * Discount valid for 24 hours. First-time customers only.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}