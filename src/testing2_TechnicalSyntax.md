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


`assert`
1. .toBeInTheDocument()
2. .toHaveLength(3)
3. .not.toBeInTheDocument()
4. .toHaveTextContent(0)
5. .toHaveValue(10)         //for input element
5. .toHaveFocus()
6. .toBe(false)
7. .toHaveBeenCalledTimes(1)