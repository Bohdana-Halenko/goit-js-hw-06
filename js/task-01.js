const itemsName = document.querySelectorAll('.item');
console.log("Number of categories:", itemsName.length);
for (const item of itemsName) {
    const header = item.querySelector("h2");
    console.log("Category:", header.textContent);
    const itemList = item.querySelectorAll("li");
    console.log("Elements:", itemList.length);
}