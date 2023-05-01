import buttonsList from "./buttonsList.js";
class Keyboard {
  elements = {
    main: null,
    keyboardContainer: null,
    keys: [],
  };
  properties = {
    value: "",
    capsLock: false,
  };
  //create Keyboard to DOM
  init() {
    //create main container
    this.elements.main = document.createElement("div");
    this.elements.main.classList.add("keyboard");
    document.body.prepend(this.elements.main);
    //create heading and texarea
    document.querySelector(
      ".keyboard"
    ).innerHTML += `<h1 class="keyboard-heading">Virtual Keyboard</h1>\n
        <textarea class="use-keyboard" name="" id="" cols="30" rows="10"></textarea>`;
    //create keyboard container
    this.elements.keyboardContainer = document.createElement("div");
    this.elements.keyboardContainer.classList.add("keyboard-keys");
    this.elements.keyboardContainer.append(this.createKeys());
    document.querySelector(".keyboard").append(this.elements.keyboardContainer);
  }
  //create Keys for Keyboard
  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyboardLayoutKeys = buttonsList;

    let lang = "eng";
    let shift = false;

    keyboardLayoutKeys.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");
      keyElement.textContent = key.eng.low;
      fragment.append(keyElement);
      
      switch (key.codeName) {
        case "Backspace":
          fragment.appendChild(document.createElement("br"));
          keyElement.classList.add("keyboard__backspace");
          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
          });
          break;
        case "Tab":
          keyElement.classList.add("keyboard__tab");
          break;
        case "Delete":
          fragment.appendChild(document.createElement("br"));
          break;
        case "CapsLock":
          keyElement.classList.add("keyboard__caps");
          keyElement.addEventListener("click", () => {
            switchToCapsLock();
          });
          break;
        case "Enter":
          fragment.appendChild(document.createElement("br"));
          keyElement.classList.add("keyboard__enter");
          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
          });
          break;
        case "ShiftLeft":
          keyElement.classList.add("keyboard__shift-left");
          keyElement.addEventListener("click", () => {
            switchToShift();
          });
          break;
        case "ShiftRight":
          fragment.appendChild(document.createElement("br"));
          keyElement.classList.add("keyboard__shift-right");
          keyElement.addEventListener("click", () => {
            switchToShift();
          });
          break;
        case "Space":
          keyElement.classList.add("keyboard__space");
          break;
      }
      });

    return fragment;
  }
};



window.addEventListener("DOMContentLoaded", function () {
  new Keyboard().init();
});
console.log(buttonsList)