import {Fragment} from 'react'
import {AboutSection} from '@/features/about'
import {EmployeeSection} from '@/features/employee'
import {HeroSection} from '@/features/hero/'
import {ProductSection} from '@/features/product'
import {ReviewSection} from '@/features/review'

export default function Home() {
    return (
        <Fragment>
            <HeroSection/>
            <ProductSection/>
            <EmployeeSection/>
            <AboutSection/>
            <ReviewSection/>
        </Fragment>
    )
}
