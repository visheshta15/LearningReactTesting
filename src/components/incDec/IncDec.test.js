import IncDec from "./IncDec";
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

describe("IncDec", ()=>{
    test("renders correctly", ()=>{
        render(<IncDec />)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent(/Increment/i)
    })

    test("handlers are called ", async ()=>{
        // jest.fn() creates a mock function 
        const incHandler = jest.fn()
        const decHandler = jest.fn()

        render(<IncDec 
            count={0} 
            handleIncrement = {incHandler}
            handleDecrement = {decHandler}
        />)

        const incButton = screen.getByRole("button", {
            name: "Inc"
        })
        const decButton = screen.getByRole("button", {
            name: "Dec"
        })

        await user.click(incButton)
        await user.click(decButton)
        await user.click(decButton)

        expect(incHandler).toHaveBeenCalledTimes(1)
        expect(decHandler).toHaveBeenCalledTimes(2)

    })
})