const input = document.getElementById("input");
const button = document.getElementById("submit");
const theList = document.getElementById("list");
const remove = document.getElementById("remove");
let list = document.getElementsByTagName("ul")[0];
const theItems = document.getElementsByTagName("li");


button.addEventListener("click", (event) => {
  if (input.value != "") {
      // create li element in memory
      let listItem = document.createElement("li");
      // adjust the li element properties
      listItem.textContent = input.value;
      // add the new li element to the array from reference
      list.appendChild(listItem);

      listItem.addEventListener("mouseover", () => {
          listItem.textContent = listItem.textContent.toUpperCase();
      });
      listItem.addEventListener("mouseout", () => {
          listItem.textContent = listItem.textContent.toLowerCase();
      });
      listItem.addEventListener("click", () => {
          list.removeChild(listItem);
      });

      // assign a new blank value to input.value i.e. clear the field
      input.value = "";
      console.log(event);
  }
});

remove.addEventListener("click", () => {
  list.removeChild(document.querySelector('li:last-child'));
})

const cucumber = document.getElementById("example")

cucumber.addEventListener("mouseover", () => {
  cucumber.textContent = cucumber.textContent.toLocaleUpperCase();
});

cucumber.addEventListener("mouseout", () => {
  cucumber.textContent = cucumber.textContent.toLocaleLowerCase();
});





for (let theItems of theItems) {
  theItems.addEventListener("mouseover", () =>{
    cucumber.textContent = cucumber.textContent.toLocaleUpperCase();
  })
  theItems.addEventListener("mouseout", () =>{
    cucumber.textContent = cucumber.textContent.toLocaleLowerCase();
  })
}

for (let i = 0; i < theItems.length; i++) {
  theItems[i].addEventListener("mouseover", () => {
      theItems[i].textContent = theItems[i].textContent.toUpperCase();
  });
  theItems[i].addEventListener("mouseout", () => {
      theItems[i].textContent = theItems[i].textContent.toLowerCase();
  });
  theItems[i].addEventListener("click", () => {
      list.removeChild(theItems[i]);
  });
}

document.addEventListener("keypress", (event) => {

})
