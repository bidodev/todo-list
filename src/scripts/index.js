const elements = {
  button: document.querySelector(".tasks-list__btn"),
  userInput: document.querySelector(".tasks-list__input"),
  searchResList: document.querySelector(".results__list"),
};

const addItem = () => {
  //grab the value from the field and save into a new variable
  let userInput = elements.userInput.value;
  //console.log("userInput", userInput);

  const markUp = `<li>${userInput}</li>`;
  elements.searchResList.insertAdjacentHTML("beforebegin", markUp);

  //clean the field input
  elements.userInput.value = "";
};

///////////////////EVENTS HANDLER////////////////////////
elements.button.addEventListener("click", addItem);

document.addEventListener("keypress", event => {
  //check if the user pressed the return key (enter)
  if (event.keyCode === 13) {
    addItem();
  }
});
