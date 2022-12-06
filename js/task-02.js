const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



document.querySelector('#ingredients').append(
  ...ingredients.map(ingredient => {
    const navItemEl = document.createElement('li');
    navItemEl.textContent = ingredient;
    navItemEl.classList.add('item');
    return navItemEl;
  }),
);

// const ingredientsContainerEl = document.querySelector('#ingredients');
// const makeIngredientsEl = ingredient => {
//   const navItemEl = document.createElement('li');
//   navItemEl.textContent = ingredient;
//   navItemEl.classList.add('item');
//   return navItemEl;
// };
// const elements = ingredients.map(makeIngredientsEl);
// ingredientsContainerEl.append(...elements);
  









// console.log(
//   [...numCategories]
//     .map(
//       category =>
//         `\nCategory: ${category.children[0].textContent}
// Elements: ${category.children[1].children.length}`,
//     )
//     .join('\n'),
// );
// // Напиши скрипт, який для кожного елемента
//  масиву ingredients:

// // Створить окремий елемент <li>. Обов'язково 
// використовуй метод document.createElement().
// // Додасть назву інгредієнта як його
//  текстовий вміст.
// // Додасть елементу клас item.
// // Після чого, вставить усі <li> за одну 
// операцію у список ul#ingredients.