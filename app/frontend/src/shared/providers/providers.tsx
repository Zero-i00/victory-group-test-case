'use client'

import dynamic from 'next/dynamic'
import type {PropsWithChildren} from 'react'
import {QueryProvider} from '@/shared/providers/query'

const Toaster = dynamic(() => import('react-hot-toast').then(m => ({default: m.Toaster})), {ssr: false})

export function Providers({children}: PropsWithChildren) {
    return (
        <QueryProvider>
            {children}
            <Toaster position={'top-right'}/>
        </QueryProvider>
    )
}
