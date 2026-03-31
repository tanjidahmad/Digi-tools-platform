const Cart = ({ cart, handleRemove, handleCheckout }) => {

  
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p className="text-center">Cart is Empty </p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      <div className="space-y-4">

        {cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
          >
            
            <div className="flex items-center gap-4">
              <img src={item.icon} className="w-10 h-10" />

              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>

           
            <button
              onClick={() => handleRemove(item.id)}
              className="text-pink-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

      </div>

     
      <div className="flex justify-between mt-6 text-gray-600">
        <p>Total:</p>
        <p className="font-semibold text-black">${total}</p>
      </div>

     
      <button
        onClick={handleCheckout}
        className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;