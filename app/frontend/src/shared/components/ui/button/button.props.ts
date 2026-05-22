import type {ComponentProps} from 'react'

export type ButtonVariant = 'default' | 'outline' | 'icon'

// TODO можно вынести в универсальный тип BaseSize, который будет применяться не только к кнопке, но и к другим компонентам
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends ComponentProps<'button'> {
    /** @default false */
    isLoading?: boolean

    /** @default 'md' */
    size?: ButtonSize

    /** @default 'default' */
    variant?: ButtonVariant
}
