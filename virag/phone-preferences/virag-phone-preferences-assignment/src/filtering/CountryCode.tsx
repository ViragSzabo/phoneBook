import { CategorizedPhoneNumbers, CountryCodes } from "./CC"

export const getCountryCode = (list: string[]): CategorizedPhoneNumbers => {
    const invalidPhones: string[] = []
    const categorizedPhoneNumbers: CategorizedPhoneNumbers = { de: [], it: [], nl: [], hu: [] }

    for (const phone of list) {
        let matched = false
        for (const [key, code] of Object.entries(CountryCodes)) {
            if (phone.startsWith(code)) {
                categorizedPhoneNumbers[key].push(phone)
                matched = true
                break
            }
        }
        if (!matched) {
            invalidPhones.push(phone)
        }
    }

    if (invalidPhones.length > 0) {
        console.warn(`Invalid country codes for numbers: ${invalidPhones.join(',')}`)
    }
    return categorizedPhoneNumbers
}