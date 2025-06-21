const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const refsIngredients = document.querySelector('#ingredients');   

for (const item of ingredients) {
    const elLi = document.createElement('li')
    elLi.textContent = item;
    refsIngredients.appendChild(elLi);
    // console.log(elLi)
}