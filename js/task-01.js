
const numCategories = document.querySelectorAll('.item');
console.log(`Number of categories:`, numCategories.length,);

console.log(
  [...numCategories]
    .map(
      category =>
        `\nCategory: ${category.children[0].textContent}
Elements: ${category.children[1].children.length}`,
    )
    .join('\n'),
);

// console.log(`\nCategory:`, numCategories[0].firstElementChild.textContent);
// console.log(`Elements:`, numCategories[0].lastElementChild.children.length);
// console.log(`\nCategory:`, numCategories[1].firstElementChild.textContent);
// console.log(`Elements:`, numCategories[1].lastElementChild.children.length);
// console.log(`\nCategory:`, numCategories[2].firstElementChild.textContent);
// console.log(`Elements:`, numCategories[2].lastElementChild.children.length);


 


// Category: Animals
// Elements: 4
 
// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
