'use client'

import {useMutation} from '@tanstack/react-query'
import cn from 'clsx'
import type {ComponentProps} from 'react'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'
import {Button} from '@/shared/components/ui/button'
import {Input} from '@/shared/components/ui/input'
import {INVALID_EMAIL_PATTERN, REQUIRED_INPUT_ERROR} from '@/shared/constants/error.constants'
import {EMAIL_PATTERN} from '@/shared/constants/regex.constants'
import {applicationQuery} from '@/shared/queries/application.query'
import type {ApplicationRequest} from '@/shared/types/application.types'
import styles from './application-form.module.scss'

interface Props extends ComponentProps<'form'> {
}

type FormData = ApplicationRequest

export function ApplicationForm({className, ...rest}: Props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<FormData>({
        mode: 'onChange',
    })

    const {mutate, isPending} = useMutation(applicationQuery.create())

    const submit = (data: FormData) => {
        mutate(data, {
            onSuccess: (response) => {
                toast.success(`Заявка отправлена. Номер заявки ${response.uuid}`)
                reset()
            },
            onError: () => toast.error('Не удалось отправить заявку!'),
        })
    }

    return (
        <form
            className={cn(styles['application-form'], className)}
            onSubmit={handleSubmit(submit)}
            noValidate
            aria-label="Запись на приём в DentistAm"
            {...rest}
        >
            <div className={styles['application-form__fields']}>
                <Input
                    {...register('full_name', {
                        required: REQUIRED_INPUT_ERROR,
                    })}
                    required
                    label={'Ваше ФИО'}
                    placeholder={'Иван Иванов'}
                    error={errors?.full_name?.message}
                />
                <Input
                    {...register('email', {
                        required: REQUIRED_INPUT_ERROR,
                        pattern: {
                            value: EMAIL_PATTERN,
                            message: INVALID_EMAIL_PATTERN,
                        },
                    })}
                    required
                    type={'email'}
                    label={'Ваш Email'}
                    inputMode={'email'}
                    placeholder={'example@mail.com'}
                    error={errors?.email?.message}
                />
            </div>

            <div className={styles['application-form__footer']}>
                <Button type={'submit'} isLoading={isPending}>
                    Записаться
                </Button>
            </div>
        </form>
    )
}
