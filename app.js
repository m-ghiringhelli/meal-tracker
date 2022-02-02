// import functions and grab DOM elements
import { renderIngredient } from './test/utils.js';

const form = document.getElementById('ingredient-form');
const ingredientList = document.getElementById('ingredient-list');
const removeButton = document.getElementById('remove-button');

// let state
let ingredientObjects = [];


// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderIngredients();
    //get form data
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function renderIngredients() {
    const formData = new FormData(form);
    //create object from formData
    const stat = {
        quantity: formData.get('quantity'),
        measurement: formData.get('measurement'),
        ingredient: formData.get('ingredient'),
    };
    ingredientObjects.push(renderIngredient(stat));

    for (let item of ingredientObjects) {
        ingredientList.append(item);
    } 
}

function removeLastIngredient() {
    
}
