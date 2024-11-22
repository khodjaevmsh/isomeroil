import React from 'react'
import Image from 'next/image'
import { ArrowDown } from 'react-feather'

export default function Sidebar() {
    return (
        <div className="w-1/3 pt-10 pl-10 hidden lg:inline-block">
            <h2 className="text-xl font-semibold mb-4">Цены за сегодня</h2>
            <hr />
            <ul>
                <li className="flex flex-row items-center justify-between py-2.5">
                    <div className="flex flex-row items-center space-x-4">
                        <Image
                            src="/images/hero.png"
                            width={400}
                            height={400}
                            className="w-11 h-11 rounded-full"
                            alt="Продукция ISOMER OIL"
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold">Бензин</p>
                            <p className="text-sm text-gray-500">А92</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-1 text-red-600 font-semibold">
                        <p className="text-sm">8,400</p>
                        <ArrowDown size={18} />
                    </div>
                </li>
            </ul>
            <hr />
        </div>
    )
}
