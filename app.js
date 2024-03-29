// import functions and grab DOM elements
import { renderIngredient, renderMeal } from './test/utils.js';

const form = document.getElementById('ingredient-form');
const ingredientList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');
const removeButton = document.getElementById('remove-button');
const saveMealInput = document.getElementById('meal-input');
const saveMealButton = document.getElementById('save-meal-button');

// let state
let ingredientObjects = [];
let mealObjects = [];


// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    //create object from formData
    const stat = {
        quantity: formData.get('quantity'),
        measurement: formData.get('measurement'),
        ingredient: formData.get('ingredient'),
    };
    ingredientObjects.push(stat);
    renderIngredients();
});

removeButton.addEventListener('click', () => {
    removeLastIngredient();
});

saveMealInput.addEventListener('click', () => {
    saveMealInput.value = '';
});

saveMealButton.addEventListener('click', () => {
    const meal = {
        name: saveMealInput.value,
        numIngredients: ingredientObjects.length,
    };
    mealObjects.push(meal);
    renderMeals();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredientObjects) {
        const li = renderIngredient(item);
        ingredientList.appendChild(li);
    }
}
  
function removeLastIngredient() {
    ingredientObjects.pop();
    renderIngredients();
}

function renderMeals() {
    for (let item of mealObjects) {
        const li = renderMeal(item);
        mealList.appendChild(li);
    }
}
