import { act } from "react-dom/test-utils";
import useCounter from "./useCountr";
import {render, renderHook, screen} from '@testing-library/react'

describe("useCounter", ()=>{
    test("should render the initail counter", ()=>{
        // render(useCounter)
        // hook don't have any DOM element. RenderHook will the wrap the hook into functional component, invoke the hook and returns an object from which we can destructure a property called result
        const {result } = renderHook(useCounter)
        // screen.debug()
        expect(result.current.count).toBe(0)
    })

    test("should accept and render the same initial count", ()=>{
        const { result } = renderHook(useCounter, {
            initialProps: {
                data : 5
            }
        })
        expect(result.current.count.data).toBe(5)
    })

    test("should increment the count", ()=>{
        // act() is a function that assures that update the process before assertions are made 
        const { result } = renderHook(useCounter)
        act(()=>result.current.increment())
        expect(result.current.count).toBe(1)
    })

    test("should decrement the count", ()=>{
        // act() is a function that assures that update the process before assertions are made 
        // when writing UI tests , tasks like rendering , user events, or data fetching can be considered as "units" of interaction with a user-interface
        const { result } = renderHook(useCounter)
        act(()=>result.current.decrement())
        expect(result.current.count).toBe(-1)
    })
}) 