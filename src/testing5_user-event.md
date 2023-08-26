# User Interactions

a click using a mouse or a keypress using a keyboard
software has to respond to such intractions
tests should ensure the interactions are handled as expected

# liberary --> user-event
a companion library for testing library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser

it is the recommended way to test user interactions with RTL

# fireEvent vs user-event
`fireEvent` : is a method from RTL which is used to dispatch DOM events.
ex: we can dispatch the change event on an input field using fireEvent.

`user-event` :  this stimulates full interactions, which may fire multiple events and do additional checks along the way

when a user type into a textbox, 
the element has to be focused and 
then keyboard and input events are fired and
the selection and value on the element are manupulated as they type.

UE allows you to describe a user interaction instead of concrete event. 
It adds visibility and intractability checks along the way and manipulates the Dom just like a user interaction in the browser would. 
It factors in that the browser eg, wouldn't let a user click a hidden element or type in a disabled text box.


# install updated user-event version
user-event get installed by npx create-react-app but with older version 13.5.0
install latest version
"@testing-library/user-event": "^14.4.3",



# Pointer Interactions ------------------------------

`Convenience APIs ` that internally calls pointer apis. Convenience APIs you typically use for writing test

# mouse interaction

click()
dblClick()
tripleClick()
`when testing appererance/disapperance of tooltip or testing styles applied to tooltip`
hover()
unhover()

`Pointer APIs`
pointer({keys: '[MouseLeft]'})
pointer({keys: '[MouseLeft][MouseRight]'})
pointer('[MouseLeft][MouseRight]')
pointer('[MouseLeft>]')                 press button without releasing it
pointer('[/MouseRight]')                release a previously pressed button

# Keyboard Intractions
`Utility API`
type()   
clear()
selectOptions()
deselectOptions()
upload() 

`Convenience API`
tab()

`Clipboard APIs`
copy()
cut()
paste()

`Keyboard APIs`
keyboard('foo')   //translate to: f,o,o
keyboard('{Shift>}A{/Shift})    // translate to: shift(down) , A, Shift(up)


# user-event methods -----------------------------

`user.setup()`                  create instance of user-event
`user.click(incrementButton)`   fire click event  
`user.type(element, what u want to type)` for input element
`user.tab()`                    to focus with tab key

``
