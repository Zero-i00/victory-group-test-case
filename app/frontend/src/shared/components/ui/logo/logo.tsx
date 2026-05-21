import Image from 'next/image'
import {APP_TITLE} from '@/shared/constants/root.constants'
import type {LogoProps} from './logo.props'

export function Logo({priority = true, alt = APP_TITLE, ...rest}: LogoProps) {
    return (
        <Image
            data-slot={'logo'}
            priority={priority}
            width={180}
            height={42}
            src={'/images/logo.webp'}
            alt={alt}
            {...rest}
        />
    )
}
