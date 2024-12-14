import React from 'react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="bg-white h-[100%]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl
                    text-primary-600">
                        404
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                        Something's missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that
                        page. You'll find lots to explore on the home page.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex text-white bg-orange-600 hover:bg-orange-800 font-medium rounded-lg
                         text-sm px-5 text-center py-2.5 my-4">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}
