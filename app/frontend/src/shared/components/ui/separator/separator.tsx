import cn from 'clsx'
import styles from './separator.module.scss'
import type {SeparatorProps} from './separator.props'

export function Separator({className, ...rest}: SeparatorProps) {
    return <hr tabIndex={0} aria-orientation={'horizontal'} className={cn(styles.separator, className)} {...rest} />
}
