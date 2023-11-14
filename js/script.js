'use strict'; 
const elements = document.querySelectorAll(".door");

elements.forEach((element, index) => {
  element.addEventListener("mouseenter", (event) => {
    event.stopPropagation(); 
    const direction = getDirection(index);
    const isOpen = element.classList.contains(`doorOpen${direction}`);
    closeAllDoors();
    if (!isOpen) {
      element.classList.add(`doorOpen${direction}`);
    }
  });
  // element.addEventListener("mouseleave", () => {
  //   closeAllDoors();
  // });
});

document.addEventListener("click", (event) => {  
  if (!event.target.closest(".door")) {
    closeAllDoors();
  }
});

function getDirection(index) {
  switch (index) {
    case 0: return "Left";
    case 1: return "Right";
    case 2: return "Top";
    case 3: return "Bottom";
    default: return "Right";
  }
}

function closeAllDoors() {
  elements.forEach((element, index) => {
    const direction = getDirection(index);
    element.classList.remove(`doorOpen${direction}`);
  });
}