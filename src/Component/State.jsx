const State = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
      
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          <div className="space-y-2 py-4">
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="text-gray-200">Active Users</p>
          </div>

          <div className="space-y-2 py-4">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="text-gray-200">Premium Tools</p>
          </div>

          <div className="space-y-2 py-4">
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="text-gray-200">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default State;