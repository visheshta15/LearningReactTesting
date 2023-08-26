
# RTL queries
queries are the method the RTL provide to find elements on the page

1. to find single element on the page
`getBy..` : class of queries return the matching node for a query, and throw a descriptive error if no element matches or if more than one match is found
queryBy..
findBy..
2. to find multiple element on the page
getAllBy..
queryAllBy..
findAllBy..

suffix can be one of the Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title, TestId




# getBy... queries

getBy.. class of queries 
`return` the matching node of for a query, 
`throw a descriptive error` if no element match or if more than one match is formed.

# Suffix
Role
LabelText
PlaceHolderText
Text
DisplayValue
AltText
Title
finally TestId


# 1. getByRole
getByRole queries for an element with the given role
`Role` refers to ARIA(Accessible Rich Internet Applications) role which provide semantic meaning to content to ensure people using assistive technologies are able to use them.

By default many semantic elements in HTML have a role. 

input  --> textbox
ul  --> list
li --> listitem
select  --> combobox
select multiple --> listbox
select option --> option
Button  --> button role
anchore  --> link role
h1 to h6  --> heading role
checkboxes --> checkbox role
radio buttons --> radio role
range widget can be queried by any value, input number --> spinbutton

If u r working with elements which do not have default role, then role attribute can be used to add the desired role

to use anchor element as a button in the navbar, u can add role='button'

role corresponding to specific element
https://www.w3.org/TR/html-aria/#docconformance


`name` accessible name is for simple cases equal to:
1. the label of the form element
2. the text content of the button
3. value of aria-label attribute

`option`
name
level
hidden
selected
checked
pressed



# 2. getByLabelText
getByLabelText will search for the label that matches the given text, then find the element associated with that element.



# 3. getByPlaceholderText
this will search for all elements with a placeholder attribute and find one that matches the given text



# 4. getByText
this will search for all elements that have a text node with textContent matching the given content
Typically, will use this to find paragraph, div, span elements


# 5. getByDisplayValue
this returns the input, textarea, select element that has the matching display value
In case of select, this will search for a <select> whose selected <option> matches the given TextMatch.


# 6. getByAltText
this will return the element that has the given alt text
this methods only supports elements which accepts the `alt` attribute like <img> <input> <area> or custom HTML elements


# 7. getByTitle
this returns the element that has the matching title attribute


# priority order for queries
your test should resembles how user interact with your code( component, page, etc) as much posible

getByRole
getByLabelText
getByPlaceholderText
getByText
getByDisplayValue
getByAltText
getByTitle
getByTestId



# RTL getAllBy queries

find multiple elements in dom
getAllBy returns an array of all matching nodes for a query, and throws an error if no element match
getAllByRole
getAllByLabelText
getAllByPlaceholderText
getAllByText
getAllByDisplayValue
getAllByAltText
getAllByTitle
getAllByTestId