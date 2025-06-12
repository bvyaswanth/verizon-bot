const plans = [
    {
        title: 'Ultimate',
        price: '$55/mo',
        features: [
            '5G Ultra Wideband with Enhanced Video Calling & Streaming',
            'Unlimited mobile hotspot data',
            'International calling/texting',
            'Unlimited Phone Upgrade',
            'Up to 50% off data plans for watches/tablets',
        ],
        highlight: '3-year price lock guarantee*',
    },
    {
        title: 'Plus',
        price: '$45/mo',
        features: [
            '5G Ultra Wideband',
            '30 GB premium mobile hotspot data',
            'Phone Upgrade',
            'Up to 50% off data plans for watches/tablets',
        ],
        highlight: '3-year price lock guarantee*',
    },
    {
        title: 'Welcome',
        price: '$30/mo',
        features: [
            '5G',
            'Welcome Phone Upgrade',
        ],
        highlight: '3-year price lock guarantee*',
    },
];

const CartPreview = () => {
    return (
        <div className="p-3 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left - Plans */}
                <div className="lg:col-span-8 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Available plans</h2>
                    <div className="grid md:grid-cols-3 gap-2">
                        {plans.map((plan) => (
                            <div key={plan.title} className="relative bg-[#f6f1eb] rounded-lg p-5 border shadow-sm flex flex-col justify-between h-full">
                                {/* 5G Label in Top Right */}
                                <div className="absolute top-3 right-4 text-xs font-bold text-black bg-white px-2 py-0.5 rounded shadow-sm">
                                    5G
                                </div>

                                {/* Card Content */}
                                <div>
                                    <h3 className="text-lg font-bold text-red-600 mb-1">Unlimited {plan.title}</h3>
                                    <ul className="text-sm text-gray-800 mb-4 list-disc pl-5 space-y-1 mt-2">
                                        {plan.features.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-sm text-blue-700 underline cursor-pointer mb-2">Review details</p>
                                </div>

                                {/* Bottom Price Section */}
                                <div>
                                    <p className="text-xl font-bold mt-4">{plan.price}</p>
                                    <p className="text-xs bg-yellow-300 font-semibold inline-block mt-2 px-2 py-1 rounded">
                                        {plan.highlight}
                                    </p>
                                </div>
                            </div>


                        ))}
                    </div>
                </div>

                {/* Right - Cart */}
                <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-md">

                    <h2 className="text-xl font-semibold mb-4">Your cart</h2>

                    {/* iPhone Section */}
                    <div className="mb-6 flex gap-4">
                        <img
                            src="./../../src/assets/iphone14.jpeg"
                            alt="iPhone"
                            className="w-20 h-auto rounded-md object-cover"
                        />
                        <div>
                            <p className="text-sm text-gray-500 mb-1">New Line 1</p>
                            <p className="text-sm text-gray-700 mb-1">Ships by Mon, Jun 3</p>
                            <p className="font-semibold">Apple iPhone 16 Pro Max</p>
                            <p className="text-sm text-gray-500">512 GB, Titanium</p>
                            <p className="text-lg font-bold mt-1">$0.00/mo</p>
                            <p className="text-sm text-gray-500">after $37.92/mo credit for 36 months</p>
                        </div>
                    </div>



                    {/* Summary */}
                    <div className="border-t pt-4">
                        <div className="flex justify-between mb-2 text-sm font-medium">
                            <span>Due today</span>
                            <span className="text-black font-bold">$129.99</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                            <span>Due monthly</span>
                            <span className="text-black font-bold">$0.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPreview;