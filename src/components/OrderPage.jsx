import React, { useState } from 'react';
import { ArrowLeft, MapPin, User, Phone, CreditCard, Wallet } from 'lucide-react';

const OrderPage = ({ cart, total, onBack, onPlaceOrder }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [coords, setCoords] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'cod'

  const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const useCurrentLocation = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
      },
      (err) => alert(err.message)
    );
  };

  const submitOrder = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) {
      alert('Please fill in required fields');
      return;
    }
    const payload = {
      firstName,
      lastName,
      phone,
      address,
      coords,
      paymentMethod,
      cart,
      total
    };
    onPlaceOrder(payload);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-200" />
        </button>
        <h1 className="text-lg font-semibold">Checkout</h1>
      </div>

      <form onSubmit={submitOrder} className="px-4 mt-2">
        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-4">
          <h2 className="text-base font-semibold mb-3">Contact information</h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <label className="text-xs text-gray-600 mb-1 block">First name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="text-xs text-gray-600 mb-1 block">Last name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>

          <label className="text-xs text-gray-600 mb-1 block">Phone *</label>
          <div className="relative">
            <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm"
              placeholder="+998 xx xxx xx xx"
              required
            />
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-4">
          <h2 className="text-base font-semibold mb-3">Delivery address</h2>
          <div className="relative mb-3">
            <div className="h-40 w-full bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 text-sm">
              Map preview
            </div>
            <button
              type="button"
              onClick={useCurrentLocation}
              className="absolute bottom-2 right-2 bg-white/90 border rounded-md px-2 py-1 text-xs"
            >
              Use current location
            </button>
          </div>
          <div className="mb-3">
            <label className="text-xs text-gray-600 mb-1 block">Coordinates</label>
            <input
              value={coords}
              onChange={(e) => setCoords(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm"
              placeholder="41.30, 69.28"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Address</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm"
                placeholder="Street, house, apartment"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-4">
          <h2 className="text-base font-semibold mb-3">Payment method</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <CreditCard className="w-4 h-4" />
              <span className="text-sm">Bank card</span>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <Wallet className="w-4 h-4" />
              <span className="text-sm">Cash on delivery</span>
            </label>
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-24">
          <h2 className="text-base font-semibold mb-3">Your order</h2>
          <div className="space-y-2 mb-3">
            {cart.map((item) => (
              <div key={item.cartId} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">x{item.quantity}</p>
                </div>
                <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Items ({itemsCount})</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-base font-semibold">Total</span>
            <span className="text-lg font-bold text-orange-500">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Fixed submit button */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 p-4">
          <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600">
            Confirm order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
