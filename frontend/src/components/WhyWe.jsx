import React from 'react'

/* eslint-disable max-len */
export default function WhyWe() {
    const whyChoose = [
        {
            id: 1,
            title: 'Качество продукции',
            description: 'Мы производим экологичные и чистые нефтепродукты, соответствующие современным стандартам.',
            icon: '🧪',
        },
        {
            id: 2,
            title: 'Широкий ассортимент',
            description: 'В ассортименте бензины, дизельное топливо, мазут, сера и растворители для различных нужд.',
            icon: '📊',
        },
        {
            id: 3,
            title: 'Современные технологии',
            description: 'Завод, запущенный в 2023 году, оснащён передовым оборудованием для гарантии качества.',
            icon: '🛠️',
        },
        {
            id: 4,
            title: 'Надёжность поставок',
            description: 'Своевременно выполняем заказы благодаря отлаженным производственным и логистическим процессам.',
            icon: '📦',
        },
        {
            id: 5,
            title: 'Индивидуальный подход',
            description: 'Работаем напрямую с клиентами, учитывая их потребности и предлагая лучшие решения.',
            icon: '🤲',
        },
    ]

    return (
        <section className="container mx-auto mb-20 px-5 lg:px-0">
            <h1 className="text-4xl lg:text-5xl lg:text-left text-center font-semibold mb-10">
                Почему выбирают нас
            </h1>

            <div className="flex lg:flex-row flex-wrap justify-between gap-6">
                {whyChoose.map((item, index) => (
                    <div key={item.id} className={`${index === 3 || index === 4 ? 'lg:w-[49%]' : 'lg:w-[410px]'} h-80 bg-gradient-to-br from-gray-800 to-gray-950 p-9 rounded-3xl text-white space-y-7`}>
                        <div className="w-12 h-12 rounded-full bg-orange-600 flex justify-center items-center">
                            <span className="text-3xl">{item.icon}</span>
                        </div>
                        <p className="text-2xl font-semibold">{item.title}</p>
                        <p className="text-gray-300">{item.description}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}
