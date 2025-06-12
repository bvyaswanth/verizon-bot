import { Search, ShoppingCart, User } from 'lucide-react';

const MainHeader = ({searchTerm, setSearchTerm}) => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-red-600 text-2xl font-bold">
                            verizon
                            {/*  <span className="text-black text-sm ml-1">✓</span> */}
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Mobile</a>
                        <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Home Internet</a>
                        <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Shop</a>
                        <a href="#" className="text-red-600 font-medium">Deals</a>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            />
                            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>

                        {/* Welcome Message */}
                        <span className="text-gray-900 font-medium">Welcome, Name</span>

                        {/* Cart */}
                        <button className="p-2 text-gray-700 hover:text-red-600 transition-colors">
                            <ShoppingCart className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader;