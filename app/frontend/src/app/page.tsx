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
import {JsonLd} from '@/shared/components/seo/json-ld'
import {dentistSchema, organizationSchema, websiteSchema} from '@/shared/configs/structured-data.config'
import {getQueryClient} from '@/shared/providers/query'

export default async function Home() {
    const queryClient = getQueryClient()

    await Promise.all([
        queryClient.prefetchInfiniteQuery(productQuery.list()),
        queryClient.prefetchInfiniteQuery(employeeQuery.list({page: 1, per_page: 3})),
        queryClient.prefetchInfiniteQuery(reviewQuery.list()),
    ])

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <JsonLd data={dentistSchema()} />
            <JsonLd data={organizationSchema()} />
            <JsonLd data={websiteSchema()} />
            <Suspense fallback={null}>
                <HeroSection/>
                <ProductSection/>
                <EmployeeSection/>
                <AboutSection/>
                <ReviewSection/>
            </Suspense>
        </HydrationBoundary>
    )
}
