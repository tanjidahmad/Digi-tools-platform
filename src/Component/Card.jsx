import { Check } from "lucide-react";
import { useState } from "react";


    const Card = ({ product, handleAddToCart }) => {
  const [added, setAdded] = useState(false);
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <div className="flex justify-between items-center mb-4">
        <img src={product.icon} className="w-10" />

        <span
  className={`text-xs px-2 py-1 rounded-full
    ${
      product.tagType === "popular"
        ? "bg-blue-100 text-blue-500"
        : product.tagType === "best"
        ? "bg-orange-100 text-orange-500"
        : product.tagType === "new"
        ? "bg-green-100 text-green-500"
        : "bg-gray-100 text-gray-500"
    }
  `}
>
  {product.tag}
</span>
      </div>

      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

      <p className="text-gray-500 text-sm mb-3">
        {product.description}
      </p>

      <p className="text-xl font-bold mb-3">
        ${product.price}
        <span className="text-sm text-gray-500">
          /{product.period}
        </span>
      </p>

      <ul className="text-sm text-gray-500 mb-4 space-y-2">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="text-green-500 w-4 h-4" />
            {f}
          </li>
        ))}
      </ul>

    <button
  onClick={() => {
    handleAddToCart(product);
    setAdded(true);
  }}
  className={`w-full py-2 rounded-full font-medium transition-all duration-300
    ${added 
      ? "bg-green-500 text-white cursor-not-allowed" 
      : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90"
    }`}
>
  {added ? "Added " : "Buy Now"}
</button>
    </div>
  );
};

export default Card;