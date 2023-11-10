const elements = document.querySelectorAll(".door");

elements.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.toggle(`doorOpen${getDirection(index)}`);
  });
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

// elements.forEach(element => {  
//   element.addEventListener("click", ()=>{
//     element.classList.toggle("doorOpenLeft");
//   });
// });

//  console.log(elements)
// for (let i = 0; i < elements.length; i++) {
//   // const element = elements[i];
 
//   elements[i]
// }

window.addEventListener('DOMContentLoaded', (event) => {
  positionDoors(); // Викликаємо функцію одразу при завантаженні сторінки
});

window.addEventListener('resize', () => {
  positionDoors(); // Викликаємо функцію при зміні розміру вікна
});

function positionDoors() {
  const container = document.querySelector('.container');
  const doors = document.querySelectorAll('.door');

  doors.forEach((door) => {
    const rectContainer = container.getBoundingClientRect();
    const rectDoor = door.getBoundingClientRect();

    const offsetX = (rectDoor.left - rectContainer.left) / rectContainer.width * 100;
    const offsetY = (rectDoor.top - rectContainer.top) / rectContainer.height * 100;

    door.style.left = `${offsetX}%`;
    door.style.top = `${offsetY}%`;
  });
}