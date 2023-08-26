// import AppProvider from "../../providers/AppProvider";
import MuiMode from "./MuiMode";
// import {render, screen} from "@testing-library/react"
import {render, screen} from "../../testUtils.test"

describe("MuiMode", ()=>{
    test("render text correctly",()=>{
        // wrap MuiMode with AppProvider before rendering
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading')
        // screen.debug()
        expect(headingElement).toHaveTextContent("dark mode")
    })
})