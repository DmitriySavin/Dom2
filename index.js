
function findCategories() {
    const categories = document.querySelectorAll('.categories > .item');
    console.log(`У списку ${categories.length} категорії.`);

  categories.forEach(item => {
    const list = item.querySelector('ul');
    const items = list.querySelectorAll('li.categories-list_item'); 
    const title = list.querySelector('h2').textContent.trim(); 
    const count = items.length - 1; 
    console.log(`Категорія: ${title}, Кількість: ${count}`);
  });






}

findCategories()