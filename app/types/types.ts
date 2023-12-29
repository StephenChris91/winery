// types/Product.ts

export type Product = {
    id:  string | null;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    additionalImages: string[];
    color?: string; // Optional color property
    tags?: string[]; // Optional array of tags
    brand?: string; // Optional brand name
    categories?: string[]; // Optional array of categories
    inStock?: boolean; // Optional boolean to indicate if the product is in stock
    onSale?: boolean; // Optional boolean to indicate if the product is on sale
  };
  
  