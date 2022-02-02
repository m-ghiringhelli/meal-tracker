export function renderIngredient(ingredient) {
    const li = document.createElement('li');
    li.textContent = `${ingredient.quantity} ${ingredient.measurement} ${ingredient.ingredient}`;
    return li;
}