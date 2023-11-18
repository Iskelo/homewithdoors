'use strict'; 
/* const elements = document.querySelectorAll(".door");

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
} */
const elements = document.querySelectorAll(".box");

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
  if (!event.target.closest(".box")) {
    closeAllDoors();
  }
});

function getDirection(index) {
  switch (index) {
    case 0: return "Left";
    case 1: return "Right";
    case 2: return "Top";
    case 3: return "Bottom";
    case 4: return "Top";
    case 5: return "Left";
    case 6: return "Right";
    case 7: return "Left";
    case 8: return "Bottom";
    case 9: return "Top";
    case 10: return "Bottom";
    case 11: return "Left";
    case 12: return "Right";
    case 13: return "Top";
    case 14: return "Bottom";
    case 15: return "Left";
    default: return "Right";
  }
}

function closeAllDoors() {
  elements.forEach((element, index) => {
    const direction = getDirection(index);
    element.classList.remove(`doorOpen${direction}`);
  });
}