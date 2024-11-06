const firebaseConfig = {
    apiKey: "AIzaSyDhPHaLYAJUGZfzbTZQIlobCFP0L5OXy6A",
    authDomain: "halsey-recipebook-2024.firebaseapp.com",
    projectId: "halsey-recipebook-2024",
    storageBucket: "halsey-recipebook-2024.appspot.com",
    messagingSenderId: "757781804246",
    appId: "1:757781804246:web:2100ff92eb305d67060577",
    measurementId: "G-B2BFZJWC92"
  };

// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// DOM elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const nameInput = document.getElementById('recipe-name');
const ingredientsInput = document.getElementById('recipe-ingredients');
const stepsInput = document.getElementById('recipe-steps');
const addRecipeBtn = document.getElementById('add-recipe');
const recipeList = document.getElementById('recipe-list');
const recipeForm = document.getElementById('recipe-form');
const authSection = document.getElementById('auth-section');

loginBtn.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log('User signed in:', result.user.displayName);
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        recipeForm.style.display = 'block'; // Show recipe form upon login
    } catch (error) {
        console.error('Error signing in:', error);
    }
});


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in:', user.displayName);
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        recipeForm.style.display = 'block';
    } else {
        console.log('No user is signed in');
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        recipeForm.style.display = 'none';
    }
});


logoutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log('User signed out');
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        recipeForm.style.display = 'none'; // Hide recipe form upon logout
    } catch (error) {
        console.error('Error signing out:', error);
    }
});


// Get the form element
document.getElementById('recipe-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const steps = document.getElementById('recipe-steps').value;

    const container = document.getElementById('recipes-container');
    container.innerHTML = ''; // Clear container before adding new recipes

    
    
    // Create a recipe object
    // const recipe = {
    //     name,
    //     ingredients,
    //     steps
    // };

    // Save to Firestore
    try {
        const docRef = await addDoc(collection(db, 'recipes'), {
          name: name,
          ingredients: ingredients,
          steps: steps }
        );
        console.log('Recipe added to Firestore!', docRef.id);
        alert('Recipe added successfully');
        // fetchRecipe();
    } catch (error) {
        console.error('Error adding recipe to Firestore:', error);
        alert("Error adding recipe. Please check console for details.")
    }

    // Save to localStorage
    saveRecipeToLocalStorage(recipe);

    // Display the recipe on the page
    addRecipeToPage(recipe);

    // Reset the form
    document.getElementById('recipe-form').reset();
});

// Save recipe to localStorage
function saveRecipeToLocalStorage(recipe) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Load recipes from Firestore and localStorage when the page loads
window.onload = function() {
    // Load from Firestore using onSnapshot for real-time updates
    try {
        const unsubscribe = onSnapshot(collection(db, 'recipes'), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const recipe = doc.data();
                addRecipeToPage(recipe);
            });
            console.log('Recipes loaded and listening for updates from Firestore!');
        }, (error) => {
            console.error('Error loading recipes from Firestore:', error);
        });
    } catch (error) {
        console.error('Error setting up Firestore listener:', error);
    }

    // Load from localStorage (for offline support)
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.forEach(addRecipeToPage);
};


// Display recipe on the page
function addRecipeToPage(recipe) {
    const container = document.getElementById('recipes-container');
    
    const recipeElement = document.createElement('div');
    recipeElement.className = 'recipe';
    
    // Create a download button that generates the PDF file on the fly
    recipeElement.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Steps:</strong> ${recipe.steps}</p>
        <button class="download-btn">Download Recipe as PDF</button>
    `;
    
    // Add the element to the container
    container.appendChild(recipeElement);
    
    // Add click event to the download button
    const downloadBtn = recipeElement.querySelector('.download-btn');
    downloadBtn.addEventListener('click', function() {
        downloadRecipeAsPdf(recipe);
    });
}

// Function to download the recipe as a PDF file
function downloadRecipeAsPdf(recipe) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set the content of the PDF
    doc.setFontSize(16);
    doc.text(recipe.name, 10, 10);
    
    doc.setFontSize(12);
    doc.text('Ingredients:', 10, 20);
    doc.text(recipe.ingredients, 10, 30);

    doc.text('Steps:', 10, 50);
    doc.text(recipe.steps, 10, 60);

    // Generate the PDF and trigger the download
    doc.save(`${recipe.name.replace(/\s+/g, '_')}.pdf`);
}
