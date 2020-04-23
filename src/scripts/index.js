const elements = {
  button: document.querySelector(".tasks-list__btn"),
  userInput: document.querySelector(".tasks-list__input"),
  tasksList: document.getElementById("results__list"),
  todos: document.querySelector(".todo__subtitle"),
};

function getDarkColor() {
  let letters = "0123456789";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 9)];
  }
  return color;
}

const addItem = () => {
  //grab the value from the field and save into a new variable
  let userInput = elements.userInput.value;
  //console.log("userInput", userInput);

  if (userInput.length == 0) {
    document.querySelector(".alert").classList.remove("hidden");
  } else {
    document.querySelector(".alert").classList.add("hidden");

    const span = `<span
    class="closebtn"
    onclick="this.parentElement.classList.add('hidden');"
    >&times;</span
  >`;
    const even = `<li class="even">${userInput}${span}</li>`;
    const odd = `<li class="odd" style='color:${getDarkColor()}'>${userInput}${span}</li>`;

    if (elements.tasksList.childNodes.length % 2 !== 0) {
      elements.tasksList.insertAdjacentHTML("afterbegin", odd);
    } else {
      elements.tasksList.insertAdjacentHTML("afterbegin", even);
    }
  }

  const total = `All todos count: ${elements.tasksList.children.length} <span>(completed 1)</span>`;
  elements.todos.innerHTML = total;

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
