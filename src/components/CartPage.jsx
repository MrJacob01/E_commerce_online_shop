import React from 'react';
import { ShoppingCart, Plus, Minus, Trash } from 'lucide-react';

const CartPage = ({ cart, onUpdateCartQuantity, onRemoveFromCart, total, onProceedToCheckout }) => {
  return (
    <div>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Shopping Cart</h1>
        <span className="text-sm text-gray-500">({cart.length} items)</span>
      </div>

      <div className="px-4">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.cartId} className="bg-white dark:bg-gray-800 rounded-2xl p-4 flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.selectedColor.name} • {item.selectedSize}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateCartQuantity(item.cartId, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateCartQuantity(item.cartId, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => onRemoveFromCart(item.cartId)} className="text-red-500 hover:text-red-700">
                    <Trash className="w-7 h-7 text-red-600 mx-auto mb-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-orange-500">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
