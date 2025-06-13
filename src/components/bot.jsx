import { User } from 'lucide-react';

const Bot = ({ isPaused, setIsPaused }) => {
    return (
        <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className={isPaused ? "relative p-2 rounded-[28px] rainbow-border" : ""}>
                    <div className="bg-white rounded-lg min-h-96 flex flex-col items-center justify-center relative overflow-hidden">

                        <h1 className="text-3xl font-light text-gray-900 mb-12">Orion</h1>

                        <div className="relative w-32 h-32 mb-12">
                            {isPaused && <div className="swirl-halo"></div>}
                            <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
                                <User className="h-16 w-16 text-white" strokeWidth={2} />
                            </div>
                        </div>

                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className={`px-8 py-3 rounded-full border-2 font-medium transition-all duration-200 ${isPaused
                                ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
                                : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            {isPaused ? "Pause" : `Let's Talk`}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Bot;
