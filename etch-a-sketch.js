//get user number Input
const btnGrid = document.querySelector('button#grid-size');

function getUserGrid() {
  let userChoice;
  do {
    userChoice = parseInt(prompt('type between 1 and 100: ', ''));
 } while (userChoice < 1 || userChoice > 100);
 return userChoice;
}
//dont return, only objects

//make grid and return inBlock squares nodeList
function makeGrid(number = getUserGrid()) {
  const outBlock = document.querySelector('div.out-block');
  const inBlock = document.querySelector('div.in-block');
  const sketchBoard = document.querySelector('div.sketch-board');

  let outBlockClone;
  for (let i = 0; i < number - 1; i++) {
    outBlockClone = outBlock.cloneNode(true);
    outBlockClone.classList.add('clone');
    sketchBoard.insertAdjacentElement('beforeend', outBlockClone);
  }
  
  const outBlockGroup = document.querySelectorAll('.out-block');
  
  let inBlockClone;  
  outBlockGroup.forEach((eachBlock) => {
    for (let j = 0; j < number - 1; j++) {
      inBlockClone = inBlock.cloneNode(true);
      inBlockClone.classList.add('clone');
      eachBlock.insertAdjacentElement("beforeend", inBlockClone);
    }  
  });

  const inBlockGroup = document.querySelectorAll('.in-block');
  return inBlockGroup;
}

//invoke
const blocks = makeGrid(); //nodelist of 36 elements

//set drawing event
//main hover event
function makeDraw(e) {
  this.style.backgroundColor = 'red';
  e.stopPropagation();
}

function stopDraw(e) {
  const blocks = document.querySelectorAll('.in-block');
  let blocksLength = blocks.length;
  for (let k = blocksLength - 1; k >= 0; k--) {
    blocks[k].removeEventListener('mouseover', makeDraw);
  }
  e.stopPropagation();
};

function resumeDraw(e) {
  const blocks = document.querySelectorAll('.in-block');
  blocks.forEach((block) => {
    block.addEventListener('mouseover', makeDraw);
  });
}

//only block event
blocks.forEach((block) => {
  block.addEventListener('mouseover', makeDraw);
  block.addEventListener('click', stopDraw);
  block.addEventListener('dblclick', resumeDraw);
}); 

//set reset btn
function resetDraw() {
  const blocks = document.querySelectorAll('.in-block');
  let blocksLength = blocks.length;
  for (let k = blocksLength - 1; k >= 0; k--) {
    blocks[k].style.backgroundColor = 'transparent'
    blocks[k].addEventListener('mouseover', makeDraw);
  }
}
const btnReset = document.querySelector('button');
btnReset.addEventListener('click', resetDraw); 

//set new grid from user
btnGrid.addEventListener('click', () => {
  removeGrid();
  makeGrid().forEach((block) => {
    block.addEventListener('mouseover', makeDraw);
    block.addEventListener('click', stopDraw);
    block.addEventListener('dblclick', resumeDraw);
  });
  const btnReset = document.querySelector('button');
  btnReset.addEventListener('click', resetDraw); 
});

function removeGrid() {
  const blocks = document.querySelectorAll('div.clone');
  blocks.forEach((block) => {
    block.remove();
  });
}

//grab consts and use inside function