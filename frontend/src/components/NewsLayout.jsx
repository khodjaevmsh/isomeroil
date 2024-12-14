import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ChevronRight, Eye } from 'react-feather'
import moment from 'moment/moment'
import SectionWithSide from './common/SectionWithSide'

export default function NewsLayout({ news, prices, subcategory }) {
    return (
        <SectionWithSide products={prices}>
            <h1 className="text-5xl font-bold mb-6">{subcategory.name}</h1>
            {news && news.response.length > 0 ? (news.response.map((item) => (
                <Link href={`/news/${item.id}`}>
                    <div className="lg:flex w-full lg:h-40 rounded-lg lg:p-4 sm:p-0 overflow-x-hidden">
                        <Image
                            src={item.cover ? item.cover : '/images/hero.png'}
                            width={400}
                            height={400}
                            className="lg:w-44 h-full rounded-lg object-cover"
                            alt="Завод ISOMER OIL"
                        />
                        <div className="flex flex-col justify-between">
                            <p className="font-semibold">{item.title.substr(0, 85)}...</p>
                            <p className="my-2">{item.description.substr(0, 125)}...</p>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex space-x-5 text-gray-500">
                                    <div className="flex items-center space-x-1.5">
                                        <Calendar size={18} />
                                        <span>{moment(item.createdAt).format('D MMMM, YYYY')}</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <Eye size={18} />
                                        <span>{item.views}</span>
                                    </div>
                                </div>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                    <hr className="my-7 lg:my-3" />
                </Link>
            ))) : <p>Новостей пока что нет</p>}
        </SectionWithSide>
    )
}
