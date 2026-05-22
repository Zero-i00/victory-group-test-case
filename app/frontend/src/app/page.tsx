import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {Suspense} from 'react'
import {AboutSection} from '@/features/about'
import {EmployeeSection} from '@/features/employee'
import {employeeQuery} from '@/features/employee/queries/employee.query'
import {HeroSection} from '@/features/hero'
import {ProductSection} from '@/features/product'
import {productQuery} from '@/features/product/queries/product.query'
import {ReviewSection} from '@/features/review'
import {reviewQuery} from '@/features/review/queries/review.query'
import {ApplicationModal} from '@/shared/components/forms/application-modal'
import {getQueryClient} from '@/shared/providers/query'
import {Loader} from '@/shared/components/ui/loader'

export default async function Home() {
    const queryClient = getQueryClient()

    await Promise.all([
        queryClient.prefetchInfiniteQuery(productQuery.list()),
        queryClient.prefetchInfiniteQuery(employeeQuery.list({page: 1, per_page: 3})),
        queryClient.prefetchInfiniteQuery(reviewQuery.list()),
    ])

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HeroSection/>
            <Suspense fallback={<Loader/>}>
                <ProductSection/>
            </Suspense>
            <Suspense fallback={<Loader/>}>
                <EmployeeSection/>
            </Suspense>
            <AboutSection/>
            <Suspense fallback={<Loader/>}>
                <ReviewSection/>
            </Suspense>
            <ApplicationModal/>
        </HydrationBoundary>
    )
}
