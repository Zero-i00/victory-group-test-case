import {X} from 'lucide-react'
import styles from './modal.module.scss'
import type {ModalProps} from './modal.props'

export function Modal({id, title, children}: ModalProps) {
    const titleId = `${id}-title`

    return (
        <dialog
            id={id}
            popover="auto"
            className={styles.modal}
            aria-labelledby={title ? titleId : undefined}
        >
            <div className={styles['modal__content']}>
                {title && (
                    <header className={styles['modal__header']}>
                        <h2 id={titleId} className={styles['modal__title']}>
                            {title}
                        </h2>
                        <button
                            type="button"
                            popoverTarget={id}
                            popoverTargetAction="hide"
                            aria-label="Закрыть"
                            className={styles['modal__close']}
                        >
                            <X aria-hidden="true" className={styles['modal__icon']}/>
                        </button>
                    </header>
                )}

                <div className={styles['modal__body']}>{children}</div>
            </div>
        </dialog>
    )
}
