import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/app/api/products";

export default function Products() {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [products]);

    return (
        <main className="flex min-h-screen flex-col">
            {/* <h1 className='text-3xl font-bold text-center'>Products</h1> */}
            <div className='grid grid-cols-4 gap-1 px-32'>
                {products.map(pd => (
                    <ProductCard/>
                ))}
            </div>
        </main>
    )
}