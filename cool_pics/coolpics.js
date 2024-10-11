// // Get a picture to be bigger when clicked on
// // And get rid of the photo when button is clicked
// // Make menu button work when clicked on
// // Add an eventListener to the menu button to listen for a click event
// // When the button is clicked show the menu if it is hidden, hide the menu if it is shown.
// // You can add and remove classes to an element using the classList
// // menuButton.classList.add('menu')
// // element.classList.toggle('menu')


function menuButton()  {
    console.log("This works")
    const showmenu = document.querySelector("nav.navbar")
    showmenu.classList.toggle("show")
}



const imgs = document.querySelectorAll("img")
imgs.forEach((img) => {
    console.log(img)
    img.addEventListener('click', imgClicked)
})

function imgClicked() {
    console.log("Image Clicked")
    const bigImg = document.querySelector(".viewer")
    bigImg.classList.toggle("hide")
}



function xClicked() {
    console.log("X Clicked")
    const xButton = document.querySelector(".viewer")
    xButton.classList.toggle("hide")

}

const closeX = document.querySelector(".close-viewer")
closeX.addEventListener('click', xClicked)


function doc_ready() {
    const menu = document.getElementById("menu");
    menu.addEventListener('click', menuButton);
    const x = document.querySelector("viewer");
    x.addEventListener('click', xClicked);
    const image = document.querySelector("img");
    image.addEventListener('click', imgCLicked)
}

document.addEventListener("DOMContentLoaded", doc_ready);


