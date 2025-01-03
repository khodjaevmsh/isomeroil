import React from 'react'
import { ChevronRight } from 'react-feather'
import Link from 'next/link'
import ProductCard from './ProductCard'

export default function Products({ products }) {
    return (
        <section className="mb-24 py-20 bg-gradient-to-br from-gray-800 to-black  overflow-x-hidden">
            <div className="container mx-auto">
                <div className="mb-16 lg:text-left text-center">
                    <h1 className="text-4xl lg:text-5xl text-orange-600 font-semibold">Продукция</h1>
                    <p className="text-lg text-white my-4 leading-relaxed">
                        Широкий выбор нефтепродуктов: бензины, экологичное дизтопливо, мазут, сера и <br />
                        растворители для любых нужд.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-6 lg:mx-0 mx-4">
                    {products && products.length > 0 ? products.slice(0, 6).map((item) => (
                        <ProductCard key={item.id} item={item} />
                    )) : null}
                </div>
                <Link href="/products" className="flex flex-row items-center lg:justify-end justify-center text-white
                 mt-20 space-x-2">
                    <p className="text-white">Все продукции</p>
                    <ChevronRight className="mt-1" />
                </Link>
            </div>
        </section>
    )
}
