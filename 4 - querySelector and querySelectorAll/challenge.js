const myHeading = document.querySelector("#heading");
const myList = document.querySelectorAll("li");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.color = colours[i];
}



// array built only with even children
const listItemsEven = document.querySelectorAll("li:nth-child(even)");
//  array built only with odd children
const listItemsOdd = document.querySelectorAll("li:nth-child(odd)");

myHeading.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
        if (myList[i].className == "green"){
            myList[i].style.color = "green";
        }
    }
});




// const listItems = document.querySelectorAll("li:nth-child(even)");

// console.log(listItems);
// console.log(listItems.length);


// myHeading.addEventListener("click", () => {
//   for(let i =0; i < listItemsEven.lenght; i++){
//     listItemsEven[i].style.color = "green";
//   }
// });
const myHeading = document.querySelector("#heading");
const myList = document.querySelectorAll("li");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
// array built only with even children
const listItemsEven = document.querySelectorAll("li:nth-child(even)");
// array built only with odd children
const listItemsOdd = document.querySelectorAll("li:nth-child(odd)");

let x = 0;
myHeading.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
            myList[i].style.color = colours[x];
            x++;
            if (x >= 6) {
                x = 0;
            }
    }
});

// myHeading.addEventListener("click", () => {
//     for(let i = 0; i < listItemsEven.length; i++){
//         listItemsEven[i].style.color = "green";
//     }
// });
