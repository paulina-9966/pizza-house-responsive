const menu = [
  {
    id: 1,
    title: "Queen Margaret",
    category: "pizza",
    price: 15.99,
    img: "./images/pizza-0.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 2,
    title: "Mushroom's crazy",
    category: "pizza",
    price: 19.99,
    img: "./images/pizza-1.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 3,
    title: "Tomato & olives",
    category: "pizza",
    price: 17.99,
    img: "./images/pizza-2.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 4,
    title: "Spinach party",
    category: "pizza",
    price: 21.99,
    img: "./images/pizza-3.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 5,
    title: "Red & Green",
    category: "pizza",
    price: 24.99,
    img: "./images/pizza-0.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 6,
    title: "Be classic",
    category: "pizza",
    price: 16.99,
    img: "./images/pizza-5.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 7,
    title: "Cheese Vulcano",
    category: "pizza",
    price: 23.99,
    img: "./images/pizza-6.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 8,
    title: "rabbit fricassee",
    category: "dinner",
    price: 35.99,
    img: "./images/din-1.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 9,
    title: "Alpaca steak",
    category: "dinner",
    price: 59.99,
    img: "./images/din-2.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 10,
    title: "Vegan Bologneese",
    category: "dinner",
    price: 24.99,
    img: "./images/din-3.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 11,
    title: "sourcy lemonade",
    category: "drink",
    price: 5.99,
    img: "./images/d-1.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 12,
    title: "colorfull cocktails",
    category: "drink",
    price: 19.99,
    img: "./images/d-2.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 13,
    title: "barist's cafe",
    category: "drink",
    price: 8.99,
    img: "./images/d-3.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 14,
    title: "common pilzner",
    category: "beer",
    price: 5.99,
    img: "./images/b-2.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 15,
    title: "deep dark lager",
    category: "beer",
    price: 15.99,
    img: "./images/b-1.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },
  {
    id: 16,
    title: "sweet strawberries",
    category: "cake",
    price: 45.99,
    img: "./images/c-2.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Illo, eum`,
  },

  
];


// start the menu funcionality

//get parent element
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(menuItems) {
let displayMenu = menuItems.map(function(item) {
  // console.log(item);
   return `<article class="menu-item py-4 col-lg-4 col-md-6 col-sm-12
   ml-auto mr-auto">
   <img src=${item.img} class="photo" alt=${item.title}/>
   <div class="item-info">
       <header>
           <h4 class="text-center">${item.title}</h4>
           <h4 class="price">$${item.price}</h4>
       </header>
       <p class="item-text">${item.desc}</p>
   </div>
</article>`;

// displayMenu = displayMenu.join("");
// sectionCenter.innerHTML = displayMenu;


});

displayMenu = displayMenu.join("");

sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons () {

const categories = menu.reduce(function(values,item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
     return values;
}, 
['all']);

  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn btn btn-dark mx-1" type="button" data-id=${category}>
      ${category}
    </button>`
  })
  .join("");

  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  //filter items
filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
              // console.log(menuItem.category);
              if (menuItem.category == category) {
                return menuItem;
              }
                
            });
           // console.log(menuCategory);
           if (category === 'all') {
             displayMenuItems(menu);
           } else {
             displayMenuItems(menuCategory);
           }
        });
    });
  }
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
  });
