const elements = {
  button: document.querySelector(".tasks-list__btn"),
  userInput: document.querySelector(".tasks-list__input"),
  tasksList: document.getElementById("results__list"),
};

const colorGenerator = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  color += "50";
  return color;
};

const addItem = () => {
  //grab the value from the field and save into a new variable
  let userInput = elements.userInput.value;
  //console.log("userInput", userInput);

  if (userInput.length == 0) {
    document.querySelector(".alert").classList.remove("hidden");
  } else {
    document.querySelector(".alert").classList.add("hidden");

    const even = `<li class="list-item even">${userInput}</li>`;
    const odd = `<li class="list-item odd" style='background:${colorGenerator()}'>${userInput}</li>`;

    if (elements.tasksList.children.length % 2 !== 0) {
      elements.tasksList.insertAdjacentHTML("beforeend", odd);
    } else {
      elements.tasksList.insertAdjacentHTML("beforeend", even);
    }
  }
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
