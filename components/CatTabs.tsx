
'use client';

import { Tabs, TabsRef } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { Product, addToCart, cartSelector } from '@/redux/features/cartSlice/cartSlice';
import { fetchAllProducts } from '@/redux/features/productSlice/productSlice';
import { productSelector } from '@/redux/features/productSlice/productSlice';
import { useAppSelector, useAppDispatch } from '@/hooks/hooks';
// import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
// import { MdDashboard } from 'react-icons/md';
import ProductCard from './ProductCard';
// import { fetchProducts } from '@/app/api/products';

export default function CategoryTabs() {
    const dispatch = useAppDispatch();
    // const currentCartItems = useAppSelector(cartSelector);
    const products = useAppSelector(productSelector);
    const tabsRef = useRef<TabsRef>(null);
    const [activeTab, setActiveTab] = useState(0);
  
    const id = Math.floor(Math.random() * 1000);
    console.log(products)
    const red = products.filter((product) => product.category === 'Red Wine')
    const white = products.filter(product => product.category === 'White Wine');
    const fort = products.filter(product => product.category === 'Fort Wine');
    const sparkling = products.filter(product => product.category === 'Sparkling Wine')

    console.log(red)
  
    // async function fetchProducts() {
    //   try {
    //     await dispatch(fetchAllProducts());
    //   } catch (error) {
    //     console.error('Error fetching limited products:', error);
    //   }
    // }
  
    useEffect(() => {
      const controller = new AbortController();
  
      // const fetchData = async () => {
      //   await fetchProducts();
      //   console.log(products);
      // };
  
      // fetchData();
      dispatch(fetchAllProducts())
  
      return () => {
        controller.abort();
      };
    }, [dispatch]);




  return (
    <div className="flex flex-col mx-auto gap-5">
        <div className='description flex flex-col flex-wrap items-center'>
            <span className="font-medium text-red text-center  dark:text-white">Hurry up Now</span>
            <h1 className="font-bold text-gray-800 text-center text-4xl dark:text-white">Recent Products</h1>
        </div>
      <Tabs aria-label="Default tabs" style="default" className='flex mx-auto items-center' ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)} >
        <Tabs.Item active title="Red Wines">
            <div className='grid grid-cols-4 gap-2'>
                    {red?.map(pd => (
                    <ProductCard key={pd.id} />
                ))}
            </div>
        </Tabs.Item>
        <Tabs.Item title="Sparkling Wines">
            <div className='grid grid-cols-4 gap-2'>
                {white.map(pd => (
                    <ProductCard key={pd.id}/>
                ))}
            </div>
        </Tabs.Item>
        <Tabs.Item title="White Wines">
            <div className='grid grid-cols-4 gap-2'>
                {sparkling.map(pd => (
                    <ProductCard key={pd.id}/>
                ))}
            </div>
        </Tabs.Item>
        <Tabs.Item title="Fort Wines">
            <div className='grid grid-cols-4 gap-1'>
                {fort.map(pd => (
                    <ProductCard key={pd.id}/>
                ))}
            </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
