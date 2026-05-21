import Image from 'next/image'
import type {LogoProps} from './logo.props'

export function Logo({preload = true, fetchPriority = 'high', ...rest}: LogoProps) {
    return <Image preload={preload} fetchPriority={fetchPriority} width={180} height={42} src={'/images/logo.webp'} alt="" {...rest} />
}
