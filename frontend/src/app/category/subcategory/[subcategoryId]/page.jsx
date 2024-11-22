import React from 'react'

export default async function Page({ params }) {
    const { subcategoryId } = await params

    return (
        <p>{subcategoryId}</p>
    )
}
