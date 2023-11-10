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

