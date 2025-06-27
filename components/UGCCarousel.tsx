'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Heart, MessageCircle, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const ugcContent = [
  {
    id: 1,
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
    user: '@glamgoddess',
    likes: 24500,
    comments: 312,
    caption: 'This lace melt is EVERYTHING! 🔥',
    product: 'Luxury Lace Front - Natural Black'
  },
  {
    id: 2,
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/3992652/pexels-photo-3992652.jpeg?auto=compress&cs=tinysrgb&w=400',
    user: '@beautybabe',
    likes: 18200,
    comments: 89,
    caption: 'Can\'t believe this is a wig! So natural 💫',
    product: 'HD Lace Wig - Honey Blonde'
  },
  {
    id: 3,
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/3992651/pexels-photo-3992651.jpeg?auto=compress&cs=tinysrgb&w=400',
    user: '@wigslay',
    likes: 31200,
    comments: 445,
    caption: 'Install tutorial coming soon! ✨',
    product: 'Body Wave Lace Front - Chocolate Brown'
  },
  {
    id: 4,
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=400',
    user: '@hairqueen',
    likes: 15600,
    comments: 201,
    caption: 'The compliments never stop! 👑',
    product: 'Curly Lace Wig - Natural Brown'
  },
  {
    id: 5,
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/3992648/pexels-photo-3992648.jpeg?auto=compress&cs=tinysrgb&w=400',
    user: '@stylequeen',
    likes: 27800,
    comments: 356,
    caption: 'Before and after transformation! 🔄',
    product: 'Straight Lace Front - Jet Black'
  },
  {
    id: 6,
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/3992654/pexels-photo-3992654.jpeg?auto=compress&cs=tinysrgb&w=400',
    user: '@gorgeous',
    likes: 12400,
    comments: 124,
    caption: 'Quality is unmatched! 💎',
    product: 'Loose Wave Wig - Caramel Highlights'
  }
];

export function UGCCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ugcContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ugcContent.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ugcContent.length) % ugcContent.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Real Results, Real Women
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our customers transform their look with OVA HAIR wigs. Join 18,593+ happy customers.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {ugcContent.map((content) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl">
                    {/* Content */}
                    <div className="relative aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden group cursor-pointer">
                      <Image
                        src={content.thumbnail}
                        alt={`UGC content by ${content.user}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {content.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-colors">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                      )}
                      
                      {/* TikTok-style overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-end justify-between">
                          <div className="space-y-2">
                            <Badge className="bg-white/90 text-black">
                              {content.user}
                            </Badge>
                            <p className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                              {content.caption}
                            </p>
                          </div>
                          
                          <div className="flex flex-col space-y-3">
                            <Button size="sm" variant="ghost" className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30">
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{content.product}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          "{content.caption}"
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-5 h-5 text-red-500" />
                          <span className="font-semibold">{content.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-5 h-5 text-blue-500" />
                          <span className="font-semibold">{content.comments}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <Button className="bg-[#ff6a6a] hover:bg-[#ff5555] text-white flex-1">
                          Shop This Look
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {ugcContent.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#ff6a6a]' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}