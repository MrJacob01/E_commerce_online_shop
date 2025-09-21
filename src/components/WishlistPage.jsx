import React from 'react';
import { Trash, BookmarkCheck } from 'lucide-react';

const WishlistPage = ({ wishlistProducts, onToggleFavorite, onOpenProductDetail, onAddToCart }) => {
  return (
    <div>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Wishlist</h1>
        <span className="text-sm text-gray-500">({wishlistProducts.length} items)</span>
      </div>

      <div className="px-4">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            {/* <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" /> */}
            <BookmarkCheck className="w-16 h-16 text-gray-300 mx-auto mb-4 " />
            <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl p-3 relative">
                <button
                  onClick={() => onToggleFavorite(product.id)}
                  className="absolute top-6 right-4 w-8 h-8 rounded-lg flex items-center justify-center z-10 hover:bg-red-600 transition-colors"
                >
                  <Trash className="w-7 h-7 text-red-600 mx-auto mb-4" />
                </button>

                <button onClick={() => onOpenProductDetail(product)} className="w-full">
                  <div className="aspect-square mb-3 bg-gray-100 rounded-xl overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="font-medium text-gray-900 text-sm mb-1 text-left">{product.name}</h3>
                  <p className="font-bold text-gray-900 text-sm mb-2 text-left">${product.price.toFixed(2)}</p>
                </button>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
