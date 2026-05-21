import {
    CLINIC_ADDRESS,
    CLINIC_GEO,
    CLINIC_PHONE_TEL,
    CLINIC_NAME,
    SEO_DESCRIPTION,
    SITE_URL,
} from '@/shared/constants/seo.constants'

export function dentistSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': ['MedicalBusiness', 'Dentist'],
        name: CLINIC_NAME,
        description: SEO_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        telephone: CLINIC_PHONE_TEL,
        priceRange: '$$',
        medicalSpecialty: ['Dentistry'],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'ул. Перерва, д. 39, 2 этаж',
            addressLocality: 'Москва',
            addressCountry: 'RU',
            description: CLINIC_ADDRESS,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: CLINIC_GEO.lat,
            longitude: CLINIC_GEO.lng,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '21:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '10:00',
                closes: '20:00',
            },
        ],
    }
}

export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: CLINIC_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon`,
    }
}

export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: CLINIC_NAME,
        url: SITE_URL,
        inLanguage: 'ru-RU',
        description: SEO_DESCRIPTION,
    }
}
