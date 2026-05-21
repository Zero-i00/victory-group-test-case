import type {ComponentProps} from 'react'

export interface InputProps extends ComponentProps<'input'> {
    label?: string
    hint?: string
    error?: string
    container?: ComponentProps<'div'>
}
