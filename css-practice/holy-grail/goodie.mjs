// menu.mjs

// Sample menu items for Cottage Bakery with types and image placeholders
const bakeryMenu = [
  {
    name: "Strawberry Danish",
    type: "Pastry",
    description: "A flaky, buttery pastry filled with rich cream cheese and topped with fresh, sweet strawberries. Finished with a light drizzle of icing for the perfect balance of tart and sweet.",
    price: "$3.25",
    img: "<img src='bakery_images/strawberry_danish.webp' alt='Sourdough Bread'>",
  },
  {
    name: "Chocolate Chip Cookies",
    type: "Pastry",
    description: "Soft and chewy cookies filled with chocolate chips.",
    price: "$1.50",
    img: "<img src='bakery_images/Chocolate_chip_cookies.webp' alt='Chocolate Chip Cookies'>",
  },
  {
    name: "Blueberry Muffin",
    type: "Pastry",
    description: "Moist muffin loaded with fresh blueberries.",
    price: "$2.00",
    img: "<img src='bakery_images/blueberry_muffin.jpg' alt='Blueberry Muffin'>",
  },
  {
    name: "Croissant",
    type: "Pastry",
    description: "Buttery, flaky croissant baked to perfection.",
    price: "$3.00",
    img: "<img src='bakery_images/croissant.webp' alt='Croissant'>",
  },
  {
    name: "Cinnamon Rolls",
    type: "Pastry",
    description: "Sweet rolls swirled with cinnamon and topped with icing.",
    price: "$3.50",
    img: "<img src='bakery_images/cinnamon_roll.webp' alt='Cinnamon Rolls'>",
  },
  {
    name: "Carrot Cake",
    type: "Cake",
    description: "Moist carrot cake topped with creamy frosting.",
    price: "$5.00",
    img: "<img src='bakery_images/carrot_cake.webp' alt='Carrot Cake'>",
  },
  {
    name: "Banana Bread",
    type: "Bread",
    description: "Deliciously moist banana bread with a hint of cinnamon.",
    price: "$4.00",
    img: "<img src='bakery_images/banana_bread.webp' alt='Banana Bread'>",
  },
];

// Function to display the menu
export function displayMenu() {
  bakeryMenu.forEach((item, index) => {
    console.log(`\n${index + 1}. ${item.name} (${item.type})`);
    console.log(`   ${item.description}`);
    console.log(`   Price: ${item.price}`);
    console.log(`   ${item.img}`);
  });
}

// Export the menu for potential use elsewhere
export default bakeryMenu;
