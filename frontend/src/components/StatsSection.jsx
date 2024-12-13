import React from 'react'

export default function StatsSection() {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-950 py-16 px-6 text-white mb-20">
            <div className="container mx-auto lg:grid lg:grid-cols-4 gap-6 items-center space-y-10 lg:space-y-0">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-orange-500">2+</h2>
                    <p className="mt-2 text-lg text-gray-300">Лет успешной работы</p>
                </div>
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-orange-500">43+</h2>
                    <p className="mt-2 text-lg text-gray-300">Довольных партнёров</p>
                </div>
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-orange-500">90+</h2>
                    <p className="mt-2 text-lg text-gray-300">Сотрудников</p>
                </div>
                <div className="lg:text-left text-center">
                    <h2 className="text-3xl font-bold text-orange-500">Ключевые факты</h2>
                    <p className="mt-2 text-lg text-gray-300">
                        ООО «ISOMER OIL» — нефтеперерабатывающий завод, запущенный в январе 2023 года. Производит
                        бензины, дизельное топливо, мазут и растворители.
                    </p>
                    <p className="mt-2 text-lg text-gray-300">
                        Мощность — 10 000 тонн углеводородного сырья в год. Завод расположен в Бухарской области, г.
                        Каган.
                    </p>
                    <div className="mt-4 w-16 h-1 bg-orange-500" />
                </div>
            </div>
        </div>
    )
}
