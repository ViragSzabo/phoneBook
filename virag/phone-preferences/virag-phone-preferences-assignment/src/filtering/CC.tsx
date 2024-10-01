export const CountryCodes: Record<string, string> = { 
    de: "+49", 
    it: "+39", 
    nl: "+31", 
    hu: "+36" 
}

export interface CategorizedPhoneNumbers {
    de: string[],
    it: string[],
    nl: string[],
    hu: string[]
}