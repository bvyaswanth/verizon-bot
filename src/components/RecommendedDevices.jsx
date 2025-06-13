import React from 'react';
import { User } from 'lucide-react';


import iPhone16ProImg from '../assets/iphone14.jpeg';
import iPhone16PlusImg from '../assets/iphone14.jpeg';
import GalaxyS24FEImg from '../assets/iphone14.jpeg';

const devices = [
    {
        id: 'pro',
        title: 'iPhone 16 Pro',
        image: iPhone16ProImg,
        colors: ['#000000', '#B9B9B9', '#D5C2AA', '#7F6F8D'],
        price: '$0.00/mo',
        credit: '$37.92/mo credit for 36 months',
        fill: '25%',
        recommended: true,
    },
    {
        id: 'plus',
        title: 'iPhone 16 Plus',
        image: iPhone16PlusImg,
        colors: ['#000000', '#B9B9B9'],
        price: '$0.00/mo',
        credit: '$34.92/mo credit for 36 months',
        fill: '15%',
    },
    {
        id: 's24fe',
        title: 'Samsung Galaxy S24 FE',
        image: GalaxyS24FEImg,
        colors: ['#8BD0FF', '#B8E2C0'],
        price: '$0.00/mo',
        credit: '$18.05/mo credit for 36 months',
        fill: '10%',
    },
];

export default function RecommendedDevices({ isPaused, setIsPaused }) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-medium text-gray-900">
                Recommended devices
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {devices.map((d, idx) => (
                    <div
                        key={d.id}
                        className={`relative bg-white rounded-lg shadow p-2 h-[100%] overflow-hidden ${idx===0 ? "lg:col-span-2 ": ""}`}
                    >
                        {d.recommended && (
                            <span className="absolute top-4 left-4 bg-gray-200 text-gray-900 text-sm font-medium px-2 py-1 rounded">
                                Recommended
                            </span>
                        )}
                        <div className={`h-[100%] items-center flex ${idx===0 ? "flex-row" : "flex-col"} `}>
                            <div className={`${idx===0 ? "" : "h-[50%]"}`}>
                                <img
                                    src={d.image}
                                    alt={d.title}
                                    width={idx===0 ? "auto": 100}
                                    className="mx-auto mb-4 h-48 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {d.title}
                                </h3>
                                <div className="flex items-center space-x-2 mb-4">
                                    {d.colors.map((c, i) => (
                                        <span
                                            key={i}
                                            className="w-4 h-4 rounded-full border"
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-500 text-sm">Offer price</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {d.price}
                                </p>
                                <p className="text-gray-500 text-sm mt-1">{d.credit}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
