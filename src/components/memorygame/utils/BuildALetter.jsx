import shuffle from "lodash.shuffle";
import FontAwesoneClass from "./FontAwesomeClass";

const NUMBER_OF_LETTERS = 20;

export default () => {
  const fontAwesomeClass = FontAwesoneClass();
  const letters = [];

  while (letters.length < NUMBER_OF_LETTERS) {
    const index = Math.floor(Math.random() * fontAwesomeClass.length);
    const letter = {
      icon: fontAwesomeClass.splice(index, 1)[0],
      isGuessed: false
    };

    letters.push(letter);
    letters.push({ ...letter });
  }
  return shuffle(letters);
};
