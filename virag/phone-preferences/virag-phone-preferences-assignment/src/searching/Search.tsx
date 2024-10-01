import { ChangeEvent } from "react"
import { ValidPhoneNumber } from "../validation/ValidPhoneNumber";

interface SearchProps {
    onSearch: (query: string) => void,
    onChange: (query: string) => void,
    value: string
}

export const Search = ({ onSearch, onChange, value }: SearchProps) => {
    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        if (ValidPhoneNumber(query)) {
            onSearch(query)
        }
        onChange(query)
    }

    return (
        <input
            name={"search"}
            type={"search"}
            placeholder='Enter a phone number...'
            value={value}
            onChange={searchHandler}
            className="bg-transparent h-10 px-5 w-80 shadow-lg rounded-full text-sm focus:outline-none"
        />
    );
};