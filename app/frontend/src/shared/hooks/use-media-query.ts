'use client'

import { useEffect, useState } from 'react'

const IS_SERVER = typeof window === 'undefined'

export function useMediaQuery(query: string, defaultValue = false): boolean {
    const [matches, setMatches] = useState<boolean>(() =>
        IS_SERVER ? defaultValue : window.matchMedia(query).matches
    )

    useEffect(() => {
        const mq = window.matchMedia(query)
        const handler = () => setMatches(mq.matches)
        handler()
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [query])

    return matches
}
