# TestMatch  --------------------------------------

# 1. string
<div>hello world</div>

`screen.getByText('hello world')`               full string match
`screen.getByText('llo w, {exact: false})`      substring match 
`screen.getByText('hello world, {exact: false})`      ignore case 

# 2. regex
<div>Hello World</div>

`screen.getByText(/World/)`                     substring match
`screen.getByText(/world/i)`                    substring match, ignore case
`screen.getByText(/^hello world$/i)`            full string match ignore case

<!-- . means "any character".
* means "any number of this".
.* therefore means an arbitrary string of arbitrary length.
^ indicates the beginning of the string.
$ indicates the end of the string. -->

# 3. custom function
(content?: string, element?; Element | null) => boolean
<div>Hello World</div>

`screen.getByText((content)=> content.startsWith('Hello))`


# querBy and queryAllBy -------------------------------------------------
getByRole and getAllByRole give error if no match found in the document

1. `queryBy`
returns the matching node for a query, and returns null if no elements match
usefull for asserting an element that is not present
Throws an error if more than one matching is found

2. `queryAllBy`
returns an array of all matching nodes for a query, and return an empty array if no element match

queryByRole
queryByLabelText
queryByPlaceholderText
queryByText
queryByDisplayValue
queryByAltText
queryByTitle
queryByTestId



# Appearance/disappearance ---------------------------------
`getBy and getAllBy` class of queries to assert if elements are present in the DOM

`queryBy and queryAllBy` class of queries to assert if elements are not present in the DOM.

`Appearance/disappearance of elements` 
what is element are not present in the DOM to begin with but make their way into the DOM after some time?

ex: data that is fetched from the server will be rendered only after a few milliseconds

# findBy amd findAllBy
1. `findBy`   
returns a Promise which resolves when an element is found which matches the given query
The Promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms

2. `findAllBy`
returns a promise which resolves to an array of elements when any elements are found which match the given query
The promise os rejected if no elements are found after a default timeout of 1000ms



# manual queries --------------------------------------------------
you can use the regular queryselector DOM API to find element

const {container} = render(<MyComponent />)
const foo = container.querySelector('[data-foo="bar"]')



# debuging-----------------------------------------------------------------------
test('log out button is eventually displayed', async ()=>{
    `const view = render(<Skills langSkills={langSkills}/>)`
    // `screen.debug()`
    logRoles(view.container)
    const logoutButton = await screen.findByRole("button") 
    expect(logoutButton).toBeInTheDocument()
    // `screen.debug()`
})



# chrome extention
testing playground