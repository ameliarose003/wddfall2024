// """Rubric for the assignment"""

// Add Participant Implementation
// - JavaScript for "Add Participant" feature functions correctly

// Submit Form Implementation
// - Listener for a "submit" event is included
// - Event triggers reloading the page, summing up the fee inputs for each participant, 
// getting the adult name from the form, hiding the form, and displaying the summary element

// Refactoring
// - JS functions are transferred to a new "Templates.js" file
// - Templates are imported into "register.js"

// """End of assignment rubric"""

import addParticipent from './template.mjs'


// Get the button to click and show it does in the console.
// const participation_btn is creating a variable that connects to the "add" id, which is the button in the html
const participant_btn = document.getElementById("add")
// participant_btn.addEventListener tells the program to wait for the user to do something.
// The ("click", () => {} creates the function that tells the addEventListener to listen for a "click" from the user and then do {})
participant_btn.addEventListener("click", () => {
    // This conole.log shows us in the console that the addEventListener is working when clicked.
    console.log("Participant button clicked!")
    // Now it's time to make the button do something for the user.
    // Get participant template
    participantCount = addParticipent();
    addParticipent();
    //// console.log(participant_template)
    //// participant_btn.insertAdjacentElement('beforebegin', participant_template)

    // Create a participant counter
    // When Add Participant button is clicked add a participant to the counter
});







// Submit button
    // When sumbit button is clicked, make validation message show and HIDE the registration document
// const submit_btn = document.getElementById("sumbitButton")
// submit_btn.addEventListener("click", () => {})

const form = document.querySelector('form')
form.addEventListener('submit', load)

function load(event) {
    event.preventDefault();
    // function for summing the fees
    const sum = totalFees()
    // pull in the adult_name class
    const info = document.querySelector("#adult_name").value;
    // Call a function that has the info that will show when button is submitted.
    successTemplate(info, participantCount, sum);
    const hidden = document.querySelector('form');
    hidden.style.display = "none";
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let sum = 0;
    feeElements.forEach((fee) => {
        sum += parseFloat(fee.value)
    console.log(sum)
    }) 
    return sum

    // once you have your total make sure to return it!
    
    }



function successTemplate(info, participantCount, sum) {
    const receipt = `
        <h1> Receipt</h>
        <p>${info}, you have ${participantCount} participants. Your price is $${sum}
        
        `
    document.querySelector("h1").insertAdjacentHTML("beforebegin", receipt)
}