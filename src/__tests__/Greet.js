import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

test('Greet renders correctly', ()=>{
    render(<Greet />)
    const elementText = screen.getByText(/heLlo/i)
    expect(elementText).toBeInTheDocument()
})