
import { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";

const NavBar = ({ cartCount }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div className="navbar bg-base-100 shadow-md px-6">

        
        <div className="navbar-start gap-3">

          
          <div className="md:hidden">
            <Menu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <a className="text-2xl font-bold text-purple-600">
            DigiTools
          </a>
        </div>

        
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium text-gray-600">
            <li><a className="hover:text-purple-600 transition">Products</a></li>
            <li><a className="hover:text-purple-600 transition">Features</a></li>
            <li><a className="hover:text-purple-600 transition">Pricing</a></li>
            <li><a className="hover:text-purple-600 transition">Testimonials</a></li>
            <li><a className="hover:text-purple-600 transition">FAQ</a></li>
          </ul>
        </div>

        
        <div className="navbar-end gap-4">

         
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600 transition" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          
          <button className="hidden md:block text-gray-600 hover:text-purple-600 transition">
            Login
          </button>

          <button className="btn btn-sm bg-purple-600 text-white rounded-full px-5 hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </div>

      
     {open && (
  <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">

    <p className="cursor-pointer hover:text-purple-600">
      Products
    </p>

    <p className="cursor-pointer hover:text-purple-600">
      Features
    </p>

    <p className="cursor-pointer hover:text-purple-600">
      Pricing
    </p>

    <p className="cursor-pointer hover:text-purple-600">
      Testimonials
    </p>

    <p className="cursor-pointer hover:text-purple-600">
      FAQ
    </p>

  </div>
)}
    </>
  );
};

export default NavBar;