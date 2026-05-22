import type {ReactNode} from 'react'

export interface ModalProps {
    /** Должен совпадать с popovertarget на кнопке-триггере снаружи. */
    id: string

    /** Если передан — рендерится header с h2 + кнопка X. aria-labelledby привязывается автоматически. */
    title?: string

    children: ReactNode
}
