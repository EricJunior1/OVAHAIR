'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { StickyBar } from '@/components/StickyBar';
import { Heart, Share2, Star, ShoppingBag, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = mockProducts.find(p => p.id === params.handle);
  
  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely love this wig! The quality is amazing and it looks so natural. Worth every penny!',
      verified: true
    },
    {
      id: 2,
      name: 'Jessica L.',
      rating: 5,
      date: '1 week ago',
      comment: 'This is my third wig from OVA HAIR and they never disappoint. The lace melts perfectly!',
      verified: true
    },
    {
      id: 3,
      name: 'Maya K.',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Beautiful wig, great quality. Installation was easier than expected. Highly recommend!',
      verified: true
    }
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] relative bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  {product.discount}% Off
                </Badge>
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    'aspect-square relative bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors',
                    selectedImage === index ? 'border-[#ff6a6a]' : 'border-transparent hover:border-gray-300'
                  )}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        'w-4 h-4',
                        i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      )} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <Badge variant="destructive">Save ${product.originalPrice! - product.price}</Badge>
                )}
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <h3 className="font-semibold">Color Options</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={cn(
                      'w-8 h-8 rounded-full border-2 transition-all',
                      selectedColor === index ? 'border-[#ff6a6a] scale-110' : 'border-gray-300 hover:border-gray-400'
                    )}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(index)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button 
                  className="flex-1 bg-[#ff6a6a] hover:bg-[#ff5555] text-white font-semibold py-3"
                  size="lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={cn('w-5 h-5', isWishlisted && 'fill-red-500 text-red-500')} />
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <Button variant="outline" className="w-full" size="lg">
                Buy Now - Fast Checkout
              </Button>
            </div>

            {/* Delivery Check */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Check Delivery Availability</h3>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter ZIP code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                  <Button variant="outline">Check</Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-1 text-green-600" />
                <div className="text-xs font-medium">Free Shipping</div>
                <div className="text-xs text-gray-500">Orders $150+</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                <div className="text-xs font-medium">30-Day Returns</div>
                <div className="text-xs text-gray-500">No questions</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-1 text-purple-600" />
                <div className="text-xs font-medium">Secure Payment</div>
                <div className="text-xs text-gray-500">SSL encrypted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#ff6a6a] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="washing">
                  <AccordionTrigger>How to Wash Your Wig</AccordionTrigger>
                  <AccordionContent>
                    Wash your wig every 7-10 wears using sulfate-free shampoo. Gently detangle before washing, use cool water, and avoid rubbing the hair. Apply conditioner from mid-length to ends, avoiding the lace area.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="styling">
                  <AccordionTrigger>Styling Guidelines</AccordionTrigger>
                  <AccordionContent>
                    Always use heat protectant when styling with heat tools. Keep temperatures below 400°F. For curling, use flexi rods or low-heat curling irons. Avoid over-manipulation to maintain the hair's integrity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="storage">
                  <AccordionTrigger>Proper Storage</AccordionTrigger>
                  <AccordionContent>
                    Store your wig on a wig stand or mannequin head to maintain its shape. Keep it in a cool, dry place away from direct sunlight. Cover with a silk or satin scarf to prevent tangling.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{review.name}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={cn(
                                      'w-3 h-3',
                                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                    )} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <StickyBar product={product} />
    </>
  );
}