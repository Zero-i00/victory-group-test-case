'use client'

import {useEffect, useRef, useState} from 'react'

export function useIntersectionObserver<T extends Element>(threshold = 0.1) {
    const ref = useRef<T>(null)
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true)
                    observer.disconnect()
                }
            },
            {threshold},
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return [ref, isRevealed] as const
}
