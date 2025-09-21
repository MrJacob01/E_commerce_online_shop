import React from 'react';
import { Home, ShoppingCart, BookmarkCheck, User } from 'lucide-react';

const BottomNavigation = ({ currentPage, setCurrentPage, cartCount, favoritesCount }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-1xl bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
      <div className="flex justify-around py-2">
        <button onClick={() => setCurrentPage('home')} className="flex flex-col items-center py-2 px-3">
          <Home className={`w-5 h-5 mb-1 ${currentPage === 'home' ? 'text-orange-500' : 'text-gray-400'}`} />
          <span className={`text-xs ${currentPage === 'home' ? 'text-orange-500' : 'text-gray-400'}`}>Home</span>
        </button>
        <button onClick={() => setCurrentPage('cart')} className="flex flex-col items-center py-2 px-3 relative">
          <ShoppingCart className={`w-5 h-5 mb-1 ${currentPage === 'cart' ? 'text-orange-500' : 'text-gray-400'}`} />
          <span className={`text-xs ${currentPage === 'cart' ? 'text-orange-500' : 'text-gray-400'}`}>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button onClick={() => setCurrentPage('wishlist')} className="flex flex-col items-center py-2 px-3 relative">
          <BookmarkCheck className={`w-5 h-5 mb-1 ${currentPage === 'wishlist' ? 'text-orange-500' : 'text-gray-400'}`} />
          <span className={`text-xs ${currentPage === 'wishlist' ? 'text-orange-500' : 'text-gray-400'}`}>Wishlist</span>
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </button>
        <button onClick={() => setCurrentPage('profile')} className="flex flex-col items-center py-2 px-3">
          <User className={`w-5 h-5 mb-1 ${currentPage === 'profile' ? 'text-orange-500' : 'text-gray-400'}`} />
          <span className={`text-xs ${currentPage === 'profile' ? 'text-orange-500' : 'text-gray-400'}`}>Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
