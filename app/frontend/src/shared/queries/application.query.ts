import type {UseMutationOptions} from '@tanstack/react-query'
import {applicationService} from '@/shared/services/application.service'
import type {ApplicationRequest, ApplicationResponse} from '@/shared/types/application.types'

class ApplicationQuery {
    public readonly BASE_KEY = 'application'

    create(): UseMutationOptions<ApplicationResponse, Error, ApplicationRequest> {
        return {
            mutationKey: [this.BASE_KEY],
            mutationFn: (data) => applicationService.create(data),
        }
    }
}

export const applicationQuery = new ApplicationQuery()
