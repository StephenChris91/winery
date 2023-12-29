import Products from '@/components/ShopProducts'
import Side from '@/components/Sidebar'


export default function Shop() {
    return (
        <main className="flex min-h-screen flex-col px-32">
            {/* <h1 className='text-8xl text-center font-bold mt-12'>Shop</h1> */}
            <div className='flex'>
                <Side />
                <Products />
            </div>
        </main>
    )
}