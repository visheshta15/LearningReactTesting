# Jest
jest is javascript learning framework

jest is a test runner that finds a tests,
runs the tests, 
determines whether the tests passed for failed 
report it back in the human readable manner

`npm test`

# RTL
JS testing utility that provides virtual DOM for testing React component

RTL provides the a virtual DOM which we can use to interact with and verify the behaviour of react component
Testing Library is infact a family of packages which helps test UI components.
The library is called DOM Testing library and RTL is simply a wrapper around this core library to test React applications in an easier way


# type of test in automation testing
1. Unit tests
2. Integration tests
3. E2E end to end tests

# RTL philosophy
with RTL we are not concerned about the implementation details of a component. Instead we are testing how the component behaves when a user interacts with it.
RTL will not care if you add 4+4 or 5+3 to display the number 8
Refactoring will not affect your test as long as end result is the same


# TDD - test driven development
TDD is a software development process where you tests before writing software code
once the tests have been written, you then write the code to ensure the tests pass

this process require 3 phases
1.  create tests that verify the functionality of a specific feature
2. write the software code that will run the tests successfully when re-executed
3. refoctor the code for optimisation while ensuring the tests continue to pass

Also called red-green testing as all tests go from a red failed state to a green passed state


# Jest watch mode 
watch mode is an option that we can pass to jest asking to watch files that have changed since the last commit and execute the tests related only to those changed files
An optimization designed to make your tests run fast regardless of how many tests you have

# file convention name suffix
.test.js/ .test.tsx 
.spec.js / .spec.tsx
.js / .tsx in __tests__ folders


# code coverage
a metric that can help you understand how much of ur software code is tested
1. `statement coverage` : how many of the statements in the software code have been executed
2. `branch coverage` : how many of the branches of the control structure(if statement for instance) have been executed
3. `Function coverage` : how many of the functions defined have been called and finally
4. `Line coverage`: how many of lines of source code have been tested

below will only check the test files which are recently edited
`"coverage": "npm test --coverage" `

to check coverage of all files
`"coverage": "npm test -- --coverage --watchAll  "`

check coverage only inside component folder
`"coverage": "npm test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{js,jsx}' "`

to ignore specific location
--collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'

`npm run coverage`


# jest coverage threshold
"jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,   //80%
        "functions": 80,
        "lines": 80,
        "statements": -10   // more than 10 uncovered statement
      }
    }
  }

see coverage report 
D:\Data Structure\react-testing\coverage\lcov-report\src\index.html


# what to test
1. test component renders
2. test component renders with props
3. test component renders with different state
4. test component reacts to event

# what not to test
implementaion details
third party code
code that is not important to user point of view