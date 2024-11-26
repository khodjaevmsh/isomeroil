import React from 'react'
import { PRODUCTS, SUBCATEGORY } from '../../../../../urls'
import { getServerSideProps } from '../../../../../hooks/requests'
import ProductsLayout from '../../../../../components/ProductsLayout'
import AboutLayout from '../../../../../components/AboutLayout'

export default async function Page({ params }) {
    const { subcategory, category } = await params
    const products = await getServerSideProps(PRODUCTS, { subcategory })
    const prices = await getServerSideProps(PRODUCTS)
    const subcategoryDetail = await getServerSideProps(SUBCATEGORY.replace('{id}', subcategory))

    let layout

    switch (category) {
    case '1':
        layout = <AboutLayout />
        break
    case '2':
        layout = <ProductsLayout products={products} prices={prices} subcategory={subcategoryDetail.response} />
        break
    default:
        layout = <>Default</>
    }

    return layout
}
