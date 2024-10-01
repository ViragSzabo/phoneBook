import { FC, ReactNode } from "react"
import { Button } from "react-native";
import {} from "./LearnMore"
const SelectInternal: FC<{ children?: ReactNode }> = ({ children }) => {
    return <select>{children}</select>
}

const Option: FC<{
    value?: string;
    children?: ReactNode;
}> = ({ value, children }) => {
    function LearnMore(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <Button onPress={LearnMore} title="Learn More" color="#841584" accessibilityLabel="Learning" />
            <option value={value}>{children}</option>
        </>
    )
};

const Select = Object.assign(SelectInternal, { Option })

export { Select }