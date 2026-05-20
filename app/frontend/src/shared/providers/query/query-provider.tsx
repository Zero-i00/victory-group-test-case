import type {PropsWithChildren} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {getQueryClient} from "@/shared/providers/query/query-client";

export function QueryProvider({children}: PropsWithChildren) {
    const queryClient = getQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}