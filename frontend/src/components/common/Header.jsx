import React from 'react'

export default function Header() {
    return (
        <header className="container mx-auto flex flex-row items-center justify-between px-10 bg-blue-900 h-12">
            <div className="basis-1 bg-amber-600">Logo</div>
            <div className="basis-1/2 bg-red-600">Menu</div>
            <div className="basis-1 bg-amber-600">Right</div>
        </header>
    )
}
