import type {ComponentProps, ReactNode} from 'react'

export interface ModalProps extends Omit<ComponentProps<'dialog'>, 'onCancel' | 'onClose' | 'title'> {
    isOpen: boolean
    onClose: () => void

    /** Если передан — рендерится header с h2 + кнопка X, dialog получает aria-labelledby. */
    title?: string

    children: ReactNode
}
