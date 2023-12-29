// components/Sidebar.tsx
'use client'

import { useState } from 'react';
import { Badge } from 'flowbite-react'

const Side: React.FC = () => {
  // State for the price range
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

  // State for the selected color
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Sample product tags and brands
  const tags = ['Red', 'White', 'Rosé', 'Sparkling'];
  const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'];

  return (
    <div className="bg-transparent w-80 p-4">
      {/* Price Range Selector */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Price Range</label>
        <input
          type="range"
          min={0}
          max={20000}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([parseInt(e.target.value, 10), priceRange[1]])}
          className="w-full"
        />

        <div>
          Price: {priceRange[0]}
        </div>
      </div>


      {/* Product Tags */}
      <div className="mb-4">
        <label className=" flex flex-col mb-2 font-semibold">Tags</label>
        <div className='grid grid-cols-3 gap-2'>
          {tags.map((tag) => (
            <Badge color="info" size='sm' className='text-center'>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Product Brands */}
      <div>
        <label className=" mb-6 font-semibold">Brands</label>
        <div className='grid grid-cols-4 gap-3 items-center'>
          {brands.map((brand) => (
           <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className='w-10' alt='brand' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Side;
