import Application from "./Application";
import {render, screen } from '@testing-library/react'

describe('Application', ()=>{
    test('render correctly', ()=>{
        render(<Application />)
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInDocument()
    })
})