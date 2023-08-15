// greet should render the test hello and 
// if name is passed then it should render hello followed bt the name 

import { render, screen } from "@testing-library/react"
import Greet2 from "./Greet2"

test('Greet2 render correctly', ()=>{
    render(<Greet2 />)
    const elementText = screen.getByText('Hello')
    expect(elementText).toBeInTheDocument()
})

test('Greet2 render with name', ()=>{
    render(<Greet2 name='Vish'/>)
    const elementText = screen.getByText('Hello Vish')
    expect(elementText).toBeInTheDocument()
})