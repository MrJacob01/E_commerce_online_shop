import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Users, 
  Package, 
  Eye, 
  ShoppingCart, 
  TrendingUp, 
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  AlertTriangle,
  DollarSign,
  BarChart3,
  Menu,
  Bell,
  Settings,
  Moon,
  Sun,
  ChevronDown,
  Star,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [animatedValues, setAnimatedValues] = useState({});

  // Mock data with enhanced properties
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'AirPods Pro Max', 
      category: 'Electronics', 
      price: 549.99, 
      stock: 45, 
      views: 2341, 
      sales: 127, 
      status: 'active',
      trend: 'up',
      rating: 4.8,
      image: '🎧'
    },
    { 
      id: 2, 
      name: 'Nike Air Max 270', 
      category: 'Sports', 
      price: 150.00, 
      stock: 23, 
      views: 5674, 
      sales: 340, 
      status: 'active',
      trend: 'up',
      rating: 4.6,
      image: '👟'
    },
    { 
      id: 3, 
      name: 'Breville Barista Express', 
      category: 'Home', 
      price: 699.99, 
      stock: 5, 
      views: 1234, 
      sales: 89, 
      status: 'low_stock',
      trend: 'down',
      rating: 4.9,
      image: '☕'
    },
    { 
      id: 4, 
      name: 'Lululemon Yoga Mat', 
      category: 'Sports', 
      price: 68.00, 
      stock: 67, 
      views: 892, 
      sales: 156, 
      status: 'active',
      trend: 'up',
      rating: 4.7,
      image: '🧘'
    }
  ]);

  const [categories] = useState([
    { id: 1, name: 'Electronics', products: 124, revenue: 89420, growth: 12.4, color: 'from-blue-400 to-purple-500' },
    { id: 2, name: 'Sports', products: 87, revenue: 54280, growth: 8.7, color: 'from-green-400 to-blue-500' },
    { id: 3, name: 'Home', products: 156, revenue: 72150, growth: -2.3, color: 'from-orange-400 to-red-500' },
    { id: 4, name: 'Fashion', products: 203, revenue: 125670, growth: 15.8, color: 'from-pink-400 to-purple-500' }
  ]);

  const [users] = useState([
    { id: 1, name: 'Alex Rodriguez', email: 'alex@techstartup.io', orders: 15, totalSpent: 2459.95, lastActive: '2 min ago', avatar: '👨‍💻', tier: 'VIP' },
    { id: 2, name: 'Sarah Chen', email: 'sarah@designstudio.com', orders: 28, totalSpent: 5249.50, lastActive: '1 hour ago', avatar: '👩‍🎨', tier: 'VIP' },
    { id: 3, name: 'Marcus Johnson', email: 'marcus@fitness.co', orders: 7, totalSpent: 889.97, lastActive: '3 hours ago', avatar: '🏋️‍♂️', tier: 'Premium' }
  ]);

  const stats = {
    totalRevenue: 247853.90,
    totalOrders: 1549,
    totalProducts: products.length,
    totalViews: products.reduce((sum, p) => sum + p.views, 0),
    lowStockItems: products.filter(p => p.stock < 10).length,
    conversionRate: 3.24,
    avgOrderValue: 159.95,
    customerSatisfaction: 4.8
  };

  // Animated counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        revenue: stats.totalRevenue,
        orders: stats.totalOrders,
        views: stats.totalViews
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const AnimatedNumber = ({ value, prefix = '', suffix = '' }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      const increment = value / 50;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 20);
      return () => clearInterval(timer);
    }, [value]);

    return <span>{prefix}{displayValue.toLocaleString()}{suffix}</span>;
  };

  const GlassCard = ({ children, className = '', hover = true }) => (
    <div className={`
      backdrop-blur-xl bg-white/10 dark:bg-black/20 
      border border-white/20 dark:border-white/10 
      rounded-2xl shadow-2xl
      ${hover ? 'hover:bg-white/20 dark:hover:bg-black/30 hover:scale-[1.02]' : ''}
      transition-all duration-300 ease-out
      ${className}
    `}>
      {children}
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <DollarSign className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex items-center text-emerald-400 text-sm font-medium">
                <ArrowUp className="w-4 h-4 mr-1" />
                +23.5%
              </div>
            </div>
            <p className="text-white/60 text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold text-white mt-1">
              $<AnimatedNumber value={Math.floor(stats.totalRevenue)} />
            </p>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <ShoppingCart className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex items-center text-blue-400 text-sm font-medium">
                <ArrowUp className="w-4 h-4 mr-1" />
                +18.2%
              </div>
            </div>
            <p className="text-white/60 text-sm font-medium">Total Orders</p>
            <p className="text-3xl font-bold text-white mt-1">
              <AnimatedNumber value={stats.totalOrders} />
            </p>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex items-center text-purple-400 text-sm font-medium">
                <ArrowUp className="w-4 h-4 mr-1" />
                +31.7%
              </div>
            </div>
            <p className="text-white/60 text-sm font-medium">Total Views</p>
            <p className="text-3xl font-bold text-white mt-1">
              <AnimatedNumber value={Math.floor(stats.totalViews / 1000)} suffix="K" />
            </p>
          </div>
        </GlassCard>
        
        <GlassCard className="p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex items-center text-orange-400 text-sm font-medium">
                <ArrowUp className="w-4 h-4 mr-1" />
                +12.8%
              </div>
            </div>
            <p className="text-white/60 text-sm font-medium">Conversion Rate</p>
            <p className="text-3xl font-bold text-white mt-1">{stats.conversionRate}%</p>
          </div>
        </GlassCard>
      </div>

      {/* Chart & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 p-8" hover={false}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-white">Revenue Analytics</h3>
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-xl p-1">
                <button className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm font-medium">7D</button>
                <button className="px-4 py-2 text-white/60 text-sm font-medium">30D</button>
                <button className="px-4 py-2 text-white/60 text-sm font-medium">90D</button>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {[65, 85, 45, 95, 75, 55, 90, 70, 80, 60, 100, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500/40 to-purple-500/60 rounded-t-lg transition-all duration-1000 ease-out hover:from-blue-500/60 hover:to-purple-500/80"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6" hover={false}>
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-400" />
            Live Activity
          </h3>
          <div className="space-y-4">
            {[
              { action: 'New order', item: 'AirPods Pro Max', time: '2m ago', type: 'order' },
              { action: 'Stock alert', item: 'Coffee Maker', time: '1h ago', type: 'alert' },
              { action: 'New review', item: 'Yoga Mat', time: '3h ago', type: 'review' },
              { action: 'User signup', item: 'Premium Plan', time: '5h ago', type: 'user' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'order' ? 'bg-green-400' :
                  activity.type === 'alert' ? 'bg-red-400' :
                  activity.type === 'review' ? 'bg-yellow-400' : 'bg-blue-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{activity.action}</p>
                  <p className="text-white/60 text-xs">{activity.item}</p>
                </div>
                <span className="text-white/40 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Product Management</h2>
          <p className="text-white/60 mt-1">Manage your inventory and product catalog</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>

      <GlassCard className="overflow-hidden" hover={false}>
        <div className="p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search products, SKUs, categories..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center text-white font-medium transition-all">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center text-white font-medium transition-all">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center text-2xl mr-4">
                        {product.image}
                      </div>
                      <div>
                        <div className="text-white font-medium">{product.name}</div>
                        <div className="text-white/60 text-sm">{product.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Eye className="w-4 h-4 text-blue-400 mr-1" />
                        <span className="text-white">{product.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ShoppingCart className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-white">{product.sales}</span>
                        {product.trend === 'up' ? 
                          <ArrowUp className="w-3 h-3 text-green-400 ml-1" /> : 
                          <ArrowDown className="w-3 h-3 text-red-400 ml-1" />
                        }
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <span className="text-white font-semibold text-lg">${product.price}</span>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        product.stock > 50 ? 'bg-green-400' : 
                        product.stock > 10 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></div>
                      <span className="text-white font-medium">{product.stock}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'active' 
                        ? 'bg-green-400/20 text-green-300 border border-green-400/30' 
                        : 'bg-red-400/20 text-red-300 border border-red-400/30'
                    }`}>
                      {product.status === 'low_stock' ? 'Low Stock' : 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );

  const renderCategories = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Categories</h2>
          <p className="text-white/60 mt-1">Organize and manage your product categories</p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Plus className="w-4 h-4 mr-2" />
          New Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <GlassCard key={category.id} className="p-6 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`}></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                <div className="flex space-x-2">
                  <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-white/60 text-sm">Products</p>
                  <p className="text-2xl font-bold text-white">{category.products}</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-sm">Revenue</p>
                  <p className="text-lg font-semibold text-white">${category.revenue.toLocaleString()}</p>
                </div>
                
                <div className="flex items-center">
                  <span className="text-white/60 text-sm mr-2">Growth:</span>
                  <div className={`flex items-center ${category.growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {category.growth >= 0 ? 
                      <ArrowUp className="w-3 h-3 mr-1" /> : 
                      <ArrowDown className="w-3 h-3 mr-1" />
                    }
                    <span className="text-sm font-medium">{Math.abs(category.growth)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'categories', label: 'Categories', icon: ShoppingBag },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-40 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-white">Seller Dashboard</h1>
                <p className="text-white/60 text-sm">Welcome back, let's grow your business</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
              
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl relative transition-all duration-300 transform hover:scale-105">
                <Bell className="w-5 h-5 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-105">
                <Settings className="w-5 h-5 text-white" />
              </button>

              <div className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold">
                  J
                </div>
                <span className="text-white font-medium hidden sm:block">John Doe</span>
                <ChevronDown className="w-4 h-4 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Navigation */}
        <nav className="flex space-x-1 mb-8 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white shadow-lg transform scale-105'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Content */}
        <div className="relative">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'products' && renderProducts()}
          {activeTab === 'categories' && renderCategories()}
          {activeTab === 'users' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">User Management</h2>
                  <p className="text-white/60 mt-1">Manage customers and user analytics</p>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl flex items-center font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Download className="w-4 h-4 mr-2" />
                  Export Users
                </button>
              </div>

              <GlassCard className="overflow-hidden" hover={false}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">User</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Tier</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Orders</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Total Spent</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Last Active</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center text-2xl mr-4">
                                {user.avatar}
                              </div>
                              <div>
                                <div className="text-white font-medium">{user.name}</div>
                                <div className="text-white/60 text-sm">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-6 whitespace-nowrap">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              user.tier === 'VIP' 
                                ? 'bg-gold-400/20 text-yellow-300 border border-yellow-400/30' 
                                : 'bg-purple-400/20 text-purple-300 border border-purple-400/30'
                            }`}>
                              {user.tier}
                            </span>
                          </td>
                          <td className="px-6 py-6 whitespace-nowrap text-white font-medium">{user.orders}</td>
                          <td className="px-6 py-6 whitespace-nowrap text-white font-semibold text-lg">${user.totalSpent.toLocaleString()}</td>
                          <td className="px-6 py-6 whitespace-nowrap text-white/60">{user.lastActive}</td>
                          <td className="px-6 py-6 whitespace-nowrap">
                            <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg font-medium transition-colors">
                              View Profile
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Analytics & Insights</h2>
                <p className="text-white/60 mt-1">Deep dive into your business performance</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Performance Metrics */}
                <GlassCard className="p-8" hover={false}>
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Performance Metrics
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Conversion Rate</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold text-lg mr-2">{stats.conversionRate}%</span>
                        <ArrowUp className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{width: `${stats.conversionRate * 10}%`}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Avg. Order Value</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold text-lg mr-2">${stats.avgOrderValue}</span>
                        <ArrowUp className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Customer Satisfaction</span>
                      <div className="flex items-center">
                        <span className="text-white font-bold text-lg mr-2">{stats.customerSatisfaction}</span>
                        <div className="flex">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Top Products */}
                <GlassCard className="p-8" hover={false}>
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-blue-400" />
                    Top Performing Products
                  </h3>
                  <div className="space-y-4">
                    {products.sort((a, b) => b.sales - a.sales).slice(0, 4).map((product, index) => (
                      <div key={product.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg flex items-center justify-center text-lg mr-3">
                            {product.image}
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{product.name}</div>
                            <div className="text-white/60 text-xs">{product.sales} sales</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold">${(product.sales * product.price).toLocaleString()}</div>
                          <div className="text-white/60 text-xs">Revenue</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>

              {/* Revenue Chart */}
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold text-white">Monthly Revenue Trend</h3>
                  <div className="flex bg-white/10 rounded-xl p-1">
                    <button className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm font-medium">Revenue</button>
                    <button className="px-4 py-2 text-white/60 text-sm font-medium hover:text-white">Orders</button>
                    <button className="px-4 py-2 text-white/60 text-sm font-medium hover:text-white">Customers</button>
                  </div>
                </div>
                
                <div className="h-80 flex items-end space-x-3">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => {
                    const heights = [45, 65, 55, 85, 75, 95, 70, 90, 80, 100, 85, 95];
                    return (
                      <div key={month} className="flex-1 flex flex-col items-center group">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-500/40 to-purple-500/60 rounded-t-lg transition-all duration-1000 ease-out hover:from-blue-500/60 hover:to-purple-500/80 relative cursor-pointer"
                          style={{ height: `${heights[i]}%` }}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            ${(20000 + i * 5000).toLocaleString()}
                          </div>
                        </div>
                        <span className="text-white/60 text-xs mt-2">{month}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 z-50">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SellerDashboard;