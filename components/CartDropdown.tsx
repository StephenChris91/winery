// components/CartDropdown.tsx

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import { cartSelector, removeItem, updateQuantity } from '@/redux/features/cartSlice/cartSlice';

const CartDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartSelector);

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="absolute right-0 mt-12 w-64 bg-white border rounded shadow-lg z-10">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Cart</h2>
        {cartItems.length ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <div className="flex items-center">
                <button 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} 
                  className="text-gray-500 focus:outline-none"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} 
                  className="text-gray-500 focus:outline-none"
                >
                  +
                </button>
                <button 
                  onClick={() => handleRemoveItem(item.id)} 
                  className="ml-2 text-red-500 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
