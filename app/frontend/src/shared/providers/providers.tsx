'use client'

import type {PropsWithChildren} from 'react'
import {Toaster} from 'react-hot-toast'
import {QueryProvider} from '@/shared/providers/query/query-provider'

export function Providers({children}: PropsWithChildren) {
    return (
        <QueryProvider>
            {children}
            <Toaster position={'top-right'}/>
        </QueryProvider>
    )
}
