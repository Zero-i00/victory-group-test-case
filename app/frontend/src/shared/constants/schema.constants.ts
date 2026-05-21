const BASE = 'https://schema.org/'

export const SCHEMA = {
    Dentist: `${BASE}Dentist`,
    WebPage: `${BASE}WebPage`,
    PostalAddress: `${BASE}PostalAddress`,
    GeoCoordinates: `${BASE}GeoCoordinates`,
    OpeningHoursSpecification: `${BASE}OpeningHoursSpecification`,
    ContactPoint: `${BASE}ContactPoint`,
    Service: `${BASE}Service`,
    ItemList: `${BASE}ItemList`,
    MedicalProcedure: `${BASE}MedicalProcedure`,
    Physician: `${BASE}Physician`,
    Review: `${BASE}Review`,
    Person: `${BASE}Person`,
    Place: `${BASE}Place`,
    ImageObject: `${BASE}ImageObject`,
} as const
