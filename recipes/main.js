import recipes from './recipes.mjs';

// 1) Create a function to generate a random number >= 0 and < num

function random(num) {
    return Math.floor(Math.random()*num);
}
// 2) Create a function that will use the imported recipes, and the random function from step 2 to return a random recipes.
function getRandomListEntry(list) {
    // GEt the length of the list aka the number of how many recipes there are.
    const listLength = list.length;
    // use the random(num) connected to the list.length
    const randomNum = random(listLength);
    return list[randomNum];  
}
console.log(getRandomListEntry(recipes));
// 3) Using the HTML in the index.html, create a template function that will be responsible
// for generating the HTML necessary to display a recipes.

function recipeTemplate(recipe) {
    return `
        <img src="${recipe.image}" alt="${recipe.description}" width="55%">
        <div id="recipeInfo"> 
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            <span>${ratingTemplate(recipe.rating)}</span>
            <p class="recipes-description">${recipe.description}</p>
        </div>
    `;
}
console.log(recipeTemplate)

// 4) Notice that there are two parts in this template where the markup will change based on the recipes: ratings and tags.
// 6) Create a template function to generate the markup to display the tags. It should expect a list of tags as a parameter.

function tagsTemplate(tags) {
    return `<ul class="tagContainer">${tags.map(tag => `<li class="recipeTag">${tag}</li>`).join('')}</ul>`;
}

console.log(tagsTemplate)

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`;
    // Our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
		// check to see if the current index of the loop is less than our rating
        if (i <= rating) {
		    // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
		// else output an empty star
        else {
           html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
    console.log(html);
}

const test = getRandomListEntry(recipes);
console.log(recipeTemplate(recipes[0]));

// 7) Using the random recipes function, create an init function the should run when the page loads to render out a random recipes.

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const outputElement = document.getElementById("recipe");
    console.log(recipeList);
    outputElement.innerHTML = recipeList.map(recipeTemplate).join('');

	// use the recipeTemplate function to transform our recipes objects into recipes HTML strings

	// Set the HTML strings as the innerHTML of our output element.

}

function onSubmit(submit) {
    submit.preventDefault();
    const input = document.getElementById("search_input")
    const inputVariable = input.value 
    const filteredRecipes = filter(inputVariable)
    renderRecipes(filteredRecipes.slice(0, 1))
}

function filter(query) {
    const lowerQuery = query.toLowerCase()
    // => is a lambda
    const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().indexOf(lowerQuery) > -1;
    })
    return filtered.sort((a,b) =>{
        return a.name.localeCompare(b.name);
    })
}


function init() {
  // get a random recipes
  const randomRecipe = getRandomListEntry(recipes);
  // render the recipes with renderRecipes.
  console.log(randomRecipe)
  renderRecipes([randomRecipe]);
  const searchBar = document.getElementById("search");
  searchBar.addEventListener("submit", onSubmit)

}
init();

// 8) Test to make sure everything is working so far. [console.log()]

//COPY  FROM Chatgpt____________________________________________________________________________________________________________________________________________________________________________
// import recipes from './recipes.mjs';

// // Function to generate a random number >= 0 and < num
// function random(num) {
//     return Math.floor(Math.random() * num);
// }

// // Function to get a random entry from a list
// function getRandomListEntry(list) {
//     const listLength = list.length;
//     const randomNum = random(listLength);
//     return list[randomNum];
// }

// // Template function to generate the HTML for a recipe
// function recipeTemplate(recipe) {
//     return `
//         <img src="${recipe.image}" alt="${recipe.description}" width="55%">
//         <div id="recipeInfo"> 
//             <div>
//                 <p class="recipeTag">${tagsTemplate(recipe.tags)}</p>
//             </div>
//             <h2>${recipe.name}</h2>
//             <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
//                 ${ratingTemplate(recipe.rating)}
//             </span>
//             <h3>${recipe.description}</h3>
//         </div>
//     `;
// }

// // Template function to generate markup for tags
// function tagsTemplate(tags) {
//     return tags.map(tag => `<span>${tag}</span>`).join(', ');
// }

// // Template function to generate markup for ratings
// function ratingTemplate(rating) {
//     let html = '';
//     for (let i = 1; i <= 5; i++) {
//         html += i <= rating ? '⭐' : '☆';
//     }
//     return html;
// }

// // Function to render recipes into the existing HTML
// function renderRecipes(recipeList) {
//     const outputElement = document.querySelector("#recipe"); // Use `#recipe` to match the existing HTML
//     outputElement.innerHTML = recipeTemplate(recipeList[0]); // Render only the first recipe
// }

// // Initialize the page by rendering a random recipe
// function init() {
//     const randomRecipe = getRandomListEntry(recipes);
//     renderRecipes([randomRecipe]); // Pass the random recipe wrapped in an array
// }

// init();
