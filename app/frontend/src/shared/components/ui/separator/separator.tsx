import cn from 'clsx'
import styles from './separator.module.scss'
import type {SeparatorProps} from './separator.props'

export function Separator({className, ...rest}: SeparatorProps) {
    return <hr data-slot={'separator'} className={cn(styles.separator, className)} {...rest} />
}
