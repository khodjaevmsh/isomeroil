'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

/* eslint-disable max-len */
export default function Header({ categories }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="relative bg-gray-950 shadow">
            <div className="container p-5 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-base font-semibold text-orange-600">
                        <Image
                            src={logo}
                            width={150}
                            height={150}
                            className="w-40 h-auto"
                            alt="Продукция ISOMER OIL"
                        />
                    </Link>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400
                            focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-950 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link href="/" className="my-2 font-medium text-gray-100 cursor-pointer transition-colors duration-300 transform hover:text-blue-50 md:mx-4 md:my-0">
                            Главная
                        </Link>
                        {categories && categories.length > 0 ? categories.map((category) => (
                            <div key={category.id} className="relative group">
                                {/* eslint-disable-next-line max-len */}
                                <span
                                    className="my-2 font-medium text-gray-100 cursor-pointer transition-colors duration-300 pb-10 transform hover:text-blue-50 md:mx-4 md:my-0">
                                    {category.name}
                                </span>
                                {category.subcategories && category.subcategories.length > 0 && (
                                    <div
                                        className="absolute left-0 top-14 hidden group-hover:block bg-gray-950 w-52 text-white px-1 py-1 rounded shadow-lg">
                                        {category.subcategories.map((subcategory) => (
                                            <Link key={subcategory.id}
                                                href={`/categories/${category.id}/subcategories/${subcategory.id}`}
                                                className="block py-2 px-4 text-sm font-semibold hover:text-orange-500 transition-colors duration-200">
                                                {subcategory.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </nav>
    )
}
