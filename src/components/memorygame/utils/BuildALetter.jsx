import shuffle from 'lodash.shuffle';
const NUMBER_OF_LETTERS = 20;

export default() =>{
  const fontAwesoneClass = ['icono2', 'icono1'];
  let letters = [];

  while(letters.length < NUMBER_OF_LETTERS){
    const index = Math.floor(Math.random() = fontAwesoneClass.length);
    const letter = {
      icon: fontAwesoneClass.splice(index, 1)[0],
      isGuessed: false
    }

    letters.push(letter);
    letters.push({...letter})
  }
  return shuffle(letters);
}