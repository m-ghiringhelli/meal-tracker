// import functions and grab DOM elements
const form = document.getElementById('ingredient-form');
//const addIngredientButton = document.getElementById('add-ingredient-form');
const ingredientList = document.getElementById('ingredient-list');

// console.log(formData);
// console.log(addIngredientButton);
// let state

// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //get form data
    const formData = new FormData(form);
    //create object from formData
    const stat = {
        quantity: formData.get('quantity'),
        measurement: formData.get('measurement'),
        ingredient: formData.get('ingredient'),
    };
    console.log(stat);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
