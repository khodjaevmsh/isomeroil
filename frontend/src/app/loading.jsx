import React from 'react'

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
        </div>
    )
}
