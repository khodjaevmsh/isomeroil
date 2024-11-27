import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'react-feather'

export default function News({ news }) {
    return (
        <section className="container mx-auto px-5 lg:px-0">
            <h1 className="text-4xl lg:text-5xl lg:text-left text-center font-semibold mb-10">Новости</h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-6">
                {/* eslint-disable-next-line max-len */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-2xl w-full md:w-3/5 h-96 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">
                            {news[0].title.substr(0, 55)}...
                        </h2>
                        <p className="my-5">{news[0].description.substr(0, 175)}...</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <Link href={`/news/${news[0].id}`} className="text-lg pb-0.5">Подробнее</Link>
                        <ChevronRight size={24} />
                    </div>
                </div>
                {/* eslint-disable-next-line max-len */}
                <div className="bg-gradient-to-br from-gray-800 to-black text-white p-8 rounded-2xl w-full md:w-2/5 h-96 flex flex-col items-end justify-between">
                    <div className="flex items-center justify-center mb-4">
                        <Link href={`/news/${news[1].id}`} className="text-lg pb-0.5">Подробнее</Link>
                        <ChevronRight size={24} />
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full mb-4">
                            <span className="text-xl">⚡</span>
                        </div>
                        <span className="lg:text-4xl text-3xl font-bold text-end">
                            {news[1].title.substr(0, 39)}
                        </span>
                        <p className="lg:text-lg text-sm mt-2 text-end">
                            {news[1].description.substr(0, 100)}...
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-6">
                {/* eslint-disable-next-line max-len */}
                <div className="bg-gradient-to-br from-gray-800 to-black text-white p-8 rounded-2xl w-full md:w-2/5 h-96 flex flex-col items-end justify-between">
                    <div className="flex items-center justify-center mb-4">
                        <Link href={`/news/${news[2].id}`} className="text-lg pb-0.5">Подробнее</Link>
                        <ChevronRight size={24} />
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full mb-4">
                            <span className="text-xl">⚡</span>
                        </div>
                        <span className="lg:text-4xl text-3xl font-bold text-end">
                            {news[2].title.substr(0, 39)}
                        </span>
                        <p className="lg:text-lg text-sm mt-2 text-end">
                            {news[2].description.substr(0, 100)}...
                        </p>
                    </div>
                </div>
                {/* eslint-disable-next-line max-len */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-2xl w-full md:w-3/5 h-96 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">
                            {news[3].title.substr(0, 55)}...
                        </h2>
                        <p className="my-5">{news[3].description.substr(0, 175)}...</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <Link href={`/news/${news[3].id}`} className="text-lg pb-0.5">Подробнее</Link>
                        <ChevronRight size={24} />
                    </div>
                </div>
            </div>
        </section>
    )
}
