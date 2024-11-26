import React from 'react'
import Link from 'next/link'

export default function Button({ title, link, className }) {
    return (
        <Link href={link} className={`${className} px-4 py-3 text-white font-medium text-sm rounded-md shadow-md
         transition-transform transform hover:scale-105`}>
            {title}
        </Link>
    )
}
