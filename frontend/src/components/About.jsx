'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'react-feather'
import Link from 'next/link'

export default function About({ about }) {
    return (
        <section className="container mx-auto lg:py-20 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8">
                <span className="inline-block lg:hidden border lg:text-xl px-4 py-1 border-orange-600 rounded-full">
                    О нас
                </span>
                <div className="w-full lg:w-[40%] px-4 lg:p-0">
                    <Image
                        src="/images/hero.png"
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-xl"
                        alt="Завод ISOMER OIL"
                    />
                </div>
                <div className="w-full lg:w-[52%] text-center lg:text-left">
                    <span className="lg:inline-block hidden border lg:text-xl px-4 py-1 border-orange-600 rounded-full">
                        О нас
                    </span>
                    <p
                        key={about.id}
                        className="inline-block lg:py-7 pb-7 px-7 lg:px-0 text-gray-500 lg:text-lg text-justify">
                        {about.description}
                    </p>
                    <hr className="pb-7" />
                    <Link
                        href="/about"
                        className="flex flex-row items-center justify-center lg:justify-end space-x-1">
                        <p className="text-lg">Подробнее</p>
                        <ChevronRight className="" size={25} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
