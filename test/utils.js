export function renderIngredient(ingredient) {
    const li = document.createElement('li');
    li.textContent = `${ingredient.quantity} ${ingredient.measurement} ${ingredient.ingredient}`;
    return li;
}

export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.numIngredients} ingredients`;
    return li;
}