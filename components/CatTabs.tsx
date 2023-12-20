
'use client';

import { Tabs, TabsRef } from 'flowbite-react';
import { useRef, useState } from 'react';
// import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
// import { MdDashboard } from 'react-icons/md';
import ProductCard from './ProductCard';

export default function CategoryTabs() {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col mx-auto gap-5">
        <div className='description flex flex-col flex-wrap items-center'>
            <span className="font-medium text-red text-center  dark:text-white">Hurry up Now</span>
            <h1 className="font-bold text-gray-800 text-center text-4xl dark:text-white">Recent Products</h1>
        </div>
      <Tabs aria-label="Default tabs" style="default" className='flex mx-auto items-center' ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)} >
        <Tabs.Item active title="Red Wines">
            <div className='flex flex-wrap mx-auto items-center justify-between gap-1'>
                    {[1, 2, 3, 4].map(pd => (
                    <ProductCard />
                ))}
            </div>
        </Tabs.Item>
        <Tabs.Item title="Sparkling Wines">
            <div className='flex flex-wrap mx-auto items-center justify-between gap-1'>
                {[1, 2].map(pd => (
                    <ProductCard />
                ))}
            </div>
        </Tabs.Item>
        <Tabs.Item title="White Wines">
            <div className='flex flex-wrap mx-auto items-center justify-between gap-1'>
                {[1, 2, 3].map(pd => (
                    <ProductCard />
                ))}
            </div>
        </Tabs.Item>
        <Tabs.Item title="Fort Wines">
            <div className='flex mx-auto items-center justify-between gap-1'>
                {[1, 2, 3, 4, 5].map(pd => (
                    <ProductCard />
                ))}
            </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
