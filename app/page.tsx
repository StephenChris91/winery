import Image from 'next/image'
import ProductCard from './components/ProductCard'
// import SwiperSlider from './components/Slider'
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}
