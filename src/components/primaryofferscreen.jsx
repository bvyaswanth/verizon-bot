

const PrimaryOfferScreen = () => {
    return (
        <div className="flex flex-row gap-2">
            {
                [1, 2, 3, 4].map(()=>(

                    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-red-600 text-white">
                        <div className="p-6">
                            <h1 className="text-3xl font-bold leading-tight mb-2">Free phone<br />on any plan</h1>
                            <p className="text-sm leading-snug text-white/90">
                                For new &amp; existing customers. When you trade in any phone, any condition from Apple, Google, Motorola, or Samsung. With myPlan.
                                <span className="inline-block align-middle ml-1 text-xs">ℹ️</span>
                            </p>
                        </div>

                        <div className="relative bg-gray-100 rounded-lg mx-4 mb-4 overflow-hidden">
                            <img src="./src/assets/iphone14.jpeg" alt="Dummy Phone" className="w-full h-auto object-cover" />

                            <div className="absolute -top-4 -right-4 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                                <span className="text-red-600 text-lg">❤️</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default PrimaryOfferScreen;