import React, { Suspense } from 'react'
import localFont from 'next/font/local'
import '../../public/globals.css'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { getServerSideProps } from '../hooks/requests'
import { CATEGORY } from '../urls'
import GlobalProvider from '../context/GlobalContext'
import Loading from './loading'

const geistSans = localFont({
    src: '../../public/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: '../../public/fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata = {
    title: 'Isomer Oil',
    description: 'Переработка нефтенных продуктов',
}
export default async function RootLayout({ children }) {
    const categories = await getServerSideProps(CATEGORY)

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <GlobalProvider>
                    <Header categories={categories.response} />
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                    <Footer />
                </GlobalProvider>
            </body>
        </html>
    )
}
