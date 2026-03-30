import step1 from "../assets/user.png";
import step2 from "../assets/package.png";
import step3 from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">

      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

       
        <div className="relative border rounded-xl p-6 text-center shadow-sm">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            01
          </span>

          <div className="w-16 h-16 mx-auto bg-purple-100 flex items-center justify-center rounded-full mb-4">
            <img src={step1} className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        
        <div className="relative border rounded-xl p-6 text-center shadow-sm">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto bg-purple-100 flex items-center justify-center rounded-full mb-4">
            <img src={step2} className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

       
        <div className="relative border rounded-xl p-6 text-center shadow-sm">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto bg-purple-100 flex items-center justify-center rounded-full mb-4">
            <img src={step3} className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;