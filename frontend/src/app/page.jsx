import React from 'react'
import Hero from '../components/common/Hero'
import About from '../components/About'
import Products from '../components/Products'
import { getServerSideProps } from '../hooks/requests'
import { ABOUT_DETAIL, NEWS, PRODUCTS } from '../urls'
import News from '../components/News'
import WhyWe from '../components/WhyWe'
import StatsSection from '../components/StatsSection'
import ContactSection from '../components/ContactUs'

/* eslint-disable max-len */
export default async function Home() {
    const about = await getServerSideProps(ABOUT_DETAIL.replace('{id}', '1'))
    const products = await getServerSideProps(PRODUCTS)
    const news = await getServerSideProps(NEWS)

    return (
        <>
            <Hero />
            <About about={about.response} />
            <Products products={products.response} />
            <News news={news.response} />
            <WhyWe />
            <StatsSection />
            <ContactSection />
        </>
    )
}
