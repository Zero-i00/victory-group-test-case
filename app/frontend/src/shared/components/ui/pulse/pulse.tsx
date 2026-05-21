import cn from 'clsx'
import styles from './pulse.module.scss'
import type {PulseProps} from './pulse.props'

export function Pulse({className, ...rest}: PulseProps) {
    return <span aria-hidden="true" className={cn(styles.pulse, className)} {...rest} />
}
