'use client'

import ProductCard from "./ProductCard";
import { useAppSelector } from "@/hooks/hooks";
import { productSelector, Product} from "@/redux/features/productSlice/productSlice";

// interface ProductCardProps {
//   product: Product
// }

export default function Products() {

  const products = useAppSelector(productSelector)

  

    return (
        <main className="flex min-h-screen flex-col">
            {/* <h1 className='text-3xl font-bold text-center'>Products</h1> */}
            <div className='grid grid-cols-4 gap-1 px-32'>
                {products.map(pd => (
                    <ProductCard key={pd.id} product={pd}/>
                ))}
            </div>
        </main>
    )
}