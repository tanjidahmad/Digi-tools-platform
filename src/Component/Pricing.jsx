import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">

     
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

       
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Starter</h3>
          <p className="text-gray-500 text-sm mb-4">
            Perfect for getting started
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $0 <span className="text-sm text-gray-500">/Month</span>
          </h2>

          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Access to 10 free tools</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Basic templates</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Community support</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> 1 project per month</li>
          </ul>

          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-full">
            Get Started Free
          </button>
        </div>

        
        <div className="relative rounded-xl p-6 text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">

         
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-sm mb-4">Best for professionals</p>

          <h2 className="text-3xl font-bold mb-4">
            $29 <span className="text-sm">/Month</span>
          </h2>

          <ul className="space-y-2 text-sm mb-6">
            <li className="flex gap-2"><Check className="w-4" /> Access to all premium tools</li>
            <li className="flex gap-2"><Check className="w-4" /> Unlimited templates</li>
            <li className="flex gap-2"><Check className="w-4" /> Priority support</li>
            <li className="flex gap-2"><Check className="w-4" /> Unlimited projects</li>
            <li className="flex gap-2"><Check className="w-4" /> Cloud sync</li>
            <li className="flex gap-2"><Check className="w-4" /> Advanced analytics</li>
          </ul>

          <button className="w-full bg-white text-purple-600 py-2 rounded-full font-medium">
            Start Pro Trial
          </button>
        </div>

       
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-4">
            For teams and businesses
          </p>

          <h2 className="text-3xl font-bold mb-4">
            $99 <span className="text-sm text-gray-500">/Month</span>
          </h2>

          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Everything in Pro</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Team collaboration</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Custom integrations</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Dedicated support</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> SLA guarantee</li>
            <li className="flex gap-2"><Check className="text-green-500 w-4" /> Custom branding</li>
          </ul>

          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;