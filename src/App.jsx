import { useState, Suspense } from "react";

import Banner from "./Component/Banner";
import NavBar from "./Component/NavBar";
import State from "./Component/State";
import Products from "./Component/Products";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

 
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart ✅");
  };

 
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart ❌");
  };

  
  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout complete 🎉");
  };

  return (
    <>
      <NavBar cartCount={cart.length} />

      <Banner />

      <State />

      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Products
          cart={cart}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleAddToCart={handleAddToCart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
      </Suspense>

     
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;