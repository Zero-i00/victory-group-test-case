import cn from 'clsx'
import {LoaderCircle} from 'lucide-react'
import styles from './loader.module.scss'
import type {LoaderProps} from './loader.props'

export function Loader({className, ...rest}: LoaderProps) {
    return (
        <div
            data-slot={'loader'}
            role="status"
            className={cn(styles.loader, className)}
            aria-label="Загрузка"
            {...rest}
        >
            <LoaderCircle className={styles.loader__icon}/>
        </div>
    )
}
