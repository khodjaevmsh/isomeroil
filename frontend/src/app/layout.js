import React from 'react'
import localFont from 'next/font/local'
import '../static/globals.css'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const geistSans = localFont({
    src: '../static/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: '../static/fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata = {
    title: 'Isomer Oil',
    description: 'Переработка нефтенных продуктов',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
