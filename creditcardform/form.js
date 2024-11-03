const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElement = event.target;

    console.log(event);
    console.log(formElement);

    const inputElement = formElement("phone");

    const inputValue = inputElement.value;

    inputElement.value = "";

    console.log(inputValue);
});