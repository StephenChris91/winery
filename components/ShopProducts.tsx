import ProductCard from "./ProductCard";


export default function Products() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* <h1 className='text-3xl font-bold text-center'>Products</h1> */}
            <div className='grid grid-cols-4 gap-1 px-32'>
                {[1, 2, 3, 4, 5,6,7,8,9].map(pd => (
                    <ProductCard />
                ))}
            </div>
        </main>
    )
}