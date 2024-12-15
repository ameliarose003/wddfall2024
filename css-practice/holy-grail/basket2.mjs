import bakeryMenu from "./goodie.mjs"

// global variable that will hold all the goodies
let globalVariable_basket_Array = [];
let globalVariable_price_Array = [];


// why do we need to add the info to the global variable?
// It could be that the things that are being added
//  to the global variable are things we need to reference to
// in order to reduce the amount of things put into the parameters.

// the add to cart button, onclick will call addToBasket()
function addToBasket(name) {
    // adds things to the basket which links to 
    console.log("added to basket");
    let foundGoodie = bakeryMenu.find(item => item.name === name);

    if (foundGoodie) {
        console.log("Goodie found:", foundGoodie);
        globalVariable_basket_Array.push(foundGoodie);

        const price = parseFloat(foundGoodie.price.replace('$',''));
        globalVariable_price_Array.push(price);
        localGoodies();
        calculate();
        renderItems();
        console.log(`${name} added to basket`);

    } else {
        console.error("Goodie not found in bakeryMenu");
        // Add a message to the UI to inform the user
        alert("This item is not available.");
    }

    // console.log("Leather socks found", foundGoodie);
    // Add the foundGoodie to the global variable?
    // globalVariable_basket_Array.push(foundGoodie);
    // globalVariable_price_Array.push(foundPrice);

    // goodie.mjs bakeryMenu.name and places it 
    // in the class goodieName and puts the bakeryMenu.price
    // in the class total all added up. 
    // localGoodies();
    // localStorage();
}
window.addToBasket=addToBasket;

//Create a function to save the goodie to localStorage.
// We are creating a localStorage because we want the items 
//in the cart to stay until the user clears the cart or checks-out
function localGoodies() {
    // 'basket' is the class connected with the add to basket button. 
    localStorage.setItem('basket', JSON.stringify(globalVariable_basket_Array));
    // 'price' is the class connected with the <p> price </p>
    localStorage.setItem('price', JSON.stringify(globalVariable_price_Array));
    
    
}

//Create a function to calculate the total
function calculate() {
    // let sum = 0;
    // ".price" is the class connected with the <p> price </p>
    // const prices = document.querySelectorAll(".price");
    // Now we are going over each prices and adding them together

    let sum = globalVariable_price_Array.reduce((total, item) => total + price, 0);

    const totalElement = document.querySelector('.total');
    if (totalElement) {
        totalElement.textContent = `$${sum.toFixed(2)}`;
        console.log("Total Price Calculated:", sum);

    }
    
    // prices.forEach(p => {
    //     sum += parseFloat(p.textContent)

    // });
    // document.querySelector('.total').textContent = `${sum}`;
    // console.log("Total prices calculated", sum);
}

// Create a function to render the items into the basket HTML
function renderItems() {
    // Telling the code where to put the localStorage goodie name and total
    const outputName = document.querySelector(".goodieName");
    const outputTotal = document.querySelector(".total");

    if (!outputName || !outputTotal) {
        console.error("Error: Output elements not found. Check your HTML for '.goodieName' and '.total' classes.");
        return;
    }

    // // Guard clause for globalVariable_basket_Array
    // if (!Array.isArray(globalVariable_basket_Array) || globalVariable_basket_Array.length === 0) {
    //     console.error("Error: globalVariable_basket_Array is not an array or is empty.");
    //     return;
    // }   

    // To render the names and prices ......
    outputName.innerHTML = globalVariable_basket_Array.map(item => `<p>${item.name}</p>`).join('');
    const total = globalVariable_price_Array.reduce((total, price) => total + price, 0);
    outputTotal.textContent = `$${total.toFixed(2)}`;
};


//Create a function to read the items from localStorage
function readLocalStorage() {
    const str_basket = localStorage.getItem('basket');
    const str_price = localStorage.getItem('price');
    // const basket = JSON.parse(str_basket);
    // const price = JSON.parse(str_price);
    globalVariable_basket_Array = str_basket ? JSON.parse(str_basket) : [];
    globalVariable_price_Array = str_price ? JSON.parse(str_price) : [];

    // const str_basket = localStorage.getItem('basket');
    // globalVariable_basket_Array = str_basket ? JSON.parse(str_basket) : [];


};

// Create an init function which reads cals the get items from localstorage and calls
function init() {
    readLocalStorage();
    renderItems();
    calculate();
}
init();