import humps from 'humps'

const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
export const domain = backendUrl.endsWith('/') ? backendUrl.substr(0, backendUrl.length - 1) : backendUrl

/* eslint-disable no-console */
export async function getServerSideProps(url, params = {}, options = {}) {
    try {
        const queryString = new URLSearchParams(params).toString()
        const requestUrl = queryString ? `${domain}/api/v1/${url}?${queryString}` : `${domain}/api/v1/${url}`

        const response = await fetch(requestUrl, { cache: 'force-cache', ...options })

        if (!response.ok) {
            console.log('Something is wrong...')
        }

        const jsonData = await response.json() // Wait for the JSON data to resolve

        return { response: humps.camelizeKeys(jsonData) } // Pass the resolved data to humps.camelizeKeys
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}
