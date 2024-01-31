import { fireEvent, screen } from "@testing-library/react"

const locationInput = ({ streetNo, cityname, postCode, countryname }) => {
    const street = screen.getByLabelText("Street, number")
    const city = screen.getByLabelText("City")
    const postal = screen.getByLabelText("Postal")
    const country = screen.getByLabelText("Country")

    if(streetNo) {
        fireEvent.change(street, { target: { value: streetNo } })
    }
    if(cityname) {
        fireEvent.change(city, { target: { value: cityname } })
    }
    if(postCode) {
        fireEvent.change(postal, { target: { value: postCode } })
    }
    if(countryname) {
        fireEvent.change(country, { target: { value: countryname } })
    }

    return { street, city, postal, country }
}

export { locationInput }