import { render, screen } from '@testing-library/react'
import GetReq from './GetReq'
import mockAxios from 'axios'

jest.mock('axios')

describe("GetReq", ()=> {
    test("render 1", ()=>{
        render(<GetReq />)
        expect(screen.getByRole('heading')).toHaveTextContent('GetReq')
        axios.get.mockResolvedValue([])
    })
})