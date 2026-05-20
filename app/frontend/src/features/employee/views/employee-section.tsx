'use client'

import {useSuspenseInfiniteQuery} from '@tanstack/react-query'
import type {ComponentProps} from 'react'
import {employeeQuery} from '@/features/employee/queries/employee.query'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function EmployeeSection({id = SECTION_CONFIG.EMPLOYEE, ...rest}: ComponentProps<'section'>) {
    const {data} = useSuspenseInfiniteQuery(employeeQuery.list())

    console.log(data)

    return (
        <section id={id} {...rest}>
            {data?.map((item) => (
                <p key={item.id}>{item.full_name}</p>
            ))}
        </section>
    )
}
