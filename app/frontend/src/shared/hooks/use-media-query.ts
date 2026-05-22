'use client'

import { useEffect, useState } from 'react'

export function useMediaQuery(query: string, defaultValue = false): boolean {
    const [matches, setMatches] = useState<boolean>(defaultValue)

    useEffect(() => {
        const mq = window.matchMedia(query)
        const handler = () => setMatches(mq.matches)
        handler()
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [query])

    return matches
}
