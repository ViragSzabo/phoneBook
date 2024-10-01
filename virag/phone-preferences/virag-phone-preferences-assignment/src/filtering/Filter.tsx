import PhoneNumber from "../content/PhoneNumber"
import { getCountryCode } from "./CountryCode"

interface FilterProps {
    list: string[],
    selectedCountry: string,
    onRemove: (phone: string) => void
}

export default function Filter({ list, selectedCountry, onRemove }: FilterProps) {
    const { dePhones, itPhones, huPhones, nlPhones } = getCountryCode(list)
    let filteredPhones: string[] = []
    switch (selectedCountry) {
        case 'de':
            filteredPhones = dePhones
            break;
        case 'it':
            filteredPhones = itPhones
            break;
        case 'hu':
            filteredPhones = huPhones
            break;
        case 'nl':
            filteredPhones = nlPhones
            break;
        default:
            filteredPhones = list
    }
    return (
        <div>
            {filteredPhones.length === 0 ? (
                <p className="text-gray-500">No phone numbers found.</p>
            ) : (
                <PhoneNumber list={filteredPhones} onRemove={onRemove} />
            )}
        </div>
    )
}