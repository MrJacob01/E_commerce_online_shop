// utils.js

export function toggleFavorite(favorites, productId) {
  const next = new Set(favorites);
  if (next.has(productId)) next.delete(productId);
  else next.add(productId);
  return next;
}

export function addToCart(cart, product, selectedColorIndex, selectedSize, quantity) {
  const cartItem = {
    ...product,
    selectedColor: product.colors[selectedColorIndex],
    selectedSize,
    quantity,
    cartId: Date.now() + Math.random()
  };
  return [...cart, cartItem];
}

export function removeFromCart(cart, cartId) {
  return cart.filter((item) => item.cartId !== cartId);
}

export function updateCartQuantity(cart, cartId, newQuantity) {
  if (newQuantity <= 0) return removeFromCart(cart, cartId);
  return cart.map((item) => (item.cartId === cartId ? { ...item, quantity: newQuantity } : item));
}

export function getTotalPrice(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}