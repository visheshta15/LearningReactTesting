import Application from "./Application";
import { render, screen } from '@testing-library/react'

describe('Application getByRole', ()=>{
    test('render correctly', ()=>{
        render(<Application />)

        // const pageHeading = screen.getByRole('heading', {
        //     // name: 'Job application form'
        // })
        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()

        // const sectionHeading = screen.getByRole('heading', {
        //     name: 'Section 1',
        // })
        const sectionHeading = screen.getByRole('heading', {
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: "Name",
        })
        expect(nameElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button', {
            pressed: true
        })
        expect(submitButtonElement).toBeInTheDocument()
    })
})


describe('Application getByLabelText', ()=>{
    test('render corectly', ()=>{
        render(<Application />)

        // if two different elements have same lable name , selector: "input"
        const nameElement = screen.getByLabelText("Name", {
            selector: "input"
        })
        expect(nameElement).toBeInTheDocument()

        const termsElement = screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement).toBeInTheDocument()
    })
})


describe('Application getByPlaceholderText', ()=>{
    test('render corectly', ()=>{
        render(<Application />)
        const nameElement = screen.getByPlaceholderText('your description')
        expect(nameElement).toBeInTheDocument()
    })
})

describe('Application getByText', ()=>{
    test('render corectly', ()=>{
        render(<Application />)

        const elementText = screen.getByText("I am visheshta kushwaha", {
            selector: "p"
        })
        expect(elementText).toBeInTheDocument()
    })
})


describe('Application getByDisplayValue', ()=>{
    test('render corectly', ()=>{
        render(<Application />)
    
        const nameElement  = screen.getByDisplayValue("aman")
        expect(nameElement).toBeInTheDocument()

        
        const selectElement = screen.getByDisplayValue("India")
        expect(selectElement).toBeInTheDocument()

        const textareaElement = screen.getByDisplayValue("aman singh")
        expect(textareaElement).toBeInTheDocument()


    })
})




describe('Application getByAltText', ()=>{
    test('render corectly', ()=>{
        render(<Application />)

        const inputElement = screen.getByAltText("a person above 30")
        expect(inputElement).toBeInTheDocument()

        const imgElement = screen.getByAltText("a cup of coffee")
        expect(imgElement).toBeInTheDocument()
    })
})


describe('Application getByTitle', ()=>{
    test('render corectly', ()=>{
        render(<Application />)

        const closeElement = screen.getByTitle("close")
        expect(closeElement).toBeInTheDocument()

    })
})



describe('Application getByTitle', ()=>{
    test('render corectly', ()=>{
        render(<Application />)

        const customElement = screen.getByTestId("custom-element")
        expect(customElement).toBeInTheDocument()
    })
})

