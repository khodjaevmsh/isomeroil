import React from 'react'
import { ArrowDown, ArrowUp, ChevronRight } from 'react-feather'
import Link from 'next/link'
import { clsx } from 'clsx'

export default function ProductCard({ item }) {
    return (
        <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg lg:w-[32%] lg:h-44 p-4
             flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-300 mb-8"> {item.characteristics.substr(0, 110)}...</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
                <div className={clsx('flex flex-row items-center text-green-500 space-x-1 font-semibold', {
                    'text-green-500': item.price > item.priceHistory[0]?.oldPrice,
                    'text-red-500': item.price < item.priceHistory[0]?.oldPrice,
                })}>
                    {item.price > item.priceHistory[0]?.oldPrice ? (
                        <ArrowUp size={22} />
                    ) : (
                        <ArrowDown size={22} />
                    )}
                    <p className="text-lg">{item.price} сум</p>
                </div>
                <Link
                    href={`/products/${item.id}`}
                    className="text-orange-600 flex items-center space-x-1 transition-all">
                    <ChevronRight size={25} className="ml-0 text-white" />
                </Link>
            </div>

        </div>
    )
}
