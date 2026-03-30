// import {   Youtube } from "lucide-react";


const Footer = () => {
  return (
    <div className="bg-[#0B1220] text-gray-300 pt-16 pb-6 px-6">

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8">

       
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-3">
            DigiTools
          </h2>
          <p className="text-sm text-gray-400">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        {/* <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3> */}

          {/* <div className="flex gap-3"> */}
            {/* <div className="bg-gray-800 p-2 rounded-full">
              <Youtube className="w-4 h-4 text-white" />
            </div> */}
            {/* <div className="bg-gray-800 p-2 rounded-full">
              <FaFacebook className="w-4 h-4 text-white" />
            </div> */}
            {/* <div className="bg-gray-800 p-2 rounded-full">
              <Twitter className="w-4 h-4 text-white" />
            </div> */}
          {/* </div> */}
        {/* </div> */}

      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-500">

        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>

      </div>

    </div>
  );
};

export default Footer;