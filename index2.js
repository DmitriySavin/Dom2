const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
   
const refsIngredients = document.querySelector('.ingredients');

for (const ingredient in ingredients) {
    const item = document.createElement('li');

    ingredients[ingredient].forEach(el => {
        el.textContent = el;
    })
}

