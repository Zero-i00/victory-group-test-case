import {infiniteQueryOptions} from '@tanstack/react-query'
import {employeeService} from '@/features/employee/services/employee.service'
import type {EmployeeRequest} from '@/features/employee/types/employee.types'

class EmployeeQuery {
    public readonly BASE_KEY = 'employee'

    list(meta: EmployeeRequest = {}) {
        return infiniteQueryOptions({
            queryKey: [this.BASE_KEY, meta],
            queryFn: ({pageParam}) => employeeService.list({...meta, page: pageParam}),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => {
                if (lastPage.page >= lastPage.pages) return undefined

                return lastPage.page + 1
            },
            select: (data) => data.pages.flatMap((page) => page.items),
        })
    }
}

export const employeeQuery = new EmployeeQuery()
