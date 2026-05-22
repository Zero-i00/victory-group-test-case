'use client'

import { createContext, useContext } from 'react'
import type { CarouselContextValue } from './carousel.props'

export const CarouselContext = createContext<CarouselContextValue | null>(null)

export function useCarouselContext(): CarouselContextValue {
    const context = useContext(CarouselContext)
    if (!context) throw new Error('useCarousel must be used within <Carousel />')
    return context
}
