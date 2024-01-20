// api/products.ts

export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl?: string;
  }
  
  export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://65a419bca54d8e805ed471bc.mockapi.io/api/v1/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const data: Product[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  