export const categories = [
  { name: 'All', icon: 'Grid3X3' },
  { name: 'Shoes', icon: '👟' },
  { name: "Men's", icon: '👔' },
  { name: 'Watches', icon: '⌚' },
  { name: 'Electronics', icon: '🎧' }
];

export const products = [
  {
    id: 1,
    name: 'Wireless Headphone',
    price: 70.0,
    originalPrice: 100.0,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop'
    ],
    colors: [
      { name: 'Gray', value: '#808080' },
      { name: 'Pink', value: '#FFB6C1' },
      { name: 'Orange', value: '#FFA500' },
      { name: 'Blue', value: '#87CEEB' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 124,
    description:
      'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    features: ['Noise Cancellation', '30h Battery', 'Bluetooth 5.0', 'Premium Sound'],
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 55.0,
    originalPrice: 80.0,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop'
    ],
    colors: [
      { name: 'Pink', value: '#FFB6C1' },
      { name: 'Red', value: '#FF6B6B' },
      { name: 'Orange', value: '#FFA500' },
      { name: 'Blue', value: '#87CEEB' }
    ],
    sizes: ['38mm', '42mm', '44mm'],
    rating: 4.6,
    reviews: 89,
    description:
      'Feature-rich smartwatch with health monitoring, GPS, and water resistance. Stay connected and track your fitness.',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    category: 'Watches'
  },
  {
    id: 3,
    name: 'Black T-Shirt',
    price: 25.0,
    originalPrice: 35.0,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4c16?w=400&h=400&fit=crop'
    ],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Navy', value: '#1f2937' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.4,
    reviews: 67,
    description:
      'Classic cotton t-shirt with premium fit and comfort. Essential wardrobe piece for everyday wear.',
    features: ['100% Cotton', 'Pre-shrunk', 'Comfortable Fit', 'Machine Washable'],
    category: "Men's"
  },
  {
    id: 4,
    name: 'Over-Ear Headphones',
    price: 85.0,
    originalPrice: 120.0,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    ],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Silver', value: '#C0C0C0' }
    ],
    sizes: ['One Size'],
    rating: 4.9,
    reviews: 203,
    description:
      'Professional-grade over-ear headphones with studio-quality sound and exceptional comfort for long listening sessions.',
    features: ['Studio Quality', 'Comfortable Padding', 'Detachable Cable', 'Foldable Design'],
    category: 'Electronics'
  }
];

export const userProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
};
