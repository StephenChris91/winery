// // pages/ProductDetails.tsx
'use client'

import React, { useState } from 'react';
import { Product } from '@/app/types/types'; // Import the Product type
import { useSearchParams } from 'next/navigation';
import { IoCartOutline, IoShuffleOutline,  } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";


const ProductDetails: React.FC = () => {
  // Example product data with multiple images

  const searchParams = useSearchParams()
    const productId = searchParams.get('id')
  const product: Product = {
    id: productId,
    name: 'Wine Name',
    price: 25.99,
    description: 'Lorem ipsum dolor sit amet...',
    imageUrl: "https://flowbite.com/docs/images/carousel/carousel-1.svg" ,
    additionalImages: [
        "https://flowbite.com/docs/images/carousel/carousel-2.svg",
        "https://flowbite.com/docs/images/carousel/carousel-3.svg",
        "https://flowbite.com/docs/images/carousel/carousel-4.svg",
      // ... additional image URLs
    ],
    // ... other properties
  };

  // State to manage the currently displayed image
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  // State to manage the product quantity
  const [quantity, setQuantity] = useState<number>(1);

  // Function to handle quantity change
  const handleQuantityChange = (change: number) => {
    // Ensure quantity is within valid range (e.g., between 1 and 100)
    setQuantity((prevQuantity) => Math.max(1, Math.min(prevQuantity + change, 100)));
  };

  // Function to handle image hover
  const handleImageHover = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="container mx-auto p-4 flex min-h-screen border-b-2">
      <div className="flex flex-col">
        {/* Large Image */}
        <img src={currentImage || product.imageUrl} alt={product.name} className="w-[800px]" />
        <div className="mt-4 flex items-start">
            {/* Map over additional images */}
            {product.additionalImages?.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="gap-3 flex mr-3 rounded h-20 cursor-pointer"
                onMouseOver={() => handleImageHover(image)}
                onMouseOut={() => setCurrentImage(null)}
              />
            ))}
          </div>
    </div>
    {/* Smaller Images */}
    <div className="ml-4 w-1/2">
          <h1 className="text-5xl font-semibold mb-2">{product.name}</h1>
          <p className="text-3xl mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
          {/* Add to Cart Button (Sample) */}
    <div className='flex w-full mx-auto border-b-2 mb-7 pb-5 gap-5'>
    <div className="mt-4">
            {/* <label className="block mb-2 font-semibold">Quantity:</label> */}
            <div className="flex items-center">
              <button 
                onClick={() => handleQuantityChange(-1)} 
                className="px-4 py-2 bg-gray-200 rounded-l"
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)} 
                className="border-none bg-gray-100 text-center w-16"
              />
              <button 
                onClick={() => handleQuantityChange(1)} 
                className="bg-gray-200 rounded-r px-4 py-2"
              >
                +
              </button>
            </div>
    </div>
    <div className='flex w-full gap-5'>
        <button className="mt-4 w-full text-center flex px-4 py-2 bg-blue-500 text-white font-semibold rounded">Add to Cart</button>
        <button className="mt-4 w-full text-center flex px-4 py-2 bg-yellow-500 text-white font-semibold rounded">Buy Now</button>
    </div>
    </div>
    <div className='w-full flex gap-3 justify-between items-center mx-auto pb-5 border-b-2 mb-4'>
        <div className='flex gap-4'>
            <span className="mt-4 font-normal flex  items-center mx-auto gap-2 cursor-pointer hover:text-gray-500 hover:font-semibold"><IoShuffleOutline /> Compare</span>
            <span className="mt-4 font-normal flex  items-center mx-auto gap-2 cursor-pointer hover:text-gray-500 hover:font-semibold"><IoMdHeartEmpty /> Add to wishlist</span>
        </div>
        <div className='mx-auto'>
            <h3>Share:</h3>
        </div>
    </div>
    <div>
        <p className='mb-2'>Guaranteed Safe Checkout</p>
        <img src='/images/mastercard.jpg' />
    </div>
    </div>
    </div>
  );
};

export default ProductDetails;

