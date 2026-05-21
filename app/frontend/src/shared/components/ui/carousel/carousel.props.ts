import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import type useEmblaCarousel from 'embla-carousel-react'
import type { ComponentProps } from 'react'

export type CarouselApi = EmblaCarouselType
export type CarouselOrientation = 'horizontal' | 'vertical'

export interface CarouselProps extends ComponentProps<'div'> {
    options?: EmblaOptionsType
    plugins?: EmblaPluginType[]
    orientation?: CarouselOrientation
    setApi?: (api: CarouselApi) => void
}

export type CarouselArrowProps = ComponentProps<'button'>

export interface CarouselContextValue {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: CarouselApi | undefined
    orientation: CarouselOrientation
    canScrollPrev: boolean
    canScrollNext: boolean
    scrollPrev: () => void
    scrollNext: () => void
}
