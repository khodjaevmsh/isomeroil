'use client'

import React, { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export default function GlobalProvider({ children }) {
    const [about, setAbout] = useState({})

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <GlobalContext.Provider value={{ about, setAbout }}>
            {children}
        </GlobalContext.Provider>
    )
}
