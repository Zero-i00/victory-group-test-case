'use client'

import cn from 'clsx'
import {forwardRef, type Ref} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import type {InputProps} from './input.props'
import styles from './input.module.scss'

function InputInner(
    {
        id,
        type,
        hint,
        error,
        container,
        className,
        placeholder,
        disabled = false,
        required = false,
        ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>,
) {
    const hintId = hint && id ? `${id}-hint` : undefined
    const errorId = error && id ? `${id}-error` : undefined
    const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined

    const label = required ? `${placeholder} *` : placeholder

    return (
        <div {...container} className={cn(styles.input__container, container?.className)}>
            <div className={cn(styles.input__wrapper, error && styles['input__wrapper--error'])}>
                <input
                    id={id}
                    ref={ref}
                    type={type}
                    aria-label={label}
                    required={required}
                    placeholder={label}
                    aria-invalid={!!error}
                    aria-describedby={describedBy}
                    disabled={disabled}
                    className={cn(styles.input, className)}
                    {...rest}
                />
            </div>
            {hint && <Typography as="p" variant="caption" id={hintId} className={styles.input__hint}>{hint}</Typography>}
            {error && <Typography as="p" variant="caption" id={errorId} className={styles.input__error}>{error}</Typography>}
        </div>
    )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputInner)
Input.displayName = 'Input'
