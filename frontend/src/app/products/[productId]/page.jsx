import React from 'react'
import Image from 'next/image'
import { Calendar, Eye } from 'react-feather'
import moment from 'moment/moment'
import SectionWithSide from '../../../components/common/SectionWithSide'
import { getServerSideProps } from '../../../hooks/requests'
import { PRODUCT_DETAIL, PRODUCTS } from '../../../urls'

export default async function Page({ params }) {
    const { productId } = await params
    const { response: product } = await getServerSideProps(PRODUCT_DETAIL.replace('{id}', productId))
    const products = await getServerSideProps(PRODUCTS)

    return (
        <SectionWithSide products={products}>
            <div className="h-screen">
                <h1 className="text-5xl font-bold mb-6">{product.name}</h1>
                <div className="flex space-x-7 text-gray-500">
                    <div className="flex items-center space-x-1.5">
                        <Calendar size={21} />
                        <span>{moment(product.createdAt).format('D MMMM, YYYY')}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                        <Eye size={22} />
                        <span>{product.views}</span>
                    </div>
                </div>
                <p className="text-lg text-justify lg:my-10 mt-3 mb-8">
                    {product.characteristics}
                </p>
                <hr />
            </div>
        </SectionWithSide>
    )
}
