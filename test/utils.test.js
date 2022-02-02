// IMPORT MODULES under test here:
import { renderIngredient } from './utils.js';

const test = QUnit.test;

const testData = {
    quantity: '3',
    measurement: 'cups',
    ingredient: 'cheese',
};

test('renderIngredient should create a list item from submitted ingredients', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>3 cups cheese</li>`;
   
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
