// activity 1
const input = document.getElementById("input");
const button = document.getElementById("submit");
const theList= document.getElementById("list");
const hideshow = document.getElementById("showhide-btn");
// document.getElementById("submit").addEventListener


// // activity 2

// button.addEventListener("click", () => {
//   let listItem = document.createElement("li");
//   listItem.textContent = input.value;
//   console.log(listItem);
// })

// activity 3

button.addEventListener("click", () => {
  // create li element in memory
  let listItem = document.createElement("li");
  listItem.textContent = input.value;
  // console.log(listItem);
  if (input.value != "") {
    let list = document.getElementsByTagName("ul")[0];
    console.log(list);
    list.appendChild(listItem);
    let list = document.getElementById
    input.value = "";
  }
});

hideshow.addEventListener("click", () =>{
  if (theList.style.display == "block"){
    theList.style.display = "none"; 
    hideshow.textContent = "show";
 } else{ 
  theList.style.display = "block"
  hideshow.textContent = "hide";

    }
})
// const input = document.getElementById("input");
// const button = document.getElementById("submit");
// const theList = document.getElementById("list");

// button.addEventListener("click", () => {
//     if (input.value != "") {
//         // create li element in memory
//         let listItem = document.createElement("li");
//         // adjust the li element properties
//         listItem.textContent = input.value;

//         // create an array from a specified ul, acts similar to a parent node
//         let list = document.getElementsByTagName("ul")[0];
//         // add the new li element to the array from reference
//         list.appendChild(listItem);

//         // assign a new blank value to input.value i.e. clear the field
//         input.value = "";
//     }
// });
