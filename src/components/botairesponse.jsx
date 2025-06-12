import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import RecommendedDevices from './RecommendedDevices';
import { User } from 'lucide-react';

const BotAiResponse = ({ isPaused, setIsPaused }) => {
    return (
        <main className="flex-1 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Outer card container */}
                <div className="bg-white rounded-[20px] shadow p-8 space-y-8">

                    {/* Header: avatar + name + subtitle + pause */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                <User className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-medium text-gray-900">Name</h1>
                                <p className="text-gray-500 text-sm">
                                    Exploring <span className="font-semibold">My offers</span>
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="px-4 py-2 rounded-full border-2 font-medium transition duration-200 text-gray-900 border-gray-300 hover:bg-gray-50"
                        >
                            {isPaused ? 'Resume' : 'Pause'}
                        </button>
                    </div>

                    <Outlet />

                </div>
            </div>
        </main>
    )
}

export default BotAiResponse;