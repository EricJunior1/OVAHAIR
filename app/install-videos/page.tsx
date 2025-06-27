'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, Clock, User, Search, Filter, Star } from 'lucide-react';
import Image from 'next/image';

const installVideos = [
  {
    id: 1,
    title: 'HD Lace Front Installation - Beginner Friendly',
    duration: '12:34',
    difficulty: 'Beginner',
    views: '2.1M',
    rating: 4.9,
    thumbnail: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Maya Johnson',
    description: 'Step-by-step guide to installing your first HD lace front wig with professional results.',
    tags: ['HD Lace', 'Beginner', 'Lace Front']
  },
  {
    id: 2,
    title: 'Lace Melting Techniques for Natural Hairline',
    duration: '8:45',
    difficulty: 'Intermediate',
    views: '1.8M',
    rating: 4.8,
    thumbnail: 'https://images.pexels.com/photos/3992652/pexels-photo-3992652.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Zara Williams',
    description: 'Master the art of melting lace for an undetectable, natural-looking hairline.',
    tags: ['Lace Melting', 'Advanced', 'Hairline']
  },
  {
    id: 3,
    title: 'Quick 5-Minute Wig Install for Busy Mornings',
    duration: '5:12',
    difficulty: 'Beginner',
    views: '3.2M',
    rating: 4.7,
    thumbnail: 'https://images.pexels.com/photos/3992651/pexels-photo-3992651.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Ava Chen',
    description: 'Perfect for busy schedules - achieve a flawless look in just 5 minutes.',
    tags: ['Quick Install', 'Time-Saving', 'Beginner']
  },
  {
    id: 4,
    title: 'Curly Wig Styling and Maintenance',
    duration: '15:20',
    difficulty: 'Intermediate',
    views: '1.5M',
    rating: 4.9,
    thumbnail: 'https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Keisha Davis',
    description: 'Learn how to style and maintain your curly wigs for long-lasting beauty.',
    tags: ['Curly Hair', 'Styling', 'Maintenance']
  },
  {
    id: 5,
    title: 'Color Customization: Tinting Your Lace',
    duration: '10:30',
    difficulty: 'Advanced',
    views: '987K',
    rating: 4.8,
    thumbnail: 'https://images.pexels.com/photos/3992654/pexels-photo-3992654.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Sophia Martinez',
    description: 'Advanced technique for customizing lace color to match your skin tone perfectly.',
    tags: ['Color Matching', 'Advanced', 'Customization']
  },
  {
    id: 6,
    title: 'Wig Care Routine: Washing and Storage',
    duration: '9:15',
    difficulty: 'Beginner',
    views: '2.3M',
    rating: 4.6,
    thumbnail: 'https://images.pexels.com/photos/3992648/pexels-photo-3992648.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Luna Rodriguez',
    description: 'Essential care routine to keep your wigs looking fresh and lasting longer.',
    tags: ['Wig Care', 'Maintenance', 'Beginner']
  }
];

export default function InstallVideosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categories = ['All', 'Installation', 'Styling', 'Maintenance', 'Advanced Techniques'];

  const filteredVideos = installVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || video.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Installation Videos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Master the art of wig installation with our step-by-step video tutorials. 
            From beginner basics to advanced techniques.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-2 border rounded-lg bg-white"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border rounded-lg bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Video */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Tutorial</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src={installVideos[0].thumbnail}
                  alt={installVideos[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-black hover:bg-white rounded-full w-16 h-16">
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-[#ff6a6a] text-white">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{installVideos[0].title}</h3>
                    <p className="text-gray-600">{installVideos[0].description}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{installVideos[0].duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{installVideos[0].instructor}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{installVideos[0].rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {installVideos[0].tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-[#ff6a6a] hover:bg-[#ff5555] text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Video Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Tutorials</h2>
            <Badge variant="secondary">{filteredVideos.length} videos</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover-lift cursor-pointer group">
                <div className="relative aspect-video bg-gray-100">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Button 
                      size="sm" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-black hover:bg-white rounded-full w-12 h-12"
                    >
                      <Play className="w-4 h-4 ml-0.5" />
                    </Button>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className={`text-xs ${
                      video.difficulty === 'Beginner' ? 'bg-green-500' :
                      video.difficulty === 'Intermediate' ? 'bg-yellow-500' :
                      'bg-red-500'
                    } text-white`}>
                      {video.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-[#ff6a6a] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{video.instructor}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{video.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {video.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-[#ff6a6a] to-[#ff9a9a] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Personal Help?</h2>
          <p className="text-xl opacity-90 mb-6">
            Book a 1-on-1 virtual consultation with our expert stylists for personalized guidance.
          </p>
          <Button className="bg-white text-[#ff6a6a] hover:bg-gray-100 font-semibold">
            Book Consultation
          </Button>
        </section>
      </div>
    </div>
  );
}