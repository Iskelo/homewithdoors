'use strict'; 

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
});

document.addEventListener("click", (event) => {  
  if (!event.target.closest(".box")) {
    closeAllDoors();
  }
});

function getDirection(index) {
  switch (index) {
    case 0: return "Left"; //1
    case 1: return "Right"; //11
    case 2: return "Top"; //12
    case 3: return "Bottom"; //5
    case 4: return "Left"; //21
    case 5: return "Top"; //20
    case 6: return "Right"; //3
    case 7: return "Left"; //8
    case 8: return "Bottom"; //13
    case 9: return "Top"; //18
    case 10: return "Bottom"; //16
    case 11: return "Left"; //19
    case 12: return "Right";//4
    case 13: return "Top";//10
    case 14: return "Bottom";//14
    case 15: return "Left";//7
    case 16: return "Bottom";//9
    case 17: return "Top";//22
    case 18: return "Bottom";//17
    case 19: return "Left";//15
    case 20: return "Right";//6
    case 21: return "Left";//23
    case 22: return "Bottom";//2
    case 23: return "Left";//24
    default: return "Right";
  }
}

function closeAllDoors() {
  elements.forEach((element, index) => {
    const direction = getDirection(index);
    element.classList.remove(`doorOpen${direction}`);
  });
}

function redirectToAnotherPage() {    
    window.location.href = "../index.html";
}
