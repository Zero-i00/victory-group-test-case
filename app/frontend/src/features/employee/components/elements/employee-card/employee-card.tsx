'use client'

import cn from 'clsx'
import { ChevronRight, UserRound } from 'lucide-react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import type { Employee } from '@/features/employee/types/employee.types'
import { Button } from '@/shared/components/ui/button'
import type { CardProps } from '@/shared/components/ui/card'
import { Card } from '@/shared/components/ui/card'
import { Typography } from '@/shared/components/ui/typography'
import { SERVER_URL } from '@/shared/constants/root.constants'
import styles from './employee-card.module.scss'

interface Props extends CardProps {
    employee: Employee
}

export function EmployeeCard({ employee, className, ...rest }: Props) {
    return (
        <Card className={cn(styles['employee-card'], className)} {...rest}>
            <Card.Header>
                <div className={styles['employee-card__media']}>
                    {employee.photo ? (
                        <Image
                            fill
                            unoptimized
                            alt={employee.full_name}
                            src={`${SERVER_URL + employee.photo}`}
                            sizes={'(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
                            className={styles['employee-card__image']}
                        />
                    ) : (
                        <div className={styles['employee-card__photo-fallback']} aria-hidden="true">
                            <UserRound size={48} />
                        </div>
                    )}
                </div>
            </Card.Header>
            <Card.Content className={styles['employee-card__content']}>
                <Card.Title className={styles['employee-card__title']}>{employee.full_name}</Card.Title>
                <Typography variant={'body-1'} className={styles['employee-card__staff']}>
                    {employee.staff.title}
                </Typography>
                <Card.Description>{employee.description}</Card.Description>
            </Card.Content>
            <Card.Footer>
                <Button
                    size={'xl'}
                    variant={'outline'}
                    aria-label={`Подробнее о ${employee.full_name}`}
                    className={styles['employee-card__about']}
                    onClick={() => toast.success(`Какая-то информация`)}
                >
                    Подробнее
                    <ChevronRight aria-hidden="true" />
                </Button>
            </Card.Footer>
        </Card>
    )
}
