import cn from 'clsx'
import {Clock} from 'lucide-react'
import type {ComponentProps} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import {SCHEMA} from '@/shared/constants/schema.constants'
import {CLINIC_WORKING_HOURS_SPEC, HUMAN_DAY_LABELS, SCHEMA_DAY_MAP} from '@/shared/constants/seo.constants'
import styles from './footer-hours.module.scss'

interface Props extends ComponentProps<'div'> {}

export function FooterHours({className, ...rest}: Props) {
    return (
        <div className={cn(styles['footer-hours'], className)} {...rest}>
            <Clock className={styles['footer-hours__icon']} aria-hidden="true"/>
            <div className={styles['footer-hours__content']}>
                {CLINIC_WORKING_HOURS_SPEC.map((spec) => (
                    <div
                        key={`${spec.days[0]}-${spec.opens}`}
                        itemProp="openingHoursSpecification"
                        itemScope
                        itemType={SCHEMA.OpeningHoursSpecification}
                    >
                        {spec.days.map((d) => (
                            <meta key={d} itemProp="dayOfWeek" content={`https://schema.org/${SCHEMA_DAY_MAP[d]}`} />
                        ))}
                        <meta itemProp="opens" content={spec.opens} />
                        <meta itemProp="closes" content={spec.closes} />
                        <Typography variant="body-1">
                            {spec.days[0] === 'Mo' ? HUMAN_DAY_LABELS.weekdays : HUMAN_DAY_LABELS.weekend}{' '}
                            {spec.opens}—{spec.closes}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}
