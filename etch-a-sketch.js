//get user number Input
function getUserNumber() {
  let userInput;
  do {
  userInput = parseInt(prompt('type your grid lenght: ', ''));
 } while (userInput < 1 || userInput > 100);
  return  userInput;
}

//make grid and return inBlock squares nodeList
function makeGrid(number) {
  const outBlock = document.querySelector('.out-block');
  const inBlock = document.querySelector('.in-block');
  const sketchBoard = document.querySelector('.sketch-board');

  let outBlockClone;

  for (let i = 0; i < number ; i++) {
    outBlockClone = outBlock.cloneNode(true);
    sketchBoard.insertAdjacentElement('beforeend', outBlockClone);
  }
  
  let outBlockGroup = document.querySelectorAll('.out-block');
  let inBlockClone;
    
  outBlockGroup.forEach((eachBlock) => {
    for (let j = 0; j < number; j++) {
      inBlockClone = inBlock.cloneNode(true);
      eachBlock.insertAdjacentElement("beforeend", inBlockClone);
    }  
  });

  let inBlockGroup = document.querySelectorAll('.in-block');

  return inBlockGroup
}

//add hover event on the squares
const blocks = makeGrid(40); //nodelist of 36 elements

blocks.forEach((block) => {
  block.addEventListener('mouseover', (e) => {
    block.style.backgroundColor = 'blue';
  })
});







