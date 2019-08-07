/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


window.addEventListener("load", function(){

  let headerDiv = document.querySelector('.header');
  let mainMenu = document.querySelector('.header .menu-button');
  mainMenu.addEventListener('click', function() {
    finishedMenu.classList.toggle('menu--open');
  });

  function menuCreator(array) {
    const menu = document.createElement('div');
    const menuUl = document.createElement('ul');
    const menuStudents = document.createElement('li');
    const menuFaculty = document.createElement('li');
    const menuWhatsNew = document.createElement('li');
    const menuTechTrends = document.createElement('li');
    const menuMusic = document.createElement('li');
    const menuLogOut = document.createElement('li');
  
    menu.appendChild(menuUl);
    menuUl.appendChild(menuStudents);
    menuUl.appendChild(menuFaculty);
    menuUl.appendChild(menuWhatsNew);
    menuUl.appendChild(menuTechTrends);
    menuUl.appendChild(menuMusic);
    menuUl.appendChild(menuLogOut);
  
    menu.classList.add('menu');
  
    menuStudents.textContent = array['0'];
    menuFaculty.textContent = array['1'];
    menuWhatsNew.textContent = array['2'];
    menuTechTrends.textContent = array['3'];
    menuMusic.textContent = array['4'];
    menuLogOut.textContent = array['5'];
  
    return menu
  }

  let finishedMenu = menuCreator(menuItems);
  headerDiv.appendChild(finishedMenu);

});





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
