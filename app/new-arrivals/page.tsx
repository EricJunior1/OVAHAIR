'use client';

import { ProductCard } from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Clock, TrendingUp } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';

export default function NewArrivalsPage() {
  const newProducts = mockProducts.filter(product => product.isNew);
  const recentProducts = mockProducts.slice(0, 8);

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-[#ff6a6a]/10 text-[#ff6a6a] border-[#ff6a6a]/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Fresh Arrivals
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            New In
            <br />
            <span className="text-gradient">This Week</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Be the first to discover our latest luxury wigs. From trending textures to must-have colors, 
            these fresh arrivals are already creating buzz in our community.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Added this week</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Trending now</span>
            </div>
          </div>
        </div>

        {/* New Arrivals Grid */}
        {newProducts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Latest Drops</h2>
              <Badge variant="secondary">{newProducts.length} new styles</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Recently Added */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recently Added</h2>
            <Button variant="outline">View All Products</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Coming Soon Teaser */}
        <section className="bg-gradient-to-r from-[#ff6a6a] to-[#ff9a9a] rounded-2xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">More Styles Coming Soon</h2>
            <p className="text-xl opacity-90 mb-6">
              We're constantly adding new styles to our collection. Join our newsletter to be the first 
              to know when new wigs drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#ff6a6a] hover:bg-gray-100 font-semibold">
                Join Newsletter
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Follow on Instagram
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}