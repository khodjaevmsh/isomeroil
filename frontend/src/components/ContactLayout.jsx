'use client'

import React, { useState } from 'react'
import { Mail, MapPin, Phone } from 'react-feather'
import { Formik } from 'formik'
import * as Yup from 'yup'
import SectionWithSide from './common/SectionWithSide'

/* eslint-disable max-len */
/* eslint-disable no-console */
export default function ContactLayout({ prices, subcategory }) {
    const [alertVisible, setAlertVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const validationSchema = Yup.object({
        name: Yup.string().required('Majburiy maydon'),
        phone: Yup.string().required('Majburiy maydon'),
    })
    const onSubmit = async (data, { resetForm }) => {
        try {
            setLoading(true)
            const res = await fetch('http://localhost:8000/api/v1/main/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: data.name, phone: data.phone }),
            })

            if (res.ok) {
                setAlertVisible(true)
                setTimeout(() => setAlertVisible(false), 5000)

                resetForm()
            } else {
                console.log('Ошибка при выполнении запроса')
            }
        } catch (error) {
            console.error('Ошибка:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SectionWithSide products={prices}>
            {alertVisible && (
                <div
                    className="w-96 h-24 fixed top-4 right-4 bg-green-500 text-white px-4 py-4 flex flex-row items-center space-x-4 rounded-md shadow-md">
                    <div className="h-full border-l-2 border-white" />
                    <div>
                        <p className="font-semibold text-lg">Данные успешно отправлены!</p>
                        <p className="text-sm">Скоро с вами свяжутся наши сотрудники.</p>
                    </div>
                </div>
            )}
            <h1 className="text-5xl font-bold mb-6">{subcategory.name}</h1>
            <div>
                <div className="lg:w-full h-96 mt-10">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49100.50046583669!2d64.50995841949256!3d39.72209786900847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f501c978bc545a7%3A0x59d1d62dfa88415a!2z0JrQsNCz0LDQvSwg0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sus!4v1732805271947!5m2!1sru!2sus"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        loading="lazy"
                        className="rounded-xl"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className="my-8">
                    <div className="container mx-auto flex flex-col items-start">
                        <div className="flex flex-row items-center space-x-2">
                            <Phone size={22} />
                            <p className="font-semibold text-lg">Хотите связаться с нами</p>
                        </div>
                        <p className="text-gray-500">+998 55 303 26 62</p>
                    </div>

                    <div className="py-7 container mx-auto flex flex-col items-start">
                        <div className="flex flex-row items-center space-x-2">
                            <Mail size={22} />
                            <p className="font-semibold text-lg">Хотите отправить письмо</p>
                        </div>
                        <p className="text-gray-500">isomeroil@gmail.com</p>
                    </div>

                    <div className="container mx-auto flex flex-col items-start">
                        <div className="flex flex-row items-center space-x-2">
                            <MapPin size={22} />
                            <p className="font-semibold text-lg">Где вы можете нас найти</p>
                        </div>
                        <p className="text-gray-500">Бухарская область, г. Каган, поселок Амиробод.</p>
                    </div>
                </div>

                <hr />
                <h1 className="text-2xl font-bold mt-16 mb-10">Либо оставьте нам номер телефона, мы свяжемся с вами</h1>
                <div className="lg:flex lg:flex-row items-start">
                    <Formik
                        initialValues={{ name: '', phone: '' }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({ handleSubmit, handleChange, values }) => (
                            <form onSubmit={handleSubmit} className="space-y-6 lg:w-full lg:mb-0 mb-10">
                                <div>
                                    <label htmlFor="name" className="block text-lg text-gray-700 font-semibold">
                                        Ваше имя / Компания
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        placeholder="Введите ваше имя или название компании"
                                        className="mt-2 w-full px-4 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-lg text-gray-700 font-semibold">
                                        Номер телефона
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        placeholder="Введите номер телефона"
                                        className="mt-2 w-full px-4 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-11 bg-orange-500 flex justify-center items-center text-white py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    {loading ? (
                                        <svg aria-hidden="true"
                                            className="w-5 h-5 text-white animate-spin fill-black"
                                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor" />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill" />
                                        </svg>
                                    ) : (
                                        'Отправить'
                                    )}
                                </button>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>
        </SectionWithSide>
    )
}
