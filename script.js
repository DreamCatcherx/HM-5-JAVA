"use strict";


let inputWraper = document.querySelector(".input-form");
let addButton = document.querySelector(".add-button");
let ul = document.querySelector(".ul-list");
let clearAllItems = document.querySelector(".clearlist");
let formElement = document.querySelector('.form-wraper');



formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // 1.get input value
  let inputisMnishvneloba = inputWraper.value;
  if (inputisMnishvneloba == " ") {
    return;
  }
  // 2.input value add in ul
  let li = document.createElement("li");
    


  let iTag = document.createElement("i");
  iTag.classList.add("fa-solid", "fa-trash");
  iTag.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = inputisMnishvneloba;

  li.appendChild(iTag);
  ul.appendChild(li);

  // 3.clear input
  inputWraper.value = " ";
});

clearAllItems.addEventListener("click", function () {
  ul.innerHTML = " ";
});




// burger Bar
let navBar = document.getElementById('navigation');
// let burgerBar = document.getElementById('toggleBar');
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  // navBar.classList.toggle('active');
  navBar.classList.toggle('toggleNav');
  toggleButton.classList.toggle('activeMenu');
});

// HOMEWORK


