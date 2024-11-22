import React from 'react'
import ProductCard from './ProductCard'

export default function Products() {
    return (
        <section className="mb-20 py-20 bg-gray-950">
            <div className="container mx-auto">

                <div className="mb-16 lg:text-left text-center">
                    <h1 className="text-4xl lg:text-5xl text-orange-600 font-semibold">Продукция</h1>
                    <p className="text-sm text-white my-4 leading-relaxed">
                        Широкий выбор нефтепродуктов: бензины, экологичное дизтопливо, мазут, сера и <br />
                        растворители для любых нужд.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-5 lg:mx-0 mx-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}
