import Users from "./Users";
import {render, screen} from '@testing-library/react'

describe("Users", ()=>{
    test("render correctly", ()=>{
        render(<Users />)
        const headerElement = screen.getByRole('heading')
        expect(headerElement).toHaveTextContent(/users/i)
    })

    test("renders a list of users", async ()=>{
        render(<U sers />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })
})