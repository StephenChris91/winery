import Image from 'next/image';
import { UserButton } from "@clerk/nextjs";
import Slider from '@/components/Slider'
import { Category } from '@/components/CategorySection'
import CategoryTabs from '@/components/CatTabs';
import Features from '@/components/Features';


export default function Home() {
  return (
    <main className="flex flex-col">
      <Slider />
      <Category />
      <CategoryTabs />
      <Features />
    </main>
  )
}
