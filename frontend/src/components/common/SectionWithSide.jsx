import React from 'react'
import Sidebar from './Sidebar'

export default function SectionWithSide({ children, products }) {
    return (
        <section className="container mx-auto py-10">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-8/12 p-4 text-justify">
                    {children}
                </div>
                <Sidebar products={products.response} />
            </div>
        </section>
    )
}
