import React from 'react'
import Hero from '../components/common/Hero'
import About from '../components/About'
import Products from '../components/Products'
import { getServerSideProps } from '../hooks/requests'
import { ABOUT_DETAIL, PRODUCTS } from '../urls'

export default async function Home() {
    const about = await getServerSideProps(ABOUT_DETAIL.replace('{id}', '1'))
    const products = await getServerSideProps(PRODUCTS)

    return (
        <div>
            <Hero />
            <About about={about.response} />
            <Products products={products.response} />
        </div>
    )
}