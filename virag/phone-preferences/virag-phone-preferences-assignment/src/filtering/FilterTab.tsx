import { ChangeEvent } from "react"
interface FilterTabProps { onCountryChange: (country: string) => void }
export const FilterTab = ({ onCountryChange }: FilterTabProps) => {
    const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onCountryChange(event.target.value)
    }
    return (
        <>
            <label htmlFor="country-select">Select a country:</label>
            <select id="country-select" onChange={handleCountryChange} className="shadow-lg">
                <option value="all">All</option>
                <option value="de">Germany</option>
                <option value="it">Italy</option>
                <option value="hu">Hungary</option>
                <option value="nl">Netherlands</option>
            </select>
        </>
    )
}