const image  =  document.getElementById("#cat");
const button = document.getElementById("submit");
// const input = document.getElementById("input");
// const flag = newFunction();
let flag = true;

button.addEventListener("click", () => {
  if(flag) {
    image.style.display = "none";
    button.textContent = "show";
  } else {
    image.style.display = "block";
    button.textContent = "hide";
    flag= true;
  }
})

// function newFunction() {
//   return true;
// }
// image.display = none;
