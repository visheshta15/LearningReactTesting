# test(name, fn, timeout)
1. `name`: test name use to identify the test

2. `fn`: function that constains the expection to test
this is where react testing liberay comes into picture

we create the VDOM of component using `render` method from RTL
we use `screen` from RTL, which is an object that contains methods to query VDOM

`test` and `expect` have not been imported then how r they working, both `test` and `expect` are methods from JEST, which create-react-app provide globally to every test

3. `timeout`: optional, specifies how long to wait before aborting the test. the default timeout value is 5 sec

# alternative
in place of `test` can use `it` global method from jest 
`test.only` --> `fit`
`test.skip` --> `xit` (temporary exclude while running test)
-----------------------------------

test.only - pick this test from File
test.skip - pick all except this test from File

-----------------------------------
if you prefer to organise your test into groups, you u use the global `describe` method that jest provide 
# describe(name, fn)
`name` : group name 
`fn` : function that contains the expectation to test 

---------------------------------------------
# Assertions
when writing tests, we often need to check that values meet certain conditions.
Assertions decide if a test passes or fail

assertion carried out with jest method `expect`
`expect(value)`
`value`:  value that your code produces
typically ypu will use expect alomg with a `matcher` function to asert something about the value. matcher can optionally accept an argument which is an correct expected value

https://jestjs.io/docs/using-matchers
https://github.com/testing-library/jest-dom


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