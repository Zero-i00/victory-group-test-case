'use client'

import {QueryClientProvider} from '@tanstack/react-query'
import {type PropsWithChildren, useState} from 'react'
import {getQueryClient} from '@/shared/providers/query/query-client'

export function QueryProvider({children}: PropsWithChildren) {
    const [client] = useState(() => getQueryClient())

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
