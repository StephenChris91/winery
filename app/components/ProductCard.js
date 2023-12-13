// import Image from "next/image";

// export default function ProductCard() {
//   return (
//     <div className="bg-none p-4">
//       <Image
//         src="https://picsum.photos/250/250"
//         alt="Lorem Picsum Image"
//         width={250}
//         height={250}
//       />
//       <h1>Card</h1>
//     </div>
//   );
// }

// // components/ProductCard.js
import Image from "next/image";

const ProductCard = () => {
  const product = {
    productName: "Wine A",
    category: "Red Wine",
    price: 25.99,
    imageUrl: "https://picsum.photos/300/200?random=1",
  };
  // Add more product data as needed
  const { productName, category, price, imageUrl } = product;

  return (
    <div className="border w-[240px] border-gray-300 p-4 rounded-md shadow-sm hover:shadow-md">
      {/* Product Image */}
      <div className="mb-4">
        <Image
          src={imageUrl}
          alt="Lorem Picsum Image"
          width={250}
          height={250}
          className="rounded-sm"
        />
      </div>

      {/* Product Details */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{productName}</h2>
        <p className="text-gray-600 mb-2">{category}</p>
        <p className="text-lg font-bold text-indigo-600">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
