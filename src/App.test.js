import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// # test(name, fn, timeout)
// 1. `name`: test name use to identify the test

// 2. `fn`: function that constains the expection to test
// this is where react testing liberay comes into picture

// we create the VDOM of component using `render` method from RTL
// we use `screen` from RTL, which is an object that contains methods to query VDOM

// `test` and `expect` have not been imported then how r they working, both `test` and `expect` are methods from JEST, which create-react-app provide globally to every test

// 3. `timeout`: optional, specifies how long to wait before aborting the test. the default timeout value is 5 sec
