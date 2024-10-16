// components/CardItem.tsx
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number; 
  category: string;
}

export default function CardItem({
  image,
  title,
  description,
  price,
  originalPrice,
  category,
}: ProductProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <p className="text-right text-sm italic text-gray-400">{category}</p>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-contain mb-4" 
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center space-x-2 mb-4">
        {originalPrice && (
          <p className="text-gray-400 line-through">Rp. {originalPrice.toLocaleString()}</p>
        )}
        <p className="text-lg font-bold text-red-600">Rp. {price.toLocaleString()}</p>
      </div>

      <button className="bg-blue-600 text-white w-full py-2 flex items-center justify-center space-x-2 rounded-md hover:bg-blue-700">
        <AiOutlineShoppingCart size={20} />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
