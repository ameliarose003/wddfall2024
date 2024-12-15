// 1) I need to make the menu items appear in from .mjs to the index.html page
// 2) I need to make the search bar useable and check it will sort the results alphabetically
// 3) that I need to make the add to basket button add the item to the goodie basket on the side bar
// 4) the goodies also need to be added to the goodie basket web page.

import bakeryMenu from './goodie.mjs';
// import "./basket2.mjs";

// 1) Create a function to generate a random number that will be used to get a random baked good.
function random(num) {
    return Math.floor(Math.random()*num);
    console.log("Random number retrieved")

}

// Change images every three seconds
const mainImages = ["bakery-images/all_treats.webp", "bakery-images/cottage_kitchen1.webp", "bakery-images/cottage_kitchen2.webp"];
// const randomIndex = Math.floor(Math.random() * mainImages.length);
// document.getElementById("bakeryImages").src = mainImages[randomIndex]
let currentIndex = 0;  // Keeps track of the current image index

// function to change image:
function changeImage() {
     // Increment index and reset if it goes beyond the array length
    currentIndex = (currentIndex + 1) % mainImages.length;

    // Get the <img> element and change the 'src' attribute
    const imgElement = document.getElementById("bakeryImages");

    // Set a smooth transition by fading out and changing the image
    imgElement.style.opacity = 1; //fade out

    // After the fade-out, change the image source
    setTimeout(() => {
        imgElement.src = mainImages[currentIndex]; // Change the image source
        imgElement.style.opacity = 1; // Fade in
    }, 1000); // This time should match the fade-out duration (1 second in this case)
};
// Change the image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);

// 2) Create a function that will use the imported bakedGoods, and the random function from step 2 to return a random key.
function getRandomListEntry(list) {
    // GEt the length of the list aka the number of how many recipes there are.
    const listLength = list.length - 1;
    // use the random(num) connected to the list.length
    const randomNum = random(listLength);
    return list[randomNum]
}
console.log(getRandomListEntry(bakeryMenu));

// 3) Using the HTML in the index.html, create a template function that will be responsible
// for generating the HTML necessary to display a recipes.
function goodieTemplate(bakeryMenu) {
    return `
        <article>
            ${bakeryMenu.img}
            <div id="goodieInfo">
                <h3>${bakeryMenu.name}</h3>
                <p>${bakeryMenu.description}</p>
                <p onclick="calculate('${bakeryMenu.price}" >${bakeryMenu.price}</p>
                <button onclick="addToBasket('${bakeryMenu.name}')" >Add to basket</button>
            </div>
        </article>
    `;
}
console.log(goodieTemplate);



// 7) Using the random recipes function, create an init function the should run when the page loads to render out a random recipes.
function renderGoodie(goodieList) {
	// get the element we will output the goodie into
    const outputElement = document.getElementById("goodiesOutput");
    console.log(goodieList);
    outputElement.innerHTML = goodieList.map(goodieTemplate).join('');
    // let a = goodieList.map(goodieTemplate)
    // console.log("1", a)
    // let b = a.join('')
    // console.log("2", b)
}

function onSubmit(submit) {
    submit.preventDefault();
    const input = document.getElementById("search_bar");
    const inputVariable = input.value;
    const filteredGoodies = filter(inputVariable);
    renderGoodie(filteredGoodies);

    input.value = '';
}

function filter(query) {
    const lowerQuery = query.toLowerCase();
    const filtered = bakeryMenu.filter(item => {
        return item.name.toLowerCase().indexOf(lowerQuery) > -1;
    });
    return filtered.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });
}

function init() {
    // Get a random goodie
    const randomGoodie = getRandomListEntry(bakeryMenu);
    // render the goodie with the renderGoodie
    console.log(randomGoodie);
    // renderGoodie([renderGoodie]);
    const searchBar = document.getElementById("find_treats");
    searchBar.addEventListener("submit", onSubmit)
}
init();