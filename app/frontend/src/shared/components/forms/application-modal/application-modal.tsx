import {ApplicationForm} from '@/shared/components/forms/application-form'
import {Modal} from '@/shared/components/ui/modal'

interface Props {
    isOpen: boolean
    onClose: () => void
}

export function ApplicationModal({isOpen, onClose}: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Запись на приём в DentistAm">
            <ApplicationForm/>
        </Modal>
    )
}
