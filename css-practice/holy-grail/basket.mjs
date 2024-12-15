import bakeryMenu from "./goodie.mjs"

/**
 * Create a global variable which will hold all of the goodies
 * In JavaScript, a global variable is a variable that can be accessed
 *  from any function or block within your code.
 */

let globalVariableArray = []


function addToBasket(name) {
    console.log("added to basket");
    let foundGoodie = bakeryMenu.find(item => item.name === name);
    console.log("Leather socks found", foundGoodie);
    /**
     * Add the foundGoodie to the global variable
     */
    globalVariableArray.push(foundGoodie);

}

window.addToBasket=addToBasket

/**
 * Create a function to save the goodie to localStorage.
 * 
 * localStorage.setItem('basket', JSON.stringify(globalVariableArray))
 */
function locally() {
    storage = localStorage.setItem('basket', JSON.stringify(globalVariableArray))
}

/**
 * Create a function to calculate the total
 */
function calculate() {
    let sum = 0
    const prices = document.querySelectorAll(".price");
    prices.forEach(p => {
        sum += parseFloat(p.textContent)

    });
    document.querySelectorAll('.total').textContent = `${sum}`;
    console.log("Total prices calculated", calculate)
}

/**
 * Create a function to render the items into the basket HTML
 */

/**
 * Create a function to read the items from localStorage
 * 
 * const str = localStorage.get('basket')
 * const basket = JSON.parse(str)
 */

/**
 * Create an init function which reads cals the get items from localstorage and calls
 * the render function
 */