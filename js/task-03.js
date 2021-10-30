const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//const takeUl = document.querySelector(".gallery");
//takeUl.style.listStyle = "None";

//const addLi = images.map(({url, alt}) => {
 //return `<li class="gallery__item"><img class="gallery__img" width="350" height="180" src="${url}" alt="${alt}"></li>`; 
//});

//addLi.forEach((element) => {
 // takeUl.insertAdjacentHTML("beforeEnd", element);
//});


const takeUl = document.querySelector("ul.gallery");
takeUl.style.listStyle = "None";

const addLi = images.map(({ url, alt }) => `<li><img class="image" src=${url} alt='${alt}'></li>`).join("");

takeUl.insertAdjacentHTML("beforeEnd", addLi);


takeUl.style.display = "flex";
takeUl.style.flexdirection = "row";
takeUl.style.justifyContent = "centre";
addLi.style.padding = "20px";
addLi.style.maxWidth = "600px";
addLi.style.height = "500px";

