import React from 'react'

export default function Section({ children }) {
    return (
        <section className="container mx-auto py-10">
            <div className="flex flex-col lg:flex-row">
                {children}
            </div>
        </section>
    )
}
