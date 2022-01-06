// document.getElementById("heading").style.color = "turquoise";
const example = document.getElementById("heading");
let trigger = "true";

example.addEventListener("click", () => {
  if (trigger) {
    example.style.color = "blue";
  }
  else (trigger) => {
    example.style.color = "green";
  }
    // example.style.color = "red";
    // example.style.backgroundColor = "purple";
});


// const myHeading = document.getElementById("heading");

// myHeading.addEventListener("click",()=>{
//     myHeading.style.color = "red";
// });
