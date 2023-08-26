import Skills from './Skills'
import {logRoles, render, screen} from '@testing-library/react'

const langSkills = ['html', 'css', 'js']

describe(('Skills getAllBy'), ()=>{
    test('render correctly whole list ', ()=>{
        // render the component with props 
        render(<Skills  langSkills={langSkills}/>)
        // find ul tag by role 
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('render list items ', ()=>{
        // render the component with props 
        render(<Skills  langSkills={langSkills}/>)
        // find ul tag by role 
        const listElements = screen.getAllByRole('listitem')
        expect(listElements).toHaveLength(langSkills.length)
    })

    
})
 

describe(('Skills queryBy'), ()=>{
    test('render login button', ()=>{
        render(<Skills langSkills={langSkills}/>)
        const loginButton = screen.getByRole('button', {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument()
    })

    // queryByRole to check the element which is not present initailly
    test('log out button is not rendered', ()=>{
        render(<Skills langSkills={langSkills}/>)
        const logoutButton = screen.queryByRole('button', {
            name: "Logout"
        })
        expect(logoutButton).not.toBeInTheDocument()
    })
})


// describe(('Skills findBy'), async ()=>{
    test('log out button is eventually displayed', async ()=>{
        const view = render(<Skills langSkills={langSkills}/>)
        // screen.debug()
        logRoles(view.container)
        const logoutButton = await screen.findByRole("button", {
            name: "Logout"
        },
        {
            timeout: 2000
        }) 
        expect(logoutButton).toBeInTheDocument()
        // screen.debug()
    })
 
// })