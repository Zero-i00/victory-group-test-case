'use client'

import cn from 'clsx'
import {forwardRef, type Ref, useId} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import styles from './input.module.scss'
import type {InputProps} from './input.props'

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        id,
        type,
        label,
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
    const generatedId = useId()
    const inputId = id ?? generatedId

    const hintId = hint ? `${inputId}-hint` : undefined
    const errorId = error ? `${inputId}-error` : undefined
    const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined

    return (
        <div data-slot={'input'} className={cn(styles.input__container, container?.className)} {...container}>
            {label && (
                <label htmlFor={inputId} className={styles.input__label}>
                    {label}
                    {required && <span aria-hidden="true"> *</span>}
                </label>
            )}
            <div className={cn(styles.input__wrapper, error && styles['input__wrapper--error'])}>
                <input
                    id={inputId}
                    ref={ref}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    aria-describedby={describedBy}
                    disabled={disabled}
                    className={cn(styles.input, className)}
                    {...rest}
                />
            </div>
            {hint && (
                <Typography as="p" variant="caption" id={hintId} className={styles.input__hint}>
                    {hint}
                </Typography>
            )}
            {error && (
                <Typography as="p" variant="caption" id={errorId} className={styles.input__error}>
                    {error}
                </Typography>
            )}
        </div>
    )
})
Input.displayName = 'Input'
