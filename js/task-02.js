const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = ingredients.map(ingredient => {
  const li = document.createElement("li")
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
}
);
const ul = document.querySelector("#ingredients");
ul.append(...arr);
console.log(ul);