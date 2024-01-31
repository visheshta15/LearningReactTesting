import Users from "./Users";
import {render, screen} from '@testing-library/react'
import { server } from "../../mocks/server";
import { rest } from "msw";

console.log(name)
const name = 'jh'

describe("Users", ()=>{
    test("render correctly", ()=>{
        render(<Users />)
        const headerElement = screen.getByRole('heading')
        expect(headerElement).toHaveTextContent(/users/i)
    })

    test("renders a list of users", async ()=>{
        render(<Users />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })

    test("renders error", async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx)=>{
                return res(ctx.status(500))
            })
        )
        render(<Users />)
        const error = await screen.findByText('error while fetching users')
        expect(error).toBeInTheDocument()
    })
})

