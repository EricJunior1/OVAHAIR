'use client';

import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/lib/mock-data';

export function ProductGrid() {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, mockProducts.length));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Signature Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hand-selected premium human hair wigs crafted for the modern woman who demands perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {mockProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts < mockProducts.length && (
          <div className="text-center">
            <Button 
              onClick={loadMore}
              variant="outline" 
              size="lg"
              className="hover-lift"
            >
              Load More Styles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}