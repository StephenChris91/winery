// components/CartDropdown.tsx
import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
import { cartSelector, deleteFromCart, updateQuantity } from '@/redux/features/cartSlice/cartSlice';

const CartDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartSelector);

  const handleRemoveItem = (id: string) => {
    dispatch(deleteFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    // if (quantity < 1 ) {
    //   dispatch(deleteFromCart(id))
    // }
    dispatch(updateQuantity({ id, quantity }));
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="absolute w-96 right-0 pb-2 mt-12 bg-white border rounded shadow-lg z-10">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Cart</h2>
        {cartItems.length ? (
          cartItems.map((item: any) => (
            <div key={item.id} className="flex pb-3 items-center gap-2 border-b-2 justify-between mb-2">
              {/* <Image width={50} height={50} src={item.imageUrl} alt="product-img" /> */}
              <p>{item.name}</p>
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
                  className="ml-2 text-black focus:outline-none"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        )}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</p>
          <button className='bg-black p-3 text-white'>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
