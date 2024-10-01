export const ValidPhoneNumber = (value: string) => {
    const countryCode = ("^\\+[1-9]{1}[0-9]{0,2}")
    const areaCode = ("[2-9]{1}[0-9]{2}")
    const telPrefix = ("[2-9]{1}[0-9]{2}")
    const line = ("[0-9]{4}$")
    const regexPattern = new RegExp(countryCode + areaCode + telPrefix + line)
    return regexPattern.test(value)
}