// eslint-disable-next-line import/extensions
import buttonsList from './buttonsList.js';

class Keyboard {
  constructor() {
    this.elements = {
      main: null,
      keyboardContainer: null,
      keyboardKeys: null,
    };
    this.properties = {
      value: '',
      capsLock: false,
      shift: 'low',
      lang: 'eng',
      altClick: false,
      ctrlClick: false,
    };
  }

  // create Keyboard to DOM
  init() {
    this.elements.main = document.createElement('div');
    this.elements.main.classList.add('keyboard');
    document.body.prepend(this.elements.main);
    document.querySelector(
      '.keyboard',
    ).innerHTML += `<h1 class='keyboard-heading'>Virtual Keyboard</h1>\n
        <textarea class='use-keyboard' name='' id='' cols='30' rows='10'></textarea>\n
        <p class='description'>Для переключения языка используйте левыe Ctrl + Alt</p>`;

    // create keyboard container
    this.elements.keyboardContainer = document.createElement('div');
    this.elements.keyboardContainer.classList.add('keyboard-keys');
    document.querySelector('.keyboard').append(this.elements.keyboardContainer);
    this.checkLang();
    this.createKeys();
    // collect the buttons
    this.elements.keyboardKeys = document.querySelectorAll('.keyboard__key');
  }

  // create Keys for Keyboard
  createKeys() {
    const fragment = document.querySelector('.keyboard-keys');
    fragment.innerHTML = '';
    const keyboardLayoutKeys = buttonsList;

    keyboardLayoutKeys.forEach((key) => {
      const keyElement = document.createElement('button');
      keyElement.setAttribute('type', 'button');
      keyElement.setAttribute('id', key.codeName);
      keyElement.classList.add('keyboard__key');

      const lng = this.properties.lang;
      const height = this.properties.shift;
      keyElement.innerHTML = key[lng][height];
      fragment.append(keyElement);

      // button with some function
      switch (key.codeName) {
        case 'Backspace':
          fragment.appendChild(document.createElement('br'));
          keyElement.classList.add('keyboard__backspace');
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1,
            );
            this.reloadTextArea();
          });
          break;
        case 'Tab':
          keyElement.classList.add('keyboard__tab');
          break;
        case 'Delete':
          fragment.appendChild(document.createElement('br'));
          break;
        case 'CapsLock':
          keyElement.classList.add('keyboard__caps');
          keyElement.addEventListener('click', () => {
            this.switchCapsLock();
          });
          break;
        case 'Enter':
          fragment.appendChild(document.createElement('br'));
          keyElement.classList.add('keyboard__enter');
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.reloadTextArea();
          });
          break;
        case 'ShiftLeft':
          keyElement.classList.add('keyboard__shift-left');
          keyElement.addEventListener('click', () => {
            this.switchToShift();
          });
          break;
        case 'ShiftRight':
          fragment.appendChild(document.createElement('br'));
          keyElement.classList.add('keyboard__shift-right');
          keyElement.addEventListener('click', () => {
            this.switchToShift();
          });
          break;
        case 'Space':
          keyElement.classList.add('keyboard__space');
          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.reloadTextArea();
          });
          break;
        case 'Win':
          break;
        case 'AltRight':
          break;
        case 'AltLeft':
          keyElement.addEventListener('click', () => {
            if (this.ctrlClick) {
              this.langСhange();
              this.ctrlClick = !this.ctrlClick;
            } else this.altClick = !this.altClick;
          });
          break;
        case 'ControlRight':
          break;
        case 'ControlLeft':
          keyElement.addEventListener('click', () => {
            if (this.altlClick) {
              this.langСhange();
              this.altClick = !this.altClick;
            } else this.ctrlClick = !this.ctrlClick;
          });
          break;
        // дописать остальные кнопки
        // в дефолте определять shift, caps и язык
        default:
          keyElement.classList.add('keyboard__usual');
          keyElement.addEventListener('click', () => {
            this.properties.value += keyElement.textContent;
            this.reloadTextArea();
          });
      }
    });
  }

  reloadTextArea() {
    document.querySelector('.use-keyboard').textContent = this.properties.value;
  }

  switchCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    // eslint-disable-next-line no-restricted-syntax
    for (const key of this.elements.keyboardKeys) {
      if (key.classList.contains('keyboard__usual')) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  }

  rewriteKeysValue() {
    this.elements.keyboardContainer.append = this.createKeys();
  }

  checkLang() {
    // eslint-disable-next-line no-undef
    if (localStorage.getItem('langForKeyboard')) {
      this.properties.lang = localStorage.getItem('langForKeyboard');
    } else {
      localStorage.setItem('langForKeyboard', this.properties.lang);
    }
  }

  langСhange() {
    this.properties.lang = (this.properties.lang === 'eng') ? 'ru' : 'eng';
    // eslint-disable-next-line no-undef
    localStorage.setItem('langForKeyboard', this.properties.lang);
    this.createKeys();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Keyboard().init();
});

document.addEventListener('keydown', (event) => {
  const pressedKey = document.getElementById(event.code);
  pressedKey.click();
  pressedKey.classList.add('active');
});

document.addEventListener('keyup', (event) => {
  const pressedKey = document.getElementById(event.code);
  pressedKey.classList.remove('active');
});
