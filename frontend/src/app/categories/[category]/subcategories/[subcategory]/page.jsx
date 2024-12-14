import React from 'react'
import { NEWS, PRODUCTS, SUBCATEGORY } from '../../../../../urls'
import { getServerSideProps } from '../../../../../hooks/requests'
import ProductsLayout from '../../../../../components/ProductsLayout'
import AboutLayout from '../../../../../components/AboutLayout'
import NewsLayout from '../../../../../components/NewsLayout'
import ContactLayout from '../../../../../components/ContactLayout'

export default async function Page({ params }) {
    const { subcategory, category } = await params
    const products = await getServerSideProps(PRODUCTS, { subcategory })
    const prices = await getServerSideProps(PRODUCTS)
    const subcategoryDetail = await getServerSideProps(SUBCATEGORY.replace('{id}', subcategory))
    const news = await getServerSideProps(NEWS)

    let layout

    switch (category) {
    case '1':
        layout = <AboutLayout />
        break
    case '2':
        layout = <ProductsLayout products={products} prices={prices} subcategory={subcategoryDetail.response} />
        break
    case '3':
        layout = <NewsLayout news={news} prices={prices} subcategory={subcategoryDetail.response} />
        break
    case '4':
        layout = <ContactLayout news={news} prices={prices} subcategory={subcategoryDetail.response} />
        break
    default:
        layout = <>Default</>
    }

    return layout
}
