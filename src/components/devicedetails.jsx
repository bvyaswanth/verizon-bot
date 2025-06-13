

const DeviceDetails = () => {
  return (
       <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src="./../../src/assets/iphone14.jpeg"
          alt="iPhone Dummy"
          className="rounded-lg object-cover w-60 h-auto"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">iPhone 16 Pro</h2>
        <p className="text-xl font-semibold mb-1">$0.00/mo</p>
        <p className="text-sm text-gray-500 mb-6">$37.92/mo credit for 36 months</p>

        {/* Color */}
        <div className="mb-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="color" checked readOnly />
            <span className="text-sm font-medium">Color</span>
            <span className="inline-block w-4 h-4 rounded-full bg-gray-400"></span>
            <span className="text-sm text-gray-700">Natural titanium</span>
          </label>
        </div>

        {/* Storage */}
        <div className="mb-6">
          <label className="flex items-center gap-2 mb-2">
            <input type="radio" name="storage" checked readOnly />
            <span className="text-sm font-medium">Storage</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['128 GB', '256 GB', '512 GB', '1 TB'].map((size) => (
              <button
                key={size}
                className="border rounded-md py-2 text-sm font-medium hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Accessories */}
        <div>
          <label className="flex items-center gap-2">
            <input type="radio" name="accessories" />
            <span className="text-sm font-medium">Accessories</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DeviceDetails;