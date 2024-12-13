import React from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Hero() {
    return (
        <section className="relative bg-black text-white overflow-hidden h-[620px]">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-700 via-black to-black opacity-80" />
                <Image
                    src="/images/company.JPG"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover opacity-65"
                    alt="Завод ISOMER OIL"
                />
            </div>
            <div
                className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-5 py-16 lg:py-36
                 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                    Качество и Надежность<br className="hidden lg:block" /> в Производстве Нефтепродуктов
                </h1>
                <p className="text-lg sm:text-xl lg:text-1xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
                    Мы выпускаем бензины, дизельное топливо, мазут и другие продукты высокого качества.
                    Современные технологии и экологичность в каждом процессе.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0
                sm:space-x-6">
                    <Button title="Наша продукция" link="/products" className="bg-orange-600 hover:bg-orange-500" />
                    <Button title="Связаться с нами" link="/" className="bg-gray-800 hover:bg-gray-600" />
                </div>
            </div>
            <div className="absolute -bottom-36 -left-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl opacity-30
            animate-pulse" />
        </section>
    )
}
