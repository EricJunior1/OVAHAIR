import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, BookText as TikTok, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ff6a6a] to-[#ff9a9a] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-bold text-xl">OVA HAIR</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Luxury human hair wigs crafted for the modern woman. Transform your look with confidence.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <TikTok className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {['New Arrivals', 'Best Sellers', 'Lace Front Wigs', 'Full Lace Wigs', 'Closure Wigs', 'Bundles'].map((link) => (
                <Link key={link} href="#" className="block text-gray-400 hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              {['Size Guide', 'Care Instructions', 'Installation Videos', 'Returns & Exchanges', 'Track Your Order', 'Contact Us'].map((link) => (
                <Link key={link} href="#" className="block text-gray-400 hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Get exclusive deals, styling tips, and be the first to know about new arrivals.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
              />
              <Button className="w-full bg-[#ff6a6a] hover:bg-[#ff5555] text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              ✨ 18,593 glam girls have joined our community
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 OVA HAIR. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Shipping Info</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}