'use client'

import cn from 'clsx'
import {X} from 'lucide-react'
import {type MouseEvent, type SyntheticEvent, useEffect, useId, useRef} from 'react'
import {Button} from '@/shared/components/ui/button'
import styles from './modal.module.scss'
import type {ModalProps} from './modal.props'

export function Modal({isOpen, onClose, title, children, className, ...rest}: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const titleId = useId()

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        if (isOpen && !dialog.open) {
            dialog.showModal()
        } else if (!isOpen && dialog.open) {
            dialog.close()
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [isOpen])

    const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
        // Без preventDefault браузер закроет dialog сам, минуя React-state → isOpen рассинхронизируется
        event.preventDefault()
        onClose()
    }

    const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
        if (event.target === dialogRef.current) onClose()
    }

    return (
        <dialog
            ref={dialogRef}
            className={cn(styles.modal, className)}
            aria-labelledby={title ? titleId : undefined}
            onCancel={handleCancel}
            onClick={handleBackdropClick}
            {...rest}
        >
            <div className={styles['modal__content']}>
                {title && (
                    <header className={styles['modal__header']}>
                        <h2 id={titleId} className={styles['modal__title']}>
                            {title}
                        </h2>
                        <Button
                            type="button"
                            variant="icon"
                            size="md"
                            aria-label="Закрыть"
                            onClick={onClose}
                            className={styles['modal__close']}
                        >
                            <X aria-hidden="true" className={styles['modal__icon']}/>
                        </Button>
                    </header>
                )}

                <div className={styles['modal__body']}>{children}</div>
            </div>
        </dialog>
    )
}
