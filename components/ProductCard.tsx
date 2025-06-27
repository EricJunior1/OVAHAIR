'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import type { Product } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover-lift border-0 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
          <Image
            src={product.images[currentImageIndex]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Hover overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onMouseEnter={() => {
              // Cycle through images on hover
              const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
              }, 800);
              setTimeout(() => clearInterval(interval), 2400);
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center space-x-2">
              <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                <Eye className="w-4 h-4 mr-1" />
                Quick View
              </Button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.isNew && (
              <Badge className="bg-[#ff6a6a] text-white">New</Badge>
            )}
            {product.discount && (
              <Badge variant="secondary">{product.discount}% Off</Badge>
            )}
          </div>

          {/* Wishlist */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white"
            onClick={handleWishlist}
          >
            <Heart 
              className={cn(
                'w-4 h-4 transition-all duration-200',
                isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600'
              )} 
            />
          </Button>

          {/* Restock countdown (if applicable) */}
          {product.restockTime && (
            <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
              Restock in {product.restockTime}
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-[#ff6a6a] transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      'w-3 h-3',
                      i < Math.floor(product.rating) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    )} 
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <div className="flex space-x-1 mb-3">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: color }}
                  title={`Color ${index + 1}`}
                />
              ))}
              {product.colors.length > 4 && (
                <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center text-xs font-medium">
                  +{product.colors.length - 4}
                </div>
              )}
            </div>

            <Button 
              className="w-full bg-[#ff6a6a] hover:bg-[#ff5555] text-white font-semibold"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                // Handle add to cart
              }}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}