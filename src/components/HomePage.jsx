import React, { useState } from 'react';
import { Search, Bell, Grid3X3, Bookmark, BookmarkCheck, ListFilter } from 'lucide-react';

const HomePage = ({
  categories,
  products,
  activeCategory,
  setActiveCategory,
  favorites,
  onToggleFavorite,
  onOpenProductDetail,
  searchTerm,
  setSearchTerm,
  onOpenNotifications,
  filters,
  onUpdateFilters
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const renderIcon = (icon) => {
    if (icon === 'Grid3X3') return <Grid3X3 className="w-5 h-5" />;
    return <span className="text-lg">{icon}</span>;
  };

  const discountedProducts = products.filter((p) => p.originalPrice && p.originalPrice > p.price);

  const hasActiveFilters = !!(filters?.discountedOnly || filters?.minPrice || filters?.maxPrice || filters?.minRating);

  return (
    <div>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="relative container mx-auto px-4 py-3 flex items-center justify-between">
              OnlineShop
          </div>
        </div>
        <div className="w-8 h-8">
          <button
            onClick={onOpenNotifications}
            className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Open notifications"
            title="Notifications"
          >
            <Bell className="w-4 h-4 text-gray-600 dark:text-gray-200" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full bg-white dark:bg-gray-800 rounded-2xl pl-10 pr-12 py-3 text-gray-600 dark:text-gray-200 placeholder-gray-400 border-0 shadow-sm"
          />
          <button
            type="button"
            onClick={() => setShowFilters((s) => !s)}
            className={`absolute right-3 top-2.5 w-8 h-8 rounded flex items-center justify-center ${hasActiveFilters ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 dark:bg-gray-700'} `}
            aria-label="Open filters"
            title="Filters"
          >
            <ListFilter className={`w-4 h-4 ${hasActiveFilters ? 'text-orange-600' : 'text-gray-600 dark:text-gray-200'}`} />
          </button>
        </div>
        {showFilters && (
          <div className="mt-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-3 shadow">
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 col-span-2">
                <input
                  type="checkbox"
                  checked={!!filters.discountedOnly}
                  onChange={(e) => onUpdateFilters({ ...filters, discountedOnly: e.target.checked })}
                />
                <span className="text-sm">Discounted only</span>
              </label>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Min price</label>
                <input
                  type="number"
                  min="0"
                  value={filters.minPrice}
                  onChange={(e) => onUpdateFilters({ ...filters, minPrice: e.target.value })}
                  className="w-full border rounded-lg px-2 py-2 text-sm bg-white dark:bg-gray-800"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Max price</label>
                <input
                  type="number"
                  min="0"
                  value={filters.maxPrice}
                  onChange={(e) => onUpdateFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full border rounded-lg px-2 py-2 text-sm bg-white dark:bg-gray-800"
                  placeholder="999"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs text-gray-500 mb-1">Min rating</label>
                <select
                  value={filters.minRating}
                  onChange={(e) => onUpdateFilters({ ...filters, minRating: e.target.value })}
                  className="w-full border rounded-lg px-2 py-2 text-sm bg-white dark:bg-gray-800"
                >
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="4.5">4.5+</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-3">
              <button
                type="button"
                onClick={() => onUpdateFilters({ discountedOnly: false, minPrice: '', maxPrice: '', minRating: '' })}
                className="px-3 py-2 text-sm rounded-lg border"
              >
                Reset
              </button>
              <button type="button" onClick={() => setShowFilters(false)} className="px-3 py-2 text-sm rounded-lg bg-orange-500 text-white">
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Promotional Banner */}
      <div className="mx-4 mb-6 relative">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-1">GET YOUR SPECIAL SALE</h2>
            <h3 className="text-2xl font-bold mb-4">UP TO 30%</h3>
            <button
              onClick={() => setActiveCategory('All')}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </button>
          </div>
          <div className="absolute right-0 top-0 w-32 h-full">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
              alt="Kids"
              className="w-full h-full object-cover rounded-r-2xl opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="px-4 mb-6">
        <div className="flex flex-nowrap gap-3 overflow-x-auto pb-1">
          {categories.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`w-20 shrink-0 flex flex-col items-center py-3 px-4 rounded-xl transition-colors ${
                  isActive ? 'bg-orange-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="w-8 h-8 mb-1 flex items-center justify-center">{renderIcon(category.icon)}</div>
                <span className="text-xs font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Discounted Deals Section */}
      {discountedProducts.length > 0 && (
        <div className="px-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Discounted</h2>
            <span className="text-sm text-gray-500">{discountedProducts.length} deals</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {discountedProducts.map((product) => (
              <div key={product.id} className="relative min-w-[10rem] bg-white dark:bg-gray-800 rounded-2xl p-3">
                <span className="absolute bottom-13 left-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-1xl">
                 - {Math.round(100 - (product.price / product.originalPrice) * 100)}%
                </span>
                <button
                onClick={() => onToggleFavorite(product.id)}
                className="absolute right-5 top-5 w-8 h-8 flex items-center justify-center hover:orange-600 transition-colors"
                aria-label={favorites.has(product.id) ? 'Saved' : 'Save'}
                title={favorites.has(product.id) ? 'Saved' : 'Save'}
              >
                {favorites.has(product.id) ? (
                  <BookmarkCheck className="w-8 h-8 text-white" />
                ) : (
                  <Bookmark className="w-8 h-8 text-white" />
                )}
              </button>

                <button onClick={() => onOpenProductDetail(product)} className="w-full">
                  <div className="aspect-square mb-3 bg-gray-100 rounded-xl overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1 text-left">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900 text-sm">${product.price.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Special For You Section */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Special For You</h2>
          <button className="text-orange-500 text-sm font-medium">See all</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl p-3 relative">
              <button
                onClick={() => onToggleFavorite(product.id)}
                className="absolute right-5 top-5 w-8 h-8 flex items-center justify-center hover:orange-600 transition-colors"
                aria-label={favorites.has(product.id) ? 'Saved' : 'Save'}
                title={favorites.has(product.id) ? 'Saved' : 'Save'}
              >
                {favorites.has(product.id) ? (
                  <BookmarkCheck className="w-8 h-8 text-white" />
                ) : (
                  <Bookmark className="w-8 h-8 text-white" />
                )}
              </button>

              <button onClick={() => onOpenProductDetail(product)} className="w-full">
                <div className="aspect-square mb-3 bg-gray-100 rounded-xl overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="font-medium text-gray-900 text-sm mb-1 text-left">{product.name}</h3>
                <p className="font-bold text-gray-900 text-sm mb-2 text-left">${product.price.toFixed(2)}</p>
              </button>

              {product.sizes && (
                <div className="flex flex-wrap gap-1">
                  {product.sizes.slice(0, 4).map((size) => (
                    <span
                      key={size}
                      className="px-2 py-0.5 rounded-md border text-xs text-gray-600 border-gray-300 bg-gray-50"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
