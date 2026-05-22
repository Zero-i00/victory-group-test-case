import {ApplicationForm} from '@/shared/components/forms/application-form'
import {Modal} from '@/shared/components/ui/modal'

interface Props {
    /** @default 'application-modal' */
    id?: string
}

export function ApplicationModal({id = 'application-modal'}: Props) {
    return (
        <Modal id={id} title="Запись на приём в DentistAm">
            <ApplicationForm/>
        </Modal>
    )
}
