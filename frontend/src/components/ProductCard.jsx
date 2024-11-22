import React from 'react'
import { ChevronRight } from 'react-feather'
import Link from 'next/link'

export default function ProductCard() {
    return (
        <div className="flex justify-between">
            <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg w-full max-w-screen-sm p-4
             flex flex-col justify-between">

                <div>
                    <h3 className="text-xl font-bold mb-2">Solar Panels</h3>
                    <p className="text-sm text-gray-300 mb-8">
                        High-efficiency PureSun panels for all types of properties.
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div className="text-orange-600 font-bold text-lg">$499.99</div>
                    <Link
                        href="/"
                        className="text-orange-600 flex items-center space-x-1 transition-all">
                        <ChevronRight size={25} className="ml-0 text-white" />
                    </Link>
                </div>

            </div>
        </div>
    )
}
