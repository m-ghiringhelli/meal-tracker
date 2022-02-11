// IMPORT MODULES under test here:
import { renderIngredient, renderMeal } from './utils.js';

const test = QUnit.test;

const testData = {
    quantity: '3',
    measurement: 'cups',
    ingredient: 'cheese',
};

const testDataMeals = {
    name: 'Pizza',
    numIngredients: 5,
};

test('renderMeal should return html element with name and ingredients', (expect) => {
    const expected = '<li>Pizza - 5 ingredients</li>';

    const actual = renderMeal(testDataMeals);

    expect.equal(actual.outerHTML, expected);
});

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
