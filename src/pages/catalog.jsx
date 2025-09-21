import React, { useEffect, useMemo, useState } from 'react';
import HomePage from '../components/HomePage';
import ProductDetailPage from '../components/ProductDetailPage';
import CartPage from '../components/CartPage';
import WishlistPage from '../components/WishlistPage';
import ProfilePage from '../components/ProfilePage';
import BottomNavigation from '../components/BottomNavigation';
import NotFound from '../components/NotFound';
import OrderPage from '../components/OrderPage';
import OrderHistoryPage from '../components/OrderHistoryPage';
import SettingsPage from '../components/SettingsPage';
import NotificationsPage from '../components/NotificationsPage';
import EditProfilePage from '../components/EditProfilePage';
import { categories, products, userProfile } from '../data/ecommerceData';
import { toggleFavorite, addToCart, removeFromCart, updateCartQuantity, getTotalPrice } from '../utils/ecommerceUtils';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState(() => new Set(JSON.parse(localStorage.getItem('favorites') || '[]')));
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // New: filters state
  const [filters, setFilters] = useState({ discountedOnly: false, minPrice: '', maxPrice: '', minRating: '' });

  const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem('profile') || 'null') || userProfile);
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('orders') || '[]'));
  const [settings, setSettings] = useState(() => JSON.parse(localStorage.getItem('settings') || 'null') || { notifications: true, dark: false });
  const [notifications, setNotifications] = useState(() => JSON.parse(localStorage.getItem('notifications') || 'null') || [
    { id: 1, title: 'Welcome', body: 'Thanks for installing the app!', createdAt: Date.now(), read: false }
  ]);

  // Apply dark mode class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (settings.dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [settings.dark]);

  useEffect(() => { localStorage.setItem('favorites', JSON.stringify([...favorites])); }, [favorites]);
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('profile', JSON.stringify(profile)); }, [profile]);
  useEffect(() => { localStorage.setItem('orders', JSON.stringify(orders)); }, [orders]);
  useEffect(() => { localStorage.setItem('settings', JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem('notifications', JSON.stringify(notifications)); }, [notifications]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const minP = filters.minPrice !== '' ? Number(filters.minPrice) : -Infinity;
    const maxP = filters.maxPrice !== '' ? Number(filters.maxPrice) : Infinity;
    const minR = filters.minRating !== '' ? Number(filters.minRating) : -Infinity;

    return products
      .filter((p) => (activeCategory === 'All' ? true : p.category === activeCategory))
      .filter((p) => (term ? p.name.toLowerCase().includes(term) : true))
      .filter((p) => (filters.discountedOnly ? p.originalPrice && p.originalPrice > p.price : true))
      .filter((p) => p.price >= minP && p.price <= maxP)
      .filter((p) => (isFinite(minR) ? p.rating >= minR : true));
  }, [activeCategory, searchTerm, filters]);

  const wishlistProducts = useMemo(() => products.filter((p) => favorites.has(p.id)), [favorites]);

  const handleToggleFavorite = (productId) => setFavorites((prev) => toggleFavorite(prev, productId));
  const handleAddToCart = (product, colorIndex = selectedColor, size = selectedSize, qty = quantity) => setCart((prev) => addToCart(prev, product, colorIndex, size, qty));
  const handleRemoveFromCart = (cartId) => setCart((prev) => removeFromCart(prev, cartId));
  const handleUpdateCartQuantity = (cartId, newQuantity) => setCart((prev) => updateCartQuantity(prev, cartId, newQuantity));

  const total = useMemo(() => getTotalPrice(cart), [cart]);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setSelectedColor(0);
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
    setCurrentPage('product-detail');
  };

  const onBackFromDetail = () => setCurrentPage('home');
  const handleProceedToCheckout = () => setCurrentPage('order');

  const handlePlaceOrder = (order) => {
    const newOrder = {
      id: Date.now(),
      createdAt: Date.now(),
      items: order.cart,
      total: order.total,
      customer: { firstName: order.firstName, lastName: order.lastName, phone: order.phone },
      address: order.address,
      coords: order.coords,
      paymentMethod: order.paymentMethod
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    alert('Order confirmed!');
    setCurrentPage('order-history');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            categories={categories}
            products={filteredProducts}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onOpenProductDetail={openProductDetail}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onOpenNotifications={() => setCurrentPage('notifications')}
            filters={filters}
            onUpdateFilters={setFilters}
          />
        );
      case 'product-detail':
        return (
          <ProductDetailPage
            selectedProduct={selectedProduct}
            favorites={favorites}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            quantity={quantity}
            setQuantity={setQuantity}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={() => handleAddToCart(selectedProduct)}
            onBack={onBackFromDetail}
          />
        );
      case 'cart':
        return (
          <CartPage
            cart={cart}
            onUpdateCartQuantity={handleUpdateCartQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            total={total}
            onProceedToCheckout={handleProceedToCheckout}
          />
        );
      case 'wishlist':
        return (
          <WishlistPage
            wishlistProducts={wishlistProducts}
            onToggleFavorite={handleToggleFavorite}
            onOpenProductDetail={openProductDetail}
            onAddToCart={(product) => handleAddToCart(product, 0, product.sizes[0], 1)}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            userProfile={profile}
            onOpenOrderHistory={() => setCurrentPage('order-history')}
            onOpenSettings={() => setCurrentPage('settings')}
            onOpenNotifications={() => setCurrentPage('notifications')}
            onEditProfile={() => setCurrentPage('edit-profile')}
          />
        );
      case 'order':
        return <OrderPage cart={cart} total={total} onBack={() => setCurrentPage('cart')} onPlaceOrder={handlePlaceOrder} />;
      case 'order-history':
        return <OrderHistoryPage orders={orders} onBack={() => setCurrentPage('profile')} />;
      case 'settings':
        return <SettingsPage settings={settings} onUpdateSettings={setSettings} onBack={() => setCurrentPage('profile')} />;
      case 'notifications':
        return (
          <NotificationsPage
            notifications={notifications}
            onMarkAllRead={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
            onBack={() => setCurrentPage('profile')}
          />
        );
      case 'edit-profile':
        return (
          <EditProfilePage
            profile={profile}
            onSave={(p) => {
              setProfile(p);
              setCurrentPage('profile');
            }}
            onBack={() => setCurrentPage('profile')}
          />
        );
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="max-w-1xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {renderCurrentPage()}

      <BottomNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
        favoritesCount={favorites.size}
      />

      <div className="h-20"></div>
    </div>
  );
};

export default Catalog;