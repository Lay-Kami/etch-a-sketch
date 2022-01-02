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

  return inBlockGroup;
}

//set drawing event
//main hover event
const blocks = makeGrid(10); //nodelist of 36 elements

function makeDraw(e) {
  this.style.backgroundColor = 'red';
  e.stopPropagation();
}

function stopDraw(e) {
  let blocksLength = blocks.length;
  for (let k = blocksLength - 1; k >= 0; k--) {
    blocks[k].removeEventListener('mouseover', makeDraw);
  }
  e.stopPropagation();
};

function resumeDraw(e) {
  blocks.forEach((block) => {
    block.addEventListener('mouseover', makeDraw);
  });
  e.stopPropagation();
}

//only block event
blocks.forEach((block) => {
  block.addEventListener('mouseover', makeDraw);
  block.addEventListener('click', stopDraw);
  block.addEventListener('dblclick', resumeDraw);
});

//set reset btn

function resetDraw() {
  let blocksLength = blocks.length;
  for (let k = blocksLength - 1; k >= 0; k--) {
    blocks[k].style.backgroundColor = 'transparent'
    blocks[k].addEventListener('mouseover', makeDraw);
  }
}
const btnReset = document.querySelector('button');
btnReset.addEventListener('click', resetDraw);



