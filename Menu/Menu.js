/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


// const menu = document.querySelector('.menu');
// menuItems.forEach(lists => {
//   menu.appendChild(menuComp.map(lists.items));
// })

// function menuComp(lists){

//   const listItems = document.createElement('li');
  
// }

// function menuList() {
//   document.querySelectorAll(".menu").classList.toggle("show");
// return menuList();
// }


const head = document.querySelector('.header');
head.appendChild(maxMenu(menuItems));

function maxMenu(array){
  const mainMenu = document.createElement('div');
  const ulMenu = document.createElement('ul');
console.log(mainMenu);
  // const menuList = document.querySelector('.menu');
mainMenu.appendChild(ulMenu);
array.forEach(function(menus) {
  const liItem = document.createElement('li');
  liItem.textContent = menus;
  ulMenu.appendChild(liItem);
})



mainMenu.classList.add('.menu');


const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('menu--open');
})

return mainMenu;
}
