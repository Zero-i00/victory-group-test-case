import cn from 'clsx'
import {Loader} from '@/shared/components/ui/loader'
import styles from './button.module.scss'
import type {ButtonProps} from './button.props'

export function Button({
                           children,
                           className,
                           size = 'md',
                           type = 'button',
                           disabled = false,
                           isLoading = false,
                           variant = 'default',
                           ...rest
                       }: ButtonProps) {
    return (
        <button
            type={type}
            aria-busy={isLoading}
            disabled={disabled || isLoading}
            aria-disabled={disabled || isLoading}
            className={cn(styles.button, styles[`button--${size}`], styles[`button--${variant}`], className)}
            {...rest}
        >
            {isLoading ? <Loader/> : children}
        </button>
    )
}
