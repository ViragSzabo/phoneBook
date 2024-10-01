import Button from "../menu/Button"
import { Search } from "./Search"
import { useEffect, useState } from "react"
import { FilterTab } from "../filtering/FilterTab"
import useDebounce from "./Debounced"
import { PhoneList } from "../content/PhoneList"

export const SearchBar = () => {
    const initialPhoneList = PhoneList()
    const [phoneNumbers, setPhoneNumbers] = useState(initialPhoneList)
    const [filteredResults, setFilteredResults] = useState(initialPhoneList)
    const [selectedCountry, setSelectedCountry] = useState('all')
    const [inputValue, setInputValue] = useState('')
    const debouncedInputValue = useDebounce<string>(inputValue, 100);

    useEffect(() => {
        const lowercasedQuery = inputValue.toLowerCase();
        const countryFilteredNumbers = selectedCountry === 'all'
            ? phoneNumbers
            : phoneNumbers.filter(phoneNumber => phoneNumber.startsWith(selectedCountry));

        const finalResults = countryFilteredNumbers.filter(phoneNumber =>
            phoneNumber.toLowerCase().includes(lowercasedQuery)
        )
        setFilteredResults(finalResults)
    }, [phoneNumbers, selectedCountry, debouncedInputValue, inputValue])

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country)
        setInputValue('')
    }

    const handleInputChange = (value: string) => {
        setInputValue(value)
    }

    const handleAdd = () => {
        if (inputValue && !filteredResults.includes(inputValue)) {
            const updatedNumbers = [...filteredResults, inputValue]
            setPhoneNumbers(updatedNumbers)
            setInputValue('')
        }
    }

    const handleRemove = (removedPhoneNumber: string) => {
        const updatedNumbers = filteredResults.filter(phone => phone !== removedPhoneNumber)
        setPhoneNumbers(updatedNumbers)
    }

    const filteredPhones = selectedCountry === 'all' ? filteredResults : filteredResults.filter(phone => phone.startsWith(selectedCountry))

    return (
        <div className="text-gray-600 w-full p-4 bg-zinc-100 rounded-md shadow-lg">
            <div className="flex flex-row items-center space-x-4 p-5">
                <Search
                    onSearch={() => { }}
                    onChange={handleInputChange}
                    value={debouncedInputValue}
                />
                <Button text="Add" onClick={handleAdd} />
                <FilterTab onCountryChange={handleCountryChange} />
            </div>
            <div className="flex flex-wrap">
                {filteredPhones.length === 0 ? (
                    <p className="text-gray-500">No phone numbers found.</p>
                ) : (
                    filteredPhones.map((data, index) => {
                        const formattedNumber = data.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                        return (
                            <div
                                key={index}
                                className="group shadow shadow-md m-5 p-3 w-1/4 hover:bg-zinc-300 hover:shadow-lg cursor-pointer"
                                onClick={() => handleRemove(data)}
                            >
                                <p className="ml-2 text-sm antialiased font-mono text-neutral-500 group-hover:text-neutral-900">
                                    {formattedNumber}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}