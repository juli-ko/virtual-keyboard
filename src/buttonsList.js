const buttonsList = [
  {
    codeName: 'Backquote',
    eng: {
      low: '`',
      shift: '~',
    },
    ru: {
      low: 'ё',
      shift: 'Ё',
    },
  },
  {
    codeName: 'Digit1',
    eng: {
      low: '1',
      shift: '!',
    },
    ru: {
      low: '1',
      shift: '!',
    },
  },
  {
    codeName: 'Digit2',
    eng: {
      low: '2',
      shift: '@',
    },
    ru: {
      low: '2',
      shift: '"',
    },
  },
  {
    codeName: 'Digit3',
    eng: {
      low: '3',
      shift: '#',
    },
    ru: {
      low: '3',
      shift: '№',
    },
  },
  {
    codeName: 'Digit4',
    eng: {
      low: '4',
      shift: '$',
    },
    ru: {
      low: '4',
      shift: ';',
    },
  },
  {
    codeName: 'Digit5',
    eng: {
      low: '5',
      shift: '%',
    },
    ru: {
      low: '5',
      shift: '%',
    },
  },
  {
    codeName: 'Digit6',
    eng: {
      low: '6',
      shift: '^',
    },
    ru: {
      low: '6',
      shift: ':',
    },
  },
  {
    codeName: 'Digit7',
    eng: {
      low: '7',
      shift: '&',
    },
    ru: {
      low: '7',
      shift: '?',
    },
  },
  {
    codeName: 'Digit8',
    eng: {
      low: '8',
      shift: '*',
    },
    ru: {
      low: '8',
      shift: '*',
    },
  },
  {
    codeName: 'Digit9',
    eng: {
      low: '9',
      shift: '(',
    },
    ru: {
      low: '9',
      shift: '(',
    },
  },
  {
    codeName: 'Digit0',
    eng: {
      low: '0',
      shift: ')',
    },
    ru: {
      low: '0',
      shift: ')',
    },
  },
  {
    codeName: 'Minus',
    eng: {
      low: '-',
      shift: '_',
    },
    ru: {
      low: '-',
      shift: '_',
    },
  },
  {
    codeName: 'Equal',
    eng: {
      low: '=',
      shift: '+',
    },
    ru: {
      low: '=',
      shift: '+',
    },
  },
  {
    codeName: 'Backspace',
    eng: {
      low: 'Backspace',
      shift: 'Backspace',
    },
    ru: {
      low: 'Backspace',
      shift: 'Backspace',
    },
  },
  {
    codeName: 'Tab',
    eng: {
      low: 'Tab',
      shift: 'Tab',
    },
    ru: {
      low: 'Tab',
      shift: 'Tab',
    },
  },
  {
    codeName: 'KeyQ',
    eng: {
      low: 'q',
      up: 'Q',
    },
    ru: {
      low: 'й',
      up: 'Й',
    },
  },
  {
    codeName: 'KeyW',
    eng: {
      low: 'w',
      up: 'W',
    },
    ru: {
      low: 'ц',
      up: 'Ц',
    },
  },
  {
    codeName: 'KeyE',
    eng: {
      low: 'e',
      up: 'E',
    },
    ru: {
      low: 'у',
      up: 'У',
    },
  },
  {
    codeName: 'KeyR',
    eng: {
      low: 'r',
      up: 'R',
    },
    ru: {
      low: 'к',
      up: 'К',
    },
  },
  {
    codeName: 'KeyT',
    eng: {
      low: 't',
      up: 'T',
    },
    ru: {
      low: 'е',
      up: 'Е',
    },
  },
  {
    codeName: 'KeyY',
    eng: {
      low: 'y',
      up: 'Y',
    },
    ru: {
      low: 'н',
      up: 'Н',
    },
  },
  {
    codeName: 'KeyU',
    eng: {
      low: 'u',
      up: 'U',
    },
    ru: {
      low: 'г',
      up: 'Г',
    },
  },
  {
    codeName: 'KeyI',
    eng: {
      low: 'i',
      up: 'I',
    },
    ru: {
      low: 'ш',
      up: 'Ш',
    },
  },
  {
    codeName: 'KeyO',
    eng: {
      low: 'o',
      up: 'O',
    },
    ru: {
      low: 'щ',
      up: 'Щ',
    },
  },
  {
    codeName: 'KeyP',
    eng: {
      low: 'p',
      up: 'P',
    },
    ru: {
      low: 'з',
      up: 'З',
    },
  },
  {
    codeName: 'BracketLeft',
    eng: {
      low: '[',
      up: '{',
    },
    ru: {
      low: 'х',
      up: 'Х',
    },
  },
  {
    codeName: 'BracketRight',
    eng: {
      low: ']',
      up: '}',
    },
    ru: {
      low: 'ъ',
      up: 'Ъ',
    },
  },
  {
    codeName: 'Backslash',
    eng: {
      low: '\\',
      up: '|',
    },
    ru: {
      low: '/',
      up: '/',
    },
  },
  {
    codeName: 'Delete',
    eng: {
      low: 'Del',
      up: 'Del',
    },
    ru: {
      low: 'Del',
      up: 'Del',
    },
  },
  {
    codeName: 'CapsLock',
    eng: {
      low: 'CapsLock',
      up: 'CapsLock',
    },
    ru: {
      low: 'CapsLock',
      up: 'CapsLock',
    },
  },
  {
    codeName: 'KeyA',
    eng: {
      low: 'a',
      up: 'A',
    },
    ru: {
      low: 'ф',
      up: 'Ф',
    },
  },
  {
    codeName: 'KeyS',
    eng: {
      low: 's',
      up: 'S',
    },
    ru: {
      low: 'ы',
      up: 'Ы',
    },
  },
  {
    codeName: 'KeyD',
    eng: {
      low: 'd',
      up: 'D',
    },
    ru: {
      low: 'в',
      up: 'В',
    },
  },
  {
    codeName: 'KeyF',
    eng: {
      low: 'f',
      up: 'F',
    },
    ru: {
      low: 'а',
      up: 'А',
    },
  },
  {
    codeName: 'KeyG',
    eng: {
      low: 'g',
      up: 'G',
    },
    ru: {
      low: 'п',
      up: 'П',
    },
  },
  {
    codeName: 'KeyH',
    eng: {
      low: 'h',
      up: 'H',
    },
    ru: {
      low: 'р',
      up: 'Р',
    },
  },
  {
    codeName: 'KeyJ',
    eng: {
      low: 'j',
      up: 'J',
    },
    ru: {
      low: 'о',
      up: 'О',
    },
  },
  {
    codeName: 'KeyK',
    eng: {
      low: 'k',
      up: 'K',
    },
    ru: {
      low: 'л',
      up: 'Л',
    },
  },
  {
    codeName: 'KeyL',
    eng: {
      low: 'l',
      up: 'L',
    },
    ru: {
      low: 'д',
      up: 'Д',
    },
  },
  {
    codeName: 'Semicolon',
    eng: {
      low: ';',
      up: ':',
    },
    ru: {
      low: 'ж',
      up: 'Ж',
    },
  },
  {
    codeName: 'Quote',
    eng: {
      low: '"',
      up: '"',
    },
    ru: {
      low: 'э',
      up: 'Э',
    },
  },
  {
    codeName: 'Enter',
    eng: {
      low: 'Enter',
      up: 'Enter',
    },
    ru: {
      low: 'Enter',
      up: 'Enter',
    },
  },
  {
    codeName: 'ShiftLeft',
    eng: {
      low: 'Shift',
      up: 'Shift',
    },
    ru: {
      low: 'Shift',
      up: 'Shift',
    },
  },
  {
    codeName: 'KeyZ',
    eng: {
      low: 'z',
      up: 'Z',
    },
    ru: {
      low: 'я',
      up: 'Я',
    },
  },
  {
    codeName: 'KeyX',
    eng: {
      low: 'x',
      up: 'X',
    },
    ru: {
      low: 'ч',
      up: 'Ч',
    },
  },
  {
    codeName: 'KeyC',
    eng: {
      low: 'с',
      up: 'С',
    },
    ru: {
      low: 'c',
      up: 'C',
    },
  },
  {
    codeName: 'KeyV',
    eng: {
      low: 'v',
      up: 'V',
    },
    ru: {
      low: 'м',
      up: 'М',
    },
  },
  {
    codeName: 'KeyB',
    eng: {
      low: 'b',
      up: 'B',
    },
    ru: {
      low: 'и',
      up: 'И',
    },
  },
  {
    codeName: 'KeyN',
    eng: {
      low: 'n',
      up: 'N',
    },
    ru: {
      low: 'т',
      up: 'Т',
    },
  },
  {
    codeName: 'KeyM',
    eng: {
      low: 'm',
      up: 'M',
    },
    ru: {
      low: 'ь',
      up: 'Ь',
    },
  },
  {
    codeName: 'Comma',
    eng: {
      low: ',',
      up: '<',
    },
    ru: {
      low: 'б',
      up: 'Б',
    },
  },
  {
    codeName: 'Period',
    eng: {
      low: '.',
      up: '>',
    },
    ru: {
      low: 'ю',
      up: 'Ю',
    },
  },
  {
    codeName: 'Slash',
    eng: {
      low: '/',
      up: '?',
    },
    ru: {
      low: '.',
      up: ',',
    },
  },
  {
    codeName: 'ArrowUp',
    eng: {
      low: '↑',
      up: '↑',
    },
    ru: {
      low: '↑',
      up: '↑',
    },
  },
  {
    codeName: 'ShiftRight',
    eng: {
      low: 'Shift',
      up: 'Shift',
    },
    ru: {
      low: 'Shift',
      up: 'Shift',
    },
  },
  {
    codeName: 'ControlLeft',
    eng: {
      low: 'Ctrl',
      up: 'Ctrl',
    },
    ru: {
      low: 'Ctrl',
      up: 'Ctrl',
    },
  },
  {
    codeName: 'Win',
    eng: {
      low: 'Win',
      up: 'Win',
    },
    ru: {
      low: 'Win',
      up: 'Win',
    },
  },
  {
    codeName: 'AltLeft',
    eng: {
      low: 'Alt',
      up: 'Alt',
    },
    ru: {
      low: 'Alt',
      up: 'Alt',
    },
  },
  {
    codeName: 'Space',
    eng: {
      low: '',
      up: '',
    },
    ru: {
      low: '',
      up: '',
    },
  },
  {
    codeName: 'AltRight',
    eng: {
      low: 'Alt',
      up: 'Alt',
    },
    ru: {
      low: 'Alt',
      up: 'Alt',
    },
  },
  {
    codeName: 'ArrowLeft',
    eng: {
      low: '←',
      up: '←',
    },
    ru: {
      low: '←',
      up: '←',
    },
  },
  {
    codeName: 'ArrowDown',
    eng: {
      low: '↓',
      up: '↓',
    },
    ru: {
      low: '↓',
      up: '↓',
    },
  },
  {
    codeName: 'ArrowRight',
    eng: {
      low: '→',
      up: '→',
    },
    ru: {
      low: '→',
      up: '→',
    },
  },
  {
    codeName: 'ControlRight',
    eng: {
      low: 'Ctrl',
      up: 'Ctrl',
    },
    ru: {
      low: 'Ctrl',
      up: 'Ctrl',
    },
  },
];
export default buttonsList;
