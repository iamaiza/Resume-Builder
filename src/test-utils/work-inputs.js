import { fireEvent, screen } from "@testing-library/react"; 

const workInputs = ({ companyname, jobtitle, cityname, countryname, startdate, enddate }) => {
    const companyName = screen.getByPlaceholderText("Company Name")
    const jobTitle = screen.getByPlaceholderText("Job Title")
    const city = screen.getByPlaceholderText("City")
    const country = screen.getByPlaceholderText("Country")
    const startDate = screen.getByPlaceholderText("From")
    const endDate = screen.getByPlaceholderText("To")
    // const wrapper = document.getElementById("work")
    // const desc = wrapper.querySelector(".ql-editor")

    if(companyname) {
        fireEvent.change(companyName, { target: { value: companyname } })
    }
    if(jobtitle) {
        fireEvent.change(jobTitle, { target: { value: jobtitle } })
    }
    if(cityname) {
        fireEvent.change(city, { target: { value: cityname } })
    }
    if(countryname) {
        fireEvent.change(country, { target: { value: countryname } })
    }
    if(startdate) {
        fireEvent.change(startDate, { target: { value: startdate } })
    }
    if(enddate) {
        fireEvent.change(endDate, { target: { value: enddate } })
    }
    // if(workdesc) {
        
    //     fireEvent.change(desc, { target: { textContent: workdesc } })
    // }

    return { companyName, jobTitle, city, country, startDate, endDate }
}

export { workInputs }