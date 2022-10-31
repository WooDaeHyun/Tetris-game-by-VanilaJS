//DOM
const playground = document.querySelector(".playground > ul");

//Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;


// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
  tree: [
    
  ]
}

const movingItem = {
  type: "",
  direction: 0,
  top: 0,
  left: 0,
};








// functions
function init() {
  for(let i = 0 ; i < 20; i++) {
    prependNewLine();
  }
}
init();


function prependNewLine() {
  const li = document.createElement('li');
  const ul = document.createElement('ul');

  for(let j = 0; j < 10; j++) {
    const matrix = document.createElement('li');
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li)
}