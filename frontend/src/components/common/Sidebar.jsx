import React from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowUp } from 'react-feather'
import { clsx } from 'clsx'

export default function Sidebar({ products = [] }) {
    return (
        <div className="w-1/3 pt-10 pl-10 hidden lg:inline-block">
            <h2 className="text-xl font-semibold mb-4">Цены за сегодня</h2>
            <hr />
            <ul>
                {products && products.length > 0 ? products.map((item) => (
                    <li key={item.id} className="flex flex-row items-center justify-between py-3.5">
                        <div className="flex flex-row items-center space-x-4">
                            <Image
                                src={item.cover ? item.cover : '/images/hero.png'}
                                width={400}
                                height={400}
                                className="w-11 h-11 rounded-full object-cover"
                                alt="Продукция ISOMER OIL"
                            />
                            <div className="flex flex-col">
                                <p className="font-semibold">{item.name.substr(0, 10)}</p>
                                <p className="text-sm text-gray-500">
                                    {item.characteristics.substr(0, 22)}...
                                </p>
                            </div>
                        </div>
                        <div className={clsx('flex flex-row items-center text-green-500 space-x-1 font-semibold', {
                            'text-green-500': item.price > item.priceHistory[0]?.oldPrice,
                            'text-red-500': item.price < item.priceHistory[0]?.oldPrice,
                        })}>
                            {item.price > item.priceHistory[0]?.oldPrice ? (
                                <ArrowUp size={18} />
                            ) : (
                                <ArrowDown size={18} />
                            )}
                            <p className="text-sm">{item.price} сум</p>
                        </div>
                    </li>
                )) : null}
            </ul>
            <hr />
        </div>
    )
}
