import bannerImg from "../assets/banner.png";
import playIcon from "../assets/play.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-16 px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-lg"
        />

        
        <div>
         <p className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full inline-flex items-center gap-1 text-sm mb-4">
             New: AI-Powered Tools Available
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="py-6 text-gray-500">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          
          <div className="flex gap-4 items-center">
            
            <button className="btn bg-purple-600 text-white rounded-full px-6 hover:bg-purple-700">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full px-6 flex items-center gap-2">
              <img src={playIcon} className="w-5" />
              Watch Demo
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;