const Cart = () => {
  return (
    <div className="bg-gray-100 p-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Cart */}
        <div className="lg:col-span-8">
          <h2 className="text-xl font-semibold mb-4">Your cart</h2>

          {/* iPhone Card */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">New Line 1</p>
            <div className="flex gap-4">
              <img
                src="./../../src/assets/iphone14.jpeg"
                alt="iPhone"
                className="w-24 h-auto object-cover rounded-md"
              />
              <div className="flex-1">
                <p className="font-bold text-lg">Apple iPhone 16 Pro Max</p>
                <p className="text-sm text-gray-500 mb-1">512 GB, Titanium</p>
                <p className="text-black font-bold">$0.00/mo</p>
                <p className="text-sm text-gray-500">
                  after $37.92/mo credit for 36 months
                </p>

                <div className="mt-6">
                  <p className="font-semibold mb-1">Plan & Services</p>
                  <p className="text-sm text-gray-500 mb-1">Plan</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Unlimited Plus</p>
                    <p className="font-semibold">$55.00/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
            <img
              src="https://via.placeholder.com/80"
              alt="AirPods"
              className="w-20 h-20 object-cover"
            />
            <div>
              <p className="font-semibold">Apple AirPods Pro 2</p>
              <p className="text-sm text-gray-500">Wireless earphones</p>
              <p className="font-bold text-black">
                $129.99 <span className="line-through text-sm text-gray-400 ml-1">$199.99</span>
              </p>
            </div>
          </div>*/}
        </div> 

        {/* Right: Order Summary */}
        <div className="lg:col-span-4 rounded-xl p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order summary</h2>

          {/* Today */}
          <div className="mb-6 border-b pb-4">
            <div className="flex justify-between text-sm font-medium mb-1">
              <span>Due today:</span>
              <span className="text-black font-bold">$129.99</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-green-600">
              <span>Today's savings:</span>
              <span>$70.00</span>
            </div>
          </div>

          {/* Monthly */}
          <div className="text-sm">
            <p className="text-gray-500 mb-2">
              Monthly services start on May 1, 2024.
            </p>
            <div className="flex justify-between font-medium mb-1">
              <span>Due monthly:</span>
              <span className="text-black font-bold">$55.90</span>
            </div>
            <div className="flex justify-between text-green-600 font-medium">
              <span>Monthly savings:</span>
              <span>$47.92</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

    

export default Cart;