import React from 'react'
import { Calendar, Eye } from 'react-feather'
import moment from 'moment'
import Image from 'next/image'
import { getServerSideProps } from '../../../hooks/requests'
import SectionWithSide from '../../../components/common/SectionWithSide'
import { NEWS_DETAIL, PRODUCTS } from '../../../urls'

export default async function Page({ params }) {
    const { newsId } = await params
    const { response: news } = await getServerSideProps(NEWS_DETAIL.replace('{id}', newsId))
    const products = await getServerSideProps(PRODUCTS)

    return (
        <SectionWithSide products={products}>
            <div className="h-auto">
                <h1 className="text-5xl font-bold mb-6">{news.title}</h1>
                <div className="flex space-x-7 text-gray-500">
                    <div className="flex items-center space-x-1.5">
                        <Calendar size={21} />
                        <span>{moment(news.createdAt).format('D MMMM, YYYY')}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                        <Eye size={22} />
                        <span>{news.views}</span>
                    </div>
                </div>
                <Image
                    src={news.cover ? news.cover : '/images/hero.png'}
                    width={1000}
                    height={1000}
                    className="w-full h-auto rounded-lg object-cover my-8"
                    alt="Завод ISOMER OIL"
                />
                <p className="text-lg text-justify lg:my-10 mt-3 mb-8">
                    {news.description}
                </p>
                <hr />
            </div>
        </SectionWithSide>
    )
}
