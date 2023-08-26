import Counter from "./Counter";
import { render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event'
import { act } from "react-dom/test-utils";

describe('Counter count user-event', ()=>{
    test('renders correctly', ()=>{
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button', {
            name: "Increment"
        })
        expect(buttonElement).toBeInTheDocument()
    })

    test("renders a count of 0", ()=>{
        render(<Counter />)
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("0")
    }) 

    // all user-event api's are asynchronous 
    test("renders a count of 1 after clicking the increment button", async ()=>{
        // create instance of user-event
        // screen.debug()
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        })
        // Wrap mount and other possible actions which are going to cause state changes inside act. import act from simple react-dom/test-utils, async & await like below.
        // await act(()=> user.click(incrementButton))

        // When in need to wait for any period of time you can use waitFor, to wait for your expectations to pass
        await waitFor(()=> user.click(incrementButton))

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
        // screen.debug()
    } )

    
    test("renders a count of 2 after clicking the increment button twice", async ()=>{
        user.setup()
        render(<Counter />)
        // screen.debug()
        const incrementButton = screen.getByRole('button', {
            name: "Increment"
        }) 
        await waitFor(()=>user.click(incrementButton))
        // screen.debug()
        await waitFor(()=>user.click(incrementButton))
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
        // screen.debug()
    }) 

})


describe("Counter input amount user-event", ()=>{
    test("renders a count of 10 after clicking the set button", async ()=>{
        user.setup()
        // screen.debug()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await waitFor(()=>user.type(amountInput, '10'))
        expect(amountInput).toHaveValue(10)

        const setButton  = screen.getByRole("button", {
            name: "Set"
        })
        await waitFor(()=>user.click(setButton))

        const amountElement = screen.getByRole("heading")
        expect(amountElement).toHaveTextContent("10")
        // screen.debug()

    })

    test("elements are focused in the right order", async ()=>{
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: "Increment"})
        const setButton = screen.getByRole('button', {
            name: "Set"})
        const amountInput = screen.getByRole("spinbutton")

        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
        

    })
})

// utility api 
// clear() 
test("clear", async ()=>{
    user.setup()
    render(<textarea defaultValue="hello world!" />)
    const textboxElement = screen.getByRole('textbox')
    // await userEvent.clear(textboxElement)
    await user.clear(textboxElement)
    expect(textboxElement).toHaveValue("")
})


// selectOptions()
test("selectOptions single", async ()=>{
    user.setup()
    render(
        <select>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
        </select>
    )
    const selectElement = screen.getByRole("combobox")
    await user.selectOptions(selectElement, ["C"])
    expect(screen.getByRole("option", { 
        name: "A"}).selected).toBe(false)
    // screen.debug()
})

test("selectOptions multiple", async ()=>{
    user.setup()
    render(
        <select multiple>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
        </select>
    )
    const selectElement = screen.getByRole("listbox")
    await user.selectOptions(selectElement, ["C", "1"])
    expect(screen.getByRole("option", { 
        name: "A"}).selected).toBe(true)
    screen.debug()
    expect(screen.getByRole("option", { 
        name: "B"}).selected).toBe(false)
    screen.debug()
    expect(screen.getByRole("option", { 
        name: "C"}).selected).toBe(true)
    // screen.debug()
})


// deselectOptions()
test("deselectOptions ", async ()=>{
    user.setup()
    render(
        <select multiple>
            <option value="1">A</option>
            <option value="2" selected>B</option>
            <option value="3">C</option>
        </select>
    )
    const deselectElement = screen.getByRole("listbox")
    await user.deselectOptions(deselectElement, "2")
    expect(screen.getByRole("option", { 
        name: "B"}).selected).toBe(false)
    // screen.debug()
})


// upload() 
test("upload file", async()=>{
    user.setup()
    render(
        <div>
            <label htmlFor="file-uploader">upload file:</label>
            <input type="file" id='file-uploader' />
        </div>
    )
    const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    const input = screen.getByText(/upload file:/i)
    // const input = screen.getByLabelText("upload file:")
    await waitFor(()=>user.upload(input, file))
    screen.debug()
    // expect(input.files[0]).toBe(file)
    // expect(input.files.items[0]).toBe(file)
    // expect(input.files).toHaveLength(1) 
    // expect(input.files.length).toBe(1)
})