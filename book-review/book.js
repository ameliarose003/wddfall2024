// Create a variable/array of the information that isin the  html as a book reviews

// const article = [
//     {
//         title: "The book name",
//         subtitle: "number of book in the series",
//         publishDate: "date review was published",
//         ageRange: "min rage of who should read the book",
//         genre: "books genre",
//         rating: "1-5 stars of how good the book is",
//         imgSrc: "book.jpeg",
//         review: "book review comment"
//     }
// ]

const articles = [
    {
        title: "The Way Of Kings",
        subtitle: "Stormlight archive book 1",
        publishDate: "October 23th 2024",
        ageRange: "12+",
        genre: "Fantast",
        rating: "*****",
        imgSrc: "way_of_kings.jpeg",
        review: "It's a really good book that is really inspiring especially for older teens."
    },
    {
        title: "Words Of Radiance",
        subtitle: "Stormlight archive book 2",
        publishDate: "October 24th 2024",
        ageRange: "12+",
        genre: "Fantast",
        rating: "*****",
        imgSrc: "words_of_radiance.jpeg",
        review: "The story continues, what other treatchery are they going to find? Is she really still alive???"
    },
    {
        // id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        publishDate: "Feb 12, 2022",
        review: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        // imgAlt: "Book cover for Pawn of Prophecy",
        ageRange: "12-16",
        genre: "Fantasy",
        rating: "⭐⭐⭐⭐⭐"
    }
];

// Now lets make it work by connecting it to the html using the class tags

function buildAndDisplayArticles() {
    // This connects to the container where the books are and will be added to
    const booksContainer = document.querySelector('.books');

    articles.forEach(item => {
        // Create a new section for each book
        const articleSection = document.createElement('section');

        // Create the template that matches the html that goes inside the section
        const articleContent = `
            <ul>
                <li>Publish Date: ${item.publishDate}</li>
                <li>Age Range: ${item.ageRange}</li>
                <li>Genre: ${item.genre}</li>
                <li>Rating: ${item.rating}</li>
            </ul>
            <div>
                <h2>${item.title}</h2>
                <h3>${item.subtitle}</h3>
                <img src="${item.imgSrc}" alt="${item.title} book" width="200" height="300"></img>
                <p>${item.review}</p>
            </div>
            `;

        articleSection.innerHTML = articleContent
        booksContainer.appendChild(articleSection)

    })
}

document.addEventListener('DOMContentLoaded', buildAndDisplayArticles);
