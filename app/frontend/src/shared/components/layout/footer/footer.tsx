import {Clock, MapPin, MessageCircle, Phone} from 'lucide-react'
import {
    CLINIC_ADDRESS,
    CLINIC_HOURS_WEEKDAYS,
    CLINIC_HOURS_WEEKEND,
    CLINIC_PHONE,
    CLINIC_PHONE_TEL,
    CLINIC_WHATSAPP,
} from '@/shared/constants/seo.constants'
import styles from './footer.module.scss'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles['footer']}>
            <div className="container">
                <h2 className="sr-only">Контакты</h2>
                <div className={styles['footer__grid']}>
                    <address className={styles['footer__contacts']}>
                        <div className={styles['footer__contact-item']}>
                            <MapPin size={20} aria-hidden="true" className={styles['footer__icon']} />
                            <span>{CLINIC_ADDRESS}</span>
                        </div>
                        <div className={styles['footer__contact-item']}>
                            <Phone size={20} aria-hidden="true" className={styles['footer__icon']} />
                            <a href={`tel:${CLINIC_PHONE_TEL}`} className={styles['footer__link']}>
                                {CLINIC_PHONE}
                            </a>
                        </div>
                        <nav className={styles['footer__nav']} aria-label="Дополнительные ссылки">
                            <a href="#" className={styles['footer__link']}>Полезные статьи</a>
                            <a href="#" className={styles['footer__link']}>Правовая информация</a>
                        </nav>
                    </address>
                    <div className={styles['footer__right']}>
                        <div className={styles['footer__contact-item']}>
                            <MessageCircle size={20} aria-hidden="true" className={styles['footer__icon']} />
                            <a
                                href={CLINIC_WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles['footer__link']}
                            >
                                Напишите нам в WhatsApp
                            </a>
                        </div>
                        <div className={styles['footer__contact-item']}>
                            <Clock size={20} aria-hidden="true" className={styles['footer__icon']} />
                            <div className={styles['footer__hours']}>
                                <span>{CLINIC_HOURS_WEEKDAYS}</span>
                                <span>{CLINIC_HOURS_WEEKEND}</span>
                            </div>
                        </div>
                        <nav className={styles['footer__nav']} aria-label="Правовые ссылки">
                            <a href="#" className={styles['footer__link']}>Сертификаты сотрудников</a>
                            <a href="#" className={styles['footer__link']}>Политика конфиденциальности</a>
                        </nav>
                    </div>
                </div>
                <div className={styles['footer__bottom']}>
                    <small className={styles['footer__copyright']}>
                        © {year} DentistAm. Все права защищены.
                    </small>
                </div>
            </div>
        </footer>
    )
}
