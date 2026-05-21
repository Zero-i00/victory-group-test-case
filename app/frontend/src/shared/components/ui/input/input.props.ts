import type {ComponentProps} from 'react'

export interface InputProps extends ComponentProps<'input'> {
    hint?: string
    error?: string
    container?: ComponentProps<'div'>
}
