'use client'

import {useSuspenseInfiniteQuery} from '@tanstack/react-query'
import cn from 'clsx'
import type {ComponentProps} from 'react'
import {EmployeeCard} from '@/features/employee/components/elements/employee-card'
import {employeeQuery} from '@/features/employee/queries/employee.query'
import {SectionCaption} from '@/shared/components/elements/section-caption'
import {Button} from '@/shared/components/ui/button'
import {Typography} from '@/shared/components/ui/typography'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import styles from './employee-section.module.scss'

export function EmployeeSection({className, id = SECTION_CONFIG.EMPLOYEE, ...rest}: ComponentProps<'section'>) {
    const {data, hasNextPage, fetchNextPage, isFetchingNextPage} = useSuspenseInfiniteQuery(
        employeeQuery.list({page: 1, per_page: 3}),
    )

    const handleLoadMore = async () => {
        if (!hasNextPage || isFetchingNextPage) return

        await fetchNextPage()
    }

    return (
        <section id={id} className={cn(styles['employee-section'], className)} {...rest}>
            <div className={cn(`container`, styles['employee-section__wrapper'])}>
                <div className={styles['employee-section__header']}>
                    <div className={styles['employee-section__header-title']}>
                        <SectionCaption text={'Наши специалисты'}/>
                        <Typography variant={'h2'} className={styles['employee-section__heading']}>
                            <Typography
                                variant={'h2'}
                                as={'span'}
                                className={styles['employee-section__heading-accent']}
                            >
                                Познакомьтесь
                            </Typography>
                            <br/>с нашими врачами
                        </Typography>
                    </div>
                    <Typography variant={'body-1'} className={styles['employee-section__header-description']}>
                        Наш административный и вспомогательный персонал
                        <strong> обладает всеми необходимыми навыками работы с людьми </strong>и обучен, чтобы помочь
                        вам со всеми медицинскими вопросами
                    </Typography>
                </div>
                <div className={styles['employee-section__content']}>
                    {data.map((employee) => (
                        <EmployeeCard key={employee.id} employee={employee}/>
                    ))}
                </div>
                <div className={styles['employee-section__footer']}>
                    {hasNextPage && (
                        <Button size={'xl'} onClick={handleLoadMore} isLoading={isFetchingNextPage}>
                            Показать ещё
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}
