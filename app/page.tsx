import Image from 'next/image';
import { UserButton } from "@clerk/nextjs";
import Slider from '@/components/Slider'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Slider />
    </main>
  )
}
