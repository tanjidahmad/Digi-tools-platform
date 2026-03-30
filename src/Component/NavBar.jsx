import { ShoppingCart } from "lucide-react";

const NavBar = ({ cartCount }) => {   
  return (
    <div className="navbar bg-base-100 shadow-md px-6">

      
      <div className="navbar-start">
        <a className="text-2xl font-bold text-purple-600">
          DigiTools
        </a>
      </div>

     
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-medium text-gray-600">
          <li><a className="hover:text-purple-600">Products</a></li>
          <li><a className="hover:text-purple-600">Features</a></li>
          <li><a className="hover:text-purple-600">Pricing</a></li>
          <li><a className="hover:text-purple-600">Testimonials</a></li>
          <li><a className="hover:text-purple-600">FAQ</a></li>
        </ul>
      </div>

     
      <div className="navbar-end gap-4">

        
        <div className="relative">
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />

         
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        <button className="text-gray-600 font-medium">Login</button>

        <button className="btn btn-sm bg-purple-600 text-white rounded-full px-5">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default NavBar;