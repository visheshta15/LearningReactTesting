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
Button element --> button role
anchore element --> link role
h1 to h6 elements --> heading role
checkboxes --> checkbox role
radio buttons --> radio role

If u r working with elements which do not have default role, then role attribute can be used to add the desired role

to use anchor element as a button in the navbar, u can add role='button'
