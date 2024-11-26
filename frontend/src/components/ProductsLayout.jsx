import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { clsx } from 'clsx'
import { ArrowDown, ArrowUp, ChevronRight, Eye } from 'react-feather'
import SectionWithSide from './common/SectionWithSide'

export default function ProductsLayout({ products, prices, subcategory }) {
    return (
        <SectionWithSide products={prices}>
            <h1 className="text-5xl font-bold mb-6">{subcategory.name}</h1>
            {products && products.response.length > 0 ? (products.response.map((item) => (
                <Link href={`/products/${item.id}`}>
                    <div className="lg:flex w-full lg:h-40 rounded-lg lg:p-4 sm:p-0 overflow-x-hidden">
                        <Image
                            src={item.cover ? item.cover : '/images/hero.png'}
                            width={400}
                            height={400}
                            className="lg:w-44 h-full rounded-lg object-cover"
                            alt="Завод ISOMER OIL"
                        />
                        <div className="lg:mx-5 mt-6 lg:mt-0">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-lg font-semibold">{item.name}</p>
                                <div className={clsx(
                                    'flex flex-row items-center text-green-500 space-x-1 font-semibold',
                                    {
                                        'text-green-500': item.price > item.priceHistory[0]?.oldPrice,
                                        'text-red-500': item.price < item.priceHistory[0]?.oldPrice,
                                    },
                                )}>
                                    {item.price > item.priceHistory[0]?.oldPrice ? (
                                        <ArrowUp size={18} />
                                    ) : (
                                        <ArrowDown size={18} />
                                    )}
                                    <p className="">{item.price} сум</p>
                                </div>
                            </div>
                            <p className="text-gray-600 lg:my-3 mt-3 mb-8">
                                {item.characteristics.substr(0, 155)}...
                            </p>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center space-x-2 text-gray-600">
                                    <Eye size={18} />
                                    <p>{item.views}</p>
                                </div>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                    <hr className="my-7 lg:my-3" />
                </Link>
            ))) : <p>Продуктов пока что нет</p>}
        </SectionWithSide>
    )
}
