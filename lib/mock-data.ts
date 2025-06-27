export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  colors: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  restockTime?: string;
  description: string;
  features: string[];
  specifications: {
    length: string;
    density: string;
    capSize: string;
    hairType: string;
    origin: string;
  };
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Luxury HD Lace Front Wig - Natural Black',
    price: 189,
    originalPrice: 249,
    discount: 24,
    images: [
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992652/pexels-photo-3992652.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992651/pexels-photo-3992651.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#000000', '#1a1a1a', '#2d2d2d'],
    rating: 4.9,
    reviews: 847,
    isNew: true,
    description: 'Our signature HD lace front wig featuring premium virgin human hair with an undetectable hairline.',
    features: ['100% Virgin Human Hair', 'HD Lace Technology', 'Pre-plucked Hairline', 'Bleached Knots'],
    specifications: {
      length: '20 inches',
      density: '150%',
      capSize: 'Average (22.5")',
      hairType: 'Straight',
      origin: 'Brazilian'
    }
  },
  {
    id: '2',
    name: 'Body Wave Lace Front - Honey Blonde',
    price: 229,
    originalPrice: 289,
    discount: 21,
    images: [
      'https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992654/pexels-photo-3992654.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992648/pexels-photo-3992648.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#D4A574', '#E6C294', '#F2D7B3'],
    rating: 4.8,
    reviews: 623,
    description: 'Gorgeous body wave texture in a stunning honey blonde shade that complements all skin tones.',
    features: ['Body Wave Texture', 'Honey Blonde Highlights', 'Swiss Lace', 'Natural Density'],
    specifications: {
      length: '22 inches',
      density: '130%',
      capSize: 'Average (22.5")',
      hairType: 'Body Wave',
      origin: 'Peruvian'
    }
  },
  {
    id: '3',
    name: 'Curly Lace Front Wig - Chocolate Brown',
    price: 199,
    images: [
      'https://images.pexels.com/photos/3992655/pexels-photo-3992655.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992657/pexels-photo-3992657.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992658/pexels-photo-3992658.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#4a3c28', '#6b5b47', '#8b7d6b'],
    rating: 4.7,
    reviews: 456,
    restockTime: '06:00 UTC',
    description: 'Beautiful natural curls in rich chocolate brown for a stunning, voluminous look.',
    features: ['Natural Curl Pattern', 'Rich Chocolate Color', 'Full Lace', 'High Density'],
    specifications: {
      length: '18 inches',
      density: '180%',
      capSize: 'Average (22.5")',
      hairType: 'Curly',
      origin: 'Malaysian'
    }
  },
  {
    id: '4',
    name: 'Straight Lace Front - Jet Black',
    price: 169,
    images: [
      'https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992653/pexels-photo-3992653.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#000000', '#0d0d0d', '#1a1a1a'],
    rating: 4.9,
    reviews: 721,
    description: 'Classic straight style in deep jet black for a sleek, professional look.',
    features: ['Silky Straight Texture', 'Jet Black Color', 'French Lace', 'Natural Hairline'],
    specifications: {
      length: '24 inches',
      density: '150%',
      capSize: 'Average (22.5")',
      hairType: 'Straight',
      origin: 'Indian'
    }
  },
  {
    id: '5',
    name: 'Deep Wave Lace Front - Caramel Highlights',
    price: 249,
    originalPrice: 299,
    discount: 17,
    images: [
      'https://images.pexels.com/photos/3992651/pexels-photo-3992651.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992652/pexels-photo-3992652.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992654/pexels-photo-3992654.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#8B4513', '#A0522D', '#D2691E'],
    rating: 4.8,
    reviews: 389,
    isNew: true,
    description: 'Luxurious deep wave texture with beautiful caramel highlights for dimension.',
    features: ['Deep Wave Pattern', 'Caramel Highlights', 'HD Lace', 'Ombre Effect'],
    specifications: {
      length: '26 inches',
      density: '150%',
      capSize: 'Average (22.5")',
      hairType: 'Deep Wave',
      origin: 'Brazilian'
    }
  },
  {
    id: '6',
    name: 'Bob Lace Front - Platinum Blonde',
    price: 199,
    images: [
      'https://images.pexels.com/photos/3992648/pexels-photo-3992648.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992650/pexels-photo-3992650.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#F5F5DC', '#FFFACD', '#FFF8DC'],
    rating: 4.6,
    reviews: 267,
    description: 'Chic bob cut in stunning platinum blonde for a bold, modern look.',
    features: ['Bob Cut Style', 'Platinum Blonde', 'Swiss Lace', 'Pre-styled'],
    specifications: {
      length: '12 inches',
      density: '130%',
      capSize: 'Average (22.5")',
      hairType: 'Straight',
      origin: 'European'
    }
  },
  {
    id: '7',
    name: 'Loose Wave Wig - Natural Brown',
    price: 179,
    images: [
      'https://images.pexels.com/photos/3992655/pexels-photo-3992655.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992657/pexels-photo-3992657.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#654321', '#8B7355', '#A0826D'],
    rating: 4.7,
    reviews: 512,
    description: 'Soft loose waves in natural brown for effortless, everyday glamour.',
    features: ['Loose Wave Texture', 'Natural Brown', 'Full Lace', 'Versatile Styling'],
    specifications: {
      length: '20 inches',
      density: '140%',
      capSize: 'Average (22.5")',
      hairType: 'Loose Wave',
      origin: 'Peruvian'
    }
  },
  {
    id: '8',
    name: 'Kinky Straight Lace Front - Dark Brown',
    price: 189,
    images: [
      'https://images.pexels.com/photos/3992658/pexels-photo-3992658.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992651/pexels-photo-3992651.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#2F1B14', '#3C2415', '#4A2C17'],
    rating: 4.8,
    reviews: 634,
    description: 'Natural kinky straight texture in rich dark brown for authentic-looking styles.',
    features: ['Kinky Straight Texture', 'Dark Brown Color', 'HD Lace', 'Natural Movement'],
    specifications: {
      length: '22 inches',
      density: '150%',
      capSize: 'Average (22.5")',
      hairType: 'Kinky Straight',
      origin: 'Cambodian'
    }
  },
  {
    id: '9',
    name: 'Water Wave Lace Front - Burgundy',
    price: 219,
    originalPrice: 269,
    discount: 19,
    images: [
      'https://images.pexels.com/photos/3992652/pexels-photo-3992652.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992653/pexels-photo-3992653.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992654/pexels-photo-3992654.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#800020', '#991F36', '#B22222'],
    rating: 4.9,
    reviews: 423,
    isNew: true,
    description: 'Stunning water wave pattern in bold burgundy for a dramatic, eye-catching look.',
    features: ['Water Wave Pattern', 'Burgundy Color', 'Swiss Lace', 'Color-treated'],
    specifications: {
      length: '24 inches',
      density: '160%',
      capSize: 'Average (22.5")',
      hairType: 'Water Wave',
      origin: 'Brazilian'
    }
  },
  {
    id: '10',
    name: 'Pixie Cut Wig - Silver Gray',
    price: 149,
    images: [
      'https://images.pexels.com/photos/3992647/pexels-photo-3992647.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992648/pexels-photo-3992648.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#C0C0C0', '#A9A9A9', '#808080'],
    rating: 4.5,
    reviews: 189,
    description: 'Edgy pixie cut in trendy silver gray for a bold, contemporary statement.',
    features: ['Pixie Cut Style', 'Silver Gray Color', 'Machine Made', 'Low Maintenance'],
    specifications: {
      length: '6 inches',
      density: '120%',
      capSize: 'Average (22.5")',
      hairType: 'Straight',
      origin: 'Synthetic Blend'
    }
  },
  {
    id: '11',
    name: 'Long Straight Wig - Ash Blonde',
    price: 209,
    images: [
      'https://images.pexels.com/photos/3992650/pexels-photo-3992650.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992651/pexels-photo-3992651.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992652/pexels-photo-3992652.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#F5F5DC', '#E6E6FA', '#D3D3D3'],
    rating: 4.7,
    reviews: 356,
    description: 'Extra long straight hair in cool ash blonde for maximum length and elegance.',
    features: ['Extra Long Length', 'Ash Blonde Tone', 'Full Lace', 'Heat Resistant'],
    specifications: {
      length: '30 inches',
      density: '140%',
      capSize: 'Average (22.5")',
      hairType: 'Straight',
      origin: 'Russian'
    }
  },
  {
    id: '12',
    name: 'Afro Kinky Wig - Natural Black',
    price: 199,
    images: [
      'https://images.pexels.com/photos/3992653/pexels-photo-3992653.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992654/pexels-photo-3992654.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3992655/pexels-photo-3992655.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    colors: ['#000000', '#1C1C1C', '#2F2F2F'],
    rating: 4.8,
    reviews: 478,
    description: 'Natural afro kinky texture in deep black for authentic, voluminous styling.',
    features: ['Afro Kinky Texture', 'Natural Black', 'Full Lace', 'High Volume'],
    specifications: {
      length: '16 inches',
      density: '200%',
      capSize: 'Average (22.5")',
      hairType: 'Afro Kinky',
      origin: 'Ethiopian'
    }
  }
];