import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

export default function Footer() {
    return (
        <footer className="bg-gray-950">
            <div className="container p-6 mx-auto">
                <div className="lg:flex justify-center">
                    <div className="w-full">
                        <div className="lg:flex flex-col justify-center items-center justify-center px-6">
                            <Link href="/" className="text-base font-semibold text-orange-600">
                                <Image
                                    src={logo}
                                    width={150}
                                    height={150}
                                    className="w-48 h-auto"
                                    alt="Продукция ISOMER OIL"
                                />
                            </Link>
                            <p className="w-full text-gray-500 dark:text-gray-400 text-center mt-5">
                                Производство высококачественных бензинов, дизельного топлива, <br />
                                мазута и других нефтепродуктов с учетом современных технологий и <br />
                                экологических стандартов.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-orange-600 border-none" />

                <div className="flex justify-center">
                    <a
                        href="https://t.me/khodjaevmsh"
                        target="_blank"
                        className="text-center text-gray-500 dark:text-gray-400 hover:text-orange-600" rel="noreferrer">
                        © Khodjaev Maksudbek - Разработка веб и мобильных приложений
                    </a>
                </div>
            </div>
        </footer>
    )
}
