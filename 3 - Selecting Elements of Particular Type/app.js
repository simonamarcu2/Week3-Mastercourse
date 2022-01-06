// const drinks = document.getElementById("drinks");

// const paragraphs = document.getElementsByTagName("p");
// // let firstPara = paragraphs[0];
// for (let i = 0; i< paragraphs.length; i++){
//   paragraphs[i];
// }

// const list = document.getElementsByTagName("li");

// list.length;
// list[0];
// list[3];
// list[0].style.color="red";
// const list = document.getElementsByTagName("li");
const myHeading = document.getElementById("myHeading");
const myList = document.getElementsByTagName("li");

myHeading.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
        if (myList[i].className == "not-orange") {
            myList[i].style.color = "red";
        } else {
            myList[i].style.color = "orange";
        }
    }
});

// myHeading.addEventListener("click", () => {
//     for (let i = 0; i < myList.length; i++) {
//         if (myList[i].className != "not-orange") {
//             myList[i].style.color = "orange";
//         }
//     }
// });

for (let i = 0; i < list.length; i++) {
    if (list[i].className != "not-orange"){
        list[i].style.color = "orange";
    }
}
