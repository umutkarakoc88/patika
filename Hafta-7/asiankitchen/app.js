// Menu data array with objects for each menu item
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Select the section where menu items will be displayed
const sectionCenter = document.querySelector('.section-center');

// Select the container for filter buttons
const btnContainer = document.querySelector('.btn-container');

// Log selected elements to console for debugging
console.log("sectionCenter:", sectionCenter);
console.log("btnContainer:", btnContainer);

// Event listener for when the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu); // Display all menu items on initial load
  displayMenuButtons(); // Display filter buttons on initial load
});

// Function to display menu items
function displayMenuItems(menuItems) {
  // Map through the menu items and create HTML structure for each item
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-items col-lg-6 col-sm-12">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </article>`;
  }).join(''); // Join the array into a single string
  
  // Set the inner HTML of the section to display the menu items
  sectionCenter.innerHTML = displayMenu;
}

// Function to display filter buttons
function displayMenuButtons() {
  // Reduce the menu array to get unique categories
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['All']); // Include 'All' as a default category

  // Map through categories and create button for each
  const categoryBtns = categories.map(function (category) {
    return `<button class="btn btn-outline-dark btn-item" type="button" data-id=${category}>
              ${category}
            </button>`;
  }).join(''); // Join the array into a single string
  
  // Set the inner HTML of the button container to display the buttons
  btnContainer.innerHTML = categoryBtns;
  
  // Select all filter buttons
  const filterBtns = btnContainer.querySelectorAll('.btn-item');
  
  // Add event listeners to each filter button
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id; // Get the category from the clicked button
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem; // Return items matching the selected category
        }
      });
      
      // Display all items if 'All' is selected, otherwise display filtered items
      if (category === 'All') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
