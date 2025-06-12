const TopBar = () => {
    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end items-center h-10 text-sm space-x-6">
                    <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">1-833-CALLUS</a>
                    <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Contact us</a>
                    <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Support</a>
                    <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Stores</a>
                    <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Coverage map</a>
                    <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Español</a>
                </div>
            </div>
        </div>
    )
};

export default TopBar;