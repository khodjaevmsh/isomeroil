import React from 'react'
import Image from 'next/image'
import { Calendar, Eye } from 'react-feather'
import moment from 'moment'
import Sidebar from '../../components/common/Sidebar'
import Section from '../../components/common/Section'
import { getServerSideProps } from '../../hooks/requests'
import { ABOUT_DETAIL } from '../../urls'

export default async function Page() {
    const about = await getServerSideProps(ABOUT_DETAIL.replace('{id}', '1'))

    return (
        <Section>
            <div className="lg:w-8/12 p-4 text-justify">
                <h1 className="text-5xl font-bold mb-6">О компании</h1>
                <p className="text-lg">
                    {about.response.description.split('Мы ориентируемся')[0].trim()}
                </p>
                <div className="flex space-x-7 pt-5 text-gray-500">
                    <div className="flex items-center space-x-1.5">
                        <Calendar size={21} />
                        <span>{moment(about.response.createdAt).format('D MMMM, YYYY')}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                        <Eye size={22} />
                        <span>{about.response.views}</span>
                    </div>
                </div>
                <Image
                    src="/images/hero.png"
                    width={1000}
                    height={1000}
                    className="w-full h-auto rounded-xl my-8"
                    alt="Завод ISOMER OIL"
                />
                <p className="text-lg hide">
                    {about.response.description.substr(205)}
                </p>
            </div>
            <Sidebar />
        </Section>
    )
}
