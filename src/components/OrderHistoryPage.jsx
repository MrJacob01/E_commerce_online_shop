import React from 'react';
import { ArrowLeft, Package } from 'lucide-react';

const OrderHistoryPage = ({ orders, onBack }) => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-200" />
        </button>
        <h1 className="text-lg font-semibold">Order History</h1>
      </div>

      <div className="px-4 py-3">
        {orders.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <Package className="w-10 h-10 mx-auto mb-2 text-gray-300" />
            No orders yet
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((o) => (
              <div key={o.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>#{o.id}</span>
                  <span>{new Date(o.createdAt).toLocaleString()}</span>
                </div>
                <div className="space-y-1 text-sm">
                  {o.items.map((it) => (
                    <div key={it.cartId} className="flex justify-between">
                      <span className="truncate mr-2">{it.name} x{it.quantity}</span>
                      <span>${(it.price * it.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">Total</span>
                  <span className="font-semibold text-orange-500">${o.total.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
