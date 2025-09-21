import React from 'react';
import { ArrowLeft, Star, Plus, Minus, Bookmark } from 'lucide-react';

const ProductDetailPage = ({
  selectedProduct,
  favorites,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  onToggleFavorite,
  onAddToCart,
  onBack
}) => {
  if (!selectedProduct) return null;

  return (
    <div>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-200" />
        </button>
        <h1 className="text-lg font-semibold">Product Detail</h1>
        <button
          onClick={() => onToggleFavorite(selectedProduct.id)}
          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center"
        >
          <Bookmark
            className={`w-4 h-4 ${favorites.has(selectedProduct.id) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-200'}`}
          />
        </button>
      </div>

      <div className="px-4">
        {/* Product Images */}
        <div className="mb-6">
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
            <img
              src={selectedProduct.images[selectedColor] || selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            {selectedProduct.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                  selectedColor === index ? 'border-green-500' : 'border-gray-200'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h1>
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{selectedProduct.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({selectedProduct.reviews} reviews)</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-900">${selectedProduct.price.toFixed(2)}</span>
            {selectedProduct.originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-2">
                ${selectedProduct.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-4">{selectedProduct.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Features:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProduct.features.map((feature, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Colors</h3>
          <div className="flex gap-3">
            {selectedProduct.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === index ? 'border-green-500' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Size</h3>
          <div className="flex gap-2">
            {selectedProduct.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSize === size ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 text-gray-600'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Quantity</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(selectedProduct)}
          className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600 transition-colors mb-6"
        >
          Add to Cart - ${(selectedProduct.price * quantity).toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
