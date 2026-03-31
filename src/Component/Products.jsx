import { use } from "react";
import Card from "./Card";
import Cart from "./Cart";


const productsPromise = fetch("/Products.json").then(res => res.json());

const Products = ({
  cart,
  setActiveTab,
  activeTab,
  handleAddToCart,
  handleRemove,
  handleCheckout
}) => {

  const products = use(productsPromise); 

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">

      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
       <p className="text-gray-500 mt-3 max-w-xl mx-auto">
  Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
</p>

        <div className="flex justify-center mt-6">
          <div className="bg-gray-100 rounded-full p-1 flex">

            <button
              onClick={() => setActiveTab("products")}
              className={`px-5 py-2 rounded-full ${
                activeTab === "products"
                  ? "bg-purple-600 text-white"
                  : ""
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-5 py-2 rounded-full ${
                activeTab === "cart"
                  ? "bg-purple-600 text-white"
                  : ""
              }`}
            >
              Cart ({cart.length})
            </button>

          </div>
        </div>
      </div>

      
      {activeTab === "products" ? (
        <div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              product={product}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <Cart
          cart={cart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default Products;