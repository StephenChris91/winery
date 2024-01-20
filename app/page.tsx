import Image from 'next/image';
import { UserButton } from "@clerk/nextjs";
import Slider from '@/components/Slider'
import { Category } from '@/components/CategorySection'
import CategoryTabs from '@/components/CatTabs';
import Features from '@/components/Features';
// import { useState, useEffect } from 'react'


export default function Home() {

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const controller = new AbortController()
  //   // const signal = controller.signal
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('https://65a419bca54d8e805ed471bc.mockapi.io/api/v1/products');
  //       const data = await response.json();
  //       setProducts(data);
  //       console.log(products)
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  //   return () => {
  //     controller.abort()
  //   }
  // },
  // );
  return (
    <main className="flex flex-col">
      <Slider />
      <Category />
      <CategoryTabs />
      <Features />
    </main>
  )
}
